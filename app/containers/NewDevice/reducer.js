/*
 *
 * NewDevice reducer
 *
 */
import produce from 'immer';
import {
  DEFAULT_ACTION,
  PAIR_SUCCESS,
  PAIR_FAIL,
  DEVICE_LOAD_SUCCESS,
  DEVICE_LOAD_FAIL,
  DEVICE_SET_NAME,
  DEVICE_SET_NAME_FAIL,
  DEVICE_SET_NAME_SUCCESS,
} from './constants';

export const initialState = {
  device: {
    name: '',
    status: '',
    code: '',
    owner: '',
    users: [],
  },
  paired: false,
  redirect: null,
};

/* eslint-disable default-case, no-param-reassign */
const newDeviceReducer = (state = initialState, action) =>
  produce(state, draft => {
    draft.ts = Date.now();
    draft.redirect = null;
    draft.hard_redirect = false;

    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case PAIR_SUCCESS:
        draft.device = action.device;
        draft.error = null;
        draft.paired = true;
        break;
      case PAIR_FAIL:
        draft.error = 'Wrong Code. Type the number shown on your device.';
        draft.paired = false;
        break;
      case DEVICE_LOAD_SUCCESS:
        draft.device = action.device;
        draft.error = null;
        draft.paired = true;
        break;
      case DEVICE_LOAD_FAIL:
        draft.redirect = '/device-setup';
        break;
      case DEVICE_SET_NAME_SUCCESS:
        draft.redirect = `/device/${action.device.unique_name}`;
        draft.hard_redirect = true;
        draft.device = action.device;
        draft.completed = true;
        break;
      case DEVICE_SET_NAME_FAIL:
        draft.completed = false;
        draft.error = action.error;
        break;
    }
  });

export default newDeviceReducer;
