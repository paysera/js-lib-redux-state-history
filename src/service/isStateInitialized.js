export default (state) => {
    if (typeof state.history === 'undefined') {
        return false;
    }
    const { history } = state;

    return (
        typeof history.isLocked !== 'undefined'
        && typeof history.states !== 'undefined'
        && typeof history.config !== 'undefined'
    );
};
