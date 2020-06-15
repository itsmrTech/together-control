/*
 *
 * ControlPanel actions
 *
 */

import {
  DEFAULT_ACTION,
  SLIDESHOW_LOAD,
  SLIDESHOW_LOAD_SUCCESS,
  SLIDESHOW_LOAD_FAIL,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function loadSlideshow() {
  return {
    type: SLIDESHOW_LOAD,
  };
}
export function slideshowLoaded(slideshow) {
  console.log('hello slideshow', slideshow);
  return {
    type: SLIDESHOW_LOAD_SUCCESS,
    slideshow,
  };
}
export function slideshowLoadingFailed(error) {
  return {
    type: SLIDESHOW_LOAD_FAIL,
    error,
  };
}
