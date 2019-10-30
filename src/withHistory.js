import {
    init,
    save,
    revert,
    saveAndLock,
    revertAndUnlock,
    lock,
    unlock,
} from './reducers';
import {
    SAVE,
    REVERT,
    SAVE_AND_LOCK,
    REVERT_AND_UNLOCK,
    LOCK,
    UNLOCK,
} from './constants/actionTypes';
import isStateInitialized from './service/isStateInitialized';

export default (reducer, rawConfig = {}) => (state, action, ...rest) => {
    const actionType = action.type || undefined;

    let initializedState = state;
    if (typeof state !== 'undefined' && !isStateInitialized(state)) {
        initializedState = init(state, rawConfig);
    }

    if (actionType === SAVE) {
        return save(initializedState);
    }
    if (actionType === REVERT) {
        return revert(initializedState);
    }
    if (actionType === SAVE_AND_LOCK) {
        return saveAndLock(initializedState);
    }
    if (actionType === REVERT_AND_UNLOCK) {
        return revertAndUnlock(initializedState);
    }
    if (actionType === LOCK) {
        return lock(initializedState);
    }
    if (actionType === UNLOCK) {
        return unlock(initializedState);
    }

    return reducer(initializedState, action, ...rest);
};
