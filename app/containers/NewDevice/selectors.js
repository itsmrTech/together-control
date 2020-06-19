import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the newDevice state domain
 */

const selectNewDeviceDomain = state => state.newDevice || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by NewDevice
 */

const makeSelectNewDevice = () =>
  createSelector(
    selectNewDeviceDomain,
    substate => substate,
  );

export default makeSelectNewDevice;
export { selectNewDeviceDomain };
