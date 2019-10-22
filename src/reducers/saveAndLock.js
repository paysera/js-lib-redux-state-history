import lock from './lock';
import save from './save';

export default state => lock(save(state));
