/**
 *
 * Asynchronously loads the component for Gallery
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
