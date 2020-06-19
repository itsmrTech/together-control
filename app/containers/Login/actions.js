/*
 *
 * Login actions
 *
 */

import { DEFAULT_ACTION, LOGIN,LOGIN_SUCCESS,LOGIN_FAIL } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function login(email,password){
  console.log("hello login action")
  return {
    type:LOGIN,
    email,
    password
  }
}
export function loginSucceed(token,user,devices){
  return {
    type:LOGIN_SUCCESS,
    token,
    user,
    devices
  }
}
export function loginFailed(error) {
  return {
    type: LOGIN_FAIL,
    error,
  };
}