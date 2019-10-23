import HistoryLockError from '../error/HistoryLockError';
import EmptyHistoryError from '../error/EmptyHistoryError';

export default ({ history: { isLocked, states, ...remainingHistory } }) => {
    if (isLocked) {
        throw new HistoryLockError('Cannot revert state, because state history is locked');
    }
    if (states.length === 0) {
        throw new EmptyHistoryError('Cannot revert state, bacause state history is empty');
    }

    const lastState = states.pop();

    return {
        ...lastState,
        history: {
            ...remainingHistory,
            isLocked,
            states,
        },
    };
};
