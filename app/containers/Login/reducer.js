/*
 *
 * Login reducer
 *
 */
import produce from 'immer';
import Cookies from 'universal-cookie';
import { DEFAULT_ACTION, LOGIN, LOGIN_SUCCESS } from './constants';
import vars from '../../utils/vars';

export const initialState = {
  user: {
    email: '',
    _id: '',
    firstName: '',
    lastName: '',
  },
  devices: [],
  token: localStorage.getItem('token'),
};

/* eslint-disable default-case, no-param-reassign */
const loginReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case LOGIN_SUCCESS:
        draft.user = action.user;
        draft.token = action.token;
        draft.devices = action.devices;
        localStorage.setItem('token', action.token);
        const cookies = new Cookies();
        cookies.set('x-access-token', action.token, {
          path: '/',
          domain: vars.domain,
        });
        console.log('tok', draft.token, action.token);
        break;
    }
  });

export default loginReducer;
