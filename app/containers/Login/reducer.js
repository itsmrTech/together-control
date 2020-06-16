/*
 *
 * Login reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION, LOGIN, LOGIN_SUCCESS } from './constants';

export const initialState = {
  user: {
    email: "",
    _id: "",
    firstName: "",
    lastName: ""
  },
  token:""
};

/* eslint-disable default-case, no-param-reassign */
const loginReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case LOGIN_SUCCESS:
        draft.user=action.user;
        draft.token=action.token;
        console.log("tok",draft.token,action.token)
        break;
    }
  });

export default loginReducer;
