import withHistory from './withHistory';
import dispatchAction from './dispatchAction';
import {
    save,
    revert,
    saveAndLock,
    revertAndUnlock,
    lock,
    unlock,
} from './actions';

export default withHistory;

export {
    withHistory,
    dispatchAction,
    save,
    revert,
    saveAndLock,
    revertAndUnlock,
    lock,
    unlock,
};
