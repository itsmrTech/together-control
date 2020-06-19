import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the devices state domain
 */

const selectDevicesDomain = state => state.devices || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Devices
 */

const makeSelectDevices = () =>
  createSelector(
    selectDevicesDomain,
    substate => substate,
  );

export default makeSelectDevices;
export { selectDevicesDomain };
