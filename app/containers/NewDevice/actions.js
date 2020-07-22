/*
 *
 * NewDevice actions
 *
 */

import {
  DEFAULT_ACTION,
  PAIR,
  PAIR_SUCCESS,
  PAIR_FAIL,
  DEVICE_LOAD,
  DEVICE_LOAD_FAIL,
  DEVICE_LOAD_SUCCESS,
  DEVICE_SET_NAME,
  DEVICE_SET_NAME_SUCCESS,
  DEVICE_SET_NAME_FAIL,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function pair(pairing_code) {
  console.log('action');
  return {
    type: PAIR,
    pairing_code,
  };
}
export function paired(device) {
  return {
    type: PAIR_SUCCESS,
    device,
  };
}
export function pairingFailed(error) {
  return {
    type: PAIR_FAIL,
    error,
  };
}

export function loadDevice(device_unique_name) {
  return {
    type: DEVICE_LOAD,
    device_unique_name,
  };
}
export function deviceLoaded(device) {
  return {
    type: DEVICE_LOAD_SUCCESS,
    device,
  };
}
export function loadingDeviceFailed(error) {
  return {
    type: DEVICE_LOAD_FAIL,
    error,
  };
}

export function setDeviceName(name, device_unique_name) {
  return {
    type: DEVICE_SET_NAME,
    device_unique_name,
    name,
  };
}
export function deviceNameSubmitted(device) {
  return {
    type: DEVICE_SET_NAME_SUCCESS,
    device,
  };
}
export function settingDeviceNameFailed(error) {
  return {
    type: DEVICE_SET_NAME_FAIL,
    error,
  };
}
