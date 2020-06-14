import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the controlPanel state domain
 */

const selectControlPanelDomain = state => state.controlPanel || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by ControlPanel
 */

const makeSelectControlPanel = () =>
  createSelector(
    selectControlPanelDomain,
    substate => substate,
  );

export default makeSelectControlPanel;
export { selectControlPanelDomain };
