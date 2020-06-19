/*
 *
 * NewDevice reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION, PAIR_SUCCESS,PAIR_FAIL } from './constants';

export const initialState = {
  device: {
    name: "",
    status: "",
    code: "",
    owner: "",
    users: []
  },
  paired: false
};

/* eslint-disable default-case, no-param-reassign */
const newDeviceReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case PAIR_SUCCESS:
        draft.device = action.device;
        draft.paired = true
        break;
      case PAIR_FAIL:
        draft.error = "Wrong Code. Type the number shown on your device."; 
        draft.paired = false;
        draft.ts=Date.now();
        break;
    }
  });

export default newDeviceReducer;
