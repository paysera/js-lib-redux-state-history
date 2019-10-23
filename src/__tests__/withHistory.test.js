import each from 'jest-each';
import withHistory from '../withHistory';
import {
    SAVE,
    REVERT,
    SAVE_AND_LOCK,
    REVERT_AND_UNLOCK,
} from '../constants/actionTypes';
import save from '../reducers/save';
import revert from '../reducers/revert';
import saveAndLock from '../reducers/saveAndLock';
import revertAndUnlock from '../reducers/revertAndUnlock';

jest.mock('../reducers/save');
jest.mock('../reducers/revert');
jest.mock('../reducers/saveAndLock');
jest.mock('../reducers/revertAndUnlock');

describe('@paysera/redux-state-history withHistory', () => {
    it('test withHistory calls reducer if action does not match redux-state-history action', () => {
        const reducer = jest.fn();

        withHistory(reducer, {})({ someState: 1 }, 'some-action');

        expect(reducer).toBeCalledTimes(1);
        expect(save).toBeCalledTimes(0);
        expect(revert).toBeCalledTimes(0);
        expect(saveAndLock).toBeCalledTimes(0);
        expect(revertAndUnlock).toBeCalledTimes(0);
    });

    beforeEach(() => {
        jest.resetAllMocks();
    });

    each([
        [
            { type: SAVE },
            1,
            0,
            0,
            0,
        ],
        [
            { type: REVERT },
            0,
            1,
            0,
            0,
        ],
        [
            { type: SAVE_AND_LOCK },
            0,
            0,
            1,
            0,
        ],
        [
            { type: REVERT_AND_UNLOCK },
            0,
            0,
            0,
            1,
        ],
    ]).test(
        'test withHistory calls right redux-state-history reducers',
        (action, saveTimes, revertTimes, lockTimes, unlockTimes) => {
            const reducer = jest.fn();
            withHistory(reducer, {})({ someState: 1 }, action);

            expect(save).toBeCalledTimes(saveTimes);
            expect(revert).toBeCalledTimes(revertTimes);
            expect(saveAndLock).toBeCalledTimes(lockTimes);
            expect(revertAndUnlock).toBeCalledTimes(unlockTimes);
        },
    );
});
