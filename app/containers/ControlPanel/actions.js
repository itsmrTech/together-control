/*
 *
 * ControlPanel actions
 *
 */

import SimplePeer from 'simple-peer';
import {
  DEFAULT_ACTION,
  SLIDESHOW_LOAD,
  SLIDESHOW_LOAD_SUCCESS,
  SLIDESHOW_LOAD_FAIL,
  SOCKET_CONNECT,
  CALL_START,
  CALL_GOT_DEVICE_SIGNAL,
  PEER_CREATE,
  PEER_SAVE,
  PICTURE_UPLOAD,
  CALL_HANGUP,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function loadSlideshow(device_unique_name) {
  return {
    type: SLIDESHOW_LOAD,
    device_unique_name,
  };
}
export function slideshowLoaded(slideshow, device) {
  console.log('hello slideshow', slideshow);
  return {
    type: SLIDESHOW_LOAD_SUCCESS,
    slideshow,
    device,
  };
}
export function slideshowLoadingFailed(error) {
  return {
    type: SLIDESHOW_LOAD_FAIL,
    error,
  };
}
export function connectSocket() {
  return {
    type: SOCKET_CONNECT,
  };
}
export function startCall(signal, device_unique_name) {
  return {
    type: CALL_START,
    signal,
    device_unique_name,
  };
}
export function hangupCall(device_unique_name) {
  return {
    type: CALL_HANGUP,

    device_unique_name,
  };
}
export function getDeviceSignal(signal) {
  console.log('device signal action');
  return {
    type: CALL_GOT_DEVICE_SIGNAL,
    signal,
  };
}
export function createPeer(stream) {
  console.log('stream action');
  return {
    type: PEER_CREATE,
    stream,
  };
}
export function savePeer(peer) {
  console.log('sdsds', peer);
  return {
    type: PEER_SAVE,
    peer,
  };
}
export function uploadPicture(files, device_unique_name) {
  return {
    type: PICTURE_UPLOAD,
    files,
    device_unique_name,
  };
}
