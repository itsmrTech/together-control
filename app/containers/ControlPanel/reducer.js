/*
 *
 * ControlPanel reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION, SLIDESHOW_LOAD_SUCCESS } from './constants';

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
        console.log('hello from reducer', draft.slideshow, action.slideshow);
        break;
    }
  });

export default controlPanelReducer;
