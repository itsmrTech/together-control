/**
 *
 * Asynchronously loads the component for NewDevice
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
