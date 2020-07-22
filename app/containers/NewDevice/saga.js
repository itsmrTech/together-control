// import { take, call, put, select } from 'redux-saga/effects';

import { put, takeLatest, call } from 'redux-saga/effects';
import { requestAPI } from '../../utils/request';
import {
  paired,
  pairingFailed,
  deviceLoaded,
  loadingDeviceFailed,
  deviceNameSubmitted,
  settingDeviceNameFailed,
} from './actions';
import { PAIR, DEVICE_LOAD, DEVICE_SET_NAME } from './constants';

// Individual exports for testing
export default function* newDeviceSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(PAIR, pair);
  yield takeLatest(DEVICE_LOAD, fetchDevice);
  yield takeLatest(DEVICE_SET_NAME, setDeviceName);
}

export function* pair(action) {
  try {
    const { pairing_code } = action;
    const result = yield call(
      requestAPI,
      '/devices/pair',
      { pairing_code },
      'POST',
    );
    console.log('api', result);
    // const {token,user}=result.data
    yield put(paired(result.data.device));
  } catch (e) {
    yield put(pairingFailed(e));
  }
}

export function* fetchDevice(action) {
  try {
    const { device_unique_name } = action;
    const result = yield call(
      requestAPI,
      `/devices/?device_unique_name=${device_unique_name}`,
      {},
      'GET',
    );
    console.log('api', result);
    // const {token,user}=result.data
    yield put(deviceLoaded(result.data.device));
  } catch (e) {
    yield put(loadingDeviceFailed(e));
  }
}

export function* setDeviceName(action) {
  try {
    const { device_unique_name, name } = action;
    const result = yield call(
      requestAPI,
      '/devices/name',
      { device_unique_name, name },
      'PUT',
    );
    console.log('api', result);
    // const {token,user}=result.data
    yield put(deviceNameSubmitted(result.data.device));
  } catch (e) {
    yield put(settingDeviceNameFailed(e));
  }
}
