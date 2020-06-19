/*
 *
 * NewDevice actions
 *
 */

import { DEFAULT_ACTION, PAIR, PAIR_SUCCESS, PAIR_FAIL } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function pair(pairing_code){
  console.log("action")
  return {
    type:PAIR,
    pairing_code
  }
}
export function paired(){
  return {
    type:PAIR_SUCCESS
  }
}
export function pairingFailed(error){
  return {
    type:PAIR_FAIL,
    error
  }
}