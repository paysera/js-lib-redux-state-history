import revert from './revert';
import unlock from './unlock';

export default state => revert(unlock(state));
