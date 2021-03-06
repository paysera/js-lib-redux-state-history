import HistoryLockError from '../error/HistoryLockError';

export default ({ history: { isLocked, ...remainingHistory }, ...remainingState }) => {
    if (isLocked) {
        throw new HistoryLockError('State history is already locked');
    }

    return {
        ...remainingState,
        history: {
            ...remainingHistory,
            isLocked: true,
        },
    };
};
