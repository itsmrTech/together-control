/**
 *
 * Asynchronously loads the component for Device
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
