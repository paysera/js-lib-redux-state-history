const prefix = '@@redux-history';

const SAVE = `${prefix}/SAVE`;
const REVERT = `${prefix}/REVERT`;
const SAVE_AND_LOCK = `${prefix}/SAVE_AND_LOCK`;
const REVERT_AND_UNLOCK = `${prefix}/REVERT_AND_UNLOCK`;
const LOCK = `${prefix}/LOCK`;
const UNLOCK = `${prefix}/UNLOCK`;

export {
    SAVE,
    REVERT,
    SAVE_AND_LOCK,
    REVERT_AND_UNLOCK,
    LOCK,
    UNLOCK,
};
