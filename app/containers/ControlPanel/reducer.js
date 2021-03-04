/*
 *
 * ControlPanel reducer
 *
 */
import produce from 'immer';
import {
  DEFAULT_ACTION,
  SLIDESHOW_LOAD_SUCCESS,
  CALL_GOT_DEVICE_SIGNAL,
  PEER_SAVE,
  CALL_HANGUP,
} from './constants';

export const initialState = {
  slideshow: {
    photos: [],
    deviceid: '',
  },
  device: {
    _id: '',
    name: '',
    status: '',
    code: '',
    socketid: '',
  },
};

/* eslint-disable default-case, no-param-reassign */
const controlPanelReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case SLIDESHOW_LOAD_SUCCESS:
        draft.slideshow = action.slideshow;
        draft.device = action.device;
        console.log('hello from reducer', action.device, action.slideshow);
        break;
      case CALL_GOT_DEVICE_SIGNAL:
        console.log('device signal reducer', action.signal);
        draft.deviceSignal = action.signal;
        break;
      case CALL_HANGUP:
        draft.device_unique_name = action.device_unique_name;
        break;
      case PEER_SAVE:
        draft.peer = action.peer;
        draft.peer.debug = console.log;

        break;
    }
  });

export default controlPanelReducer;
