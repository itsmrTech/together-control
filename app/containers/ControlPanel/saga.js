// import { take, call, put, select } from 'redux-saga/effects';

import { call, takeLatest, put, fork, take } from 'redux-saga/effects';
import io from 'socket.io-client';
import SimplePeer from 'simple-peer';
import { eventChannel } from 'redux-saga';
import request, { requestAPI } from '../../utils/request';
import {
  slideshowLoaded,
  slideshowLoadingFailed,
  startCall,
  getDeviceSignal,
  savePeer,
} from './actions';
import {
  SLIDESHOW_LOAD,
  SOCKET_CONNECT,
  CALL_START,
  PEER_CREATE,
  PICTURE_UPLOAD,
  CALL_HANGUP,
} from './constants';
import vars from '../../utils/vars';
// Individual exports for testing
export default function* controlPanelSaga() {
  yield takeLatest(SLIDESHOW_LOAD, fetchSlideshow);
  yield takeLatest(PEER_CREATE, createPeer);
  yield takeLatest(PICTURE_UPLOAD, uploadPictureToSlideshow);
  yield fork(connectSocket);
  // See example in containers/HomePage/saga.js
}
export function* fetchSlideshow(action) {
  try {
    const { device_unique_name } = action;
    console.log(
      'hello',
      `/slideshows${
        device_unique_name ? `?device_unique_name=${device_unique_name}` : ''
      }`,
      device_unique_name,
    );
    const slideshow = yield call(
      requestAPI,
      `/slideshows${
        device_unique_name ? `?device_unique_name=${device_unique_name}` : ''
      }`,
    );
    console.log(slideshow);
    yield put(slideshowLoaded(slideshow.data.slideshow, slideshow.data.device));
  } catch (e) {
    yield put(slideshowLoadingFailed(e));
  }
}

function* handleIO(socket) {
  yield fork(sendingSignal, socket);
  yield fork(sendingHangup, socket);

  const channel = yield call(subscribe, socket);
  while (true) {
    const action = yield take(channel);
    yield put(action);
  }
}
function subscribe(socket) {
  return eventChannel(emit => {
    console.log('sub');
    socket.on('voip-peering', function({ signal }) {
      console.log('voip-peering');
      emit(getDeviceSignal(signal));
    });

    socket.on('disconnect', e => {
      // TODO: handle
    });
    return () => {};
  });
}
function* sendingSignal(socket) {
  while (true) {
    const { signal, device_unique_name } = yield take(CALL_START);
    console.log('startCall');
    socket.emit('voip-signal', { signal, device_unique_name });
  }
}
function* sendingHangup(socket) {
  while (true) {
    const { device_unique_name } = yield take(CALL_HANGUP);
    console.log('hangupCall');
    socket.emit('voip-hangup', { device_unique_name });
  }
} 
function connect() {
  const socket = io(vars.hostname);
  return new Promise(resolve => {
    socket.on('connect', () => {
      resolve(socket);
    });
  });
}
export function* connectSocket(action) {
  const socket = yield call(connect);
  const task = yield fork(handleIO, socket);
}
export function* createPeer(stream) {
  console.log('mmm');
  yield put(
    savePeer(
      new SimplePeer({
        initiator: true,
        trickle: false,
        reconnectTimer: 100,
        iceTransportPolicy: 'relay',
        trickle: false,
        stream: stream.stream,
        config: {
          iceServers: [
            {
              urls: 'turn:194.5.193.188:3478',
              username: 'shamot.group@gmail.com',
              credential: 'wjxQjRnsmNrv8uAU',
            },
          ],
        },
      }),
    ),
  );
}
export function* uploadPictureToSlideshow(action) {
  try {
    const { files, device_unique_name } = action;
    const data = new FormData();
    files.map((f, i) => data.append(`file${i}`, f));
    data.append('device_unique_name', device_unique_name);
    const slideshow = yield call(
      requestAPI,
      '/slideshows/photo/upload',
      data,
      'POST',
    );
    console.log(slideshow);
    yield put(slideshowLoaded(slideshow.data.slideshow, slideshow.data.device));
  } catch (e) {
    yield put(slideshowLoadingFailed(e));
  }
}
