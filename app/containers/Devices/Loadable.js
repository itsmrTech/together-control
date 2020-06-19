/**
 *
 * Asynchronously loads the component for Devices
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
