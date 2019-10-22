import HistoryLockError from '../error/HistoryLockError';

export default ({ history: { isLocked, states, ...remainingHistory }, ...remainingState }) => {
    if (isLocked) {
        throw new HistoryLockError('Cannot save state, because state history is locked');
    }

    const nextStates = states;
    nextStates.push(remainingState);

    const { config: { maxHistoryLength } } = remainingHistory;
    if (nextStates.length > maxHistoryLength) {
        nextStates.shift();
    }

    return {
        ...remainingState,
        history: {
            ...remainingHistory,
            states: nextStates,
            isLocked,
        },
    };
};
