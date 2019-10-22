import each from 'jest-each';
import unlock from '../../reducers/unlock';
import HistoryLockError from '../../error/HistoryLockError';

describe('@paysera/redux-state-history unlock', () => {
    each([
        [
            {
                data: ['test-data'],
                history: {
                    states: [],
                    isLocked: true,
                    config: { maxHistoryLength: 10 },
                },
            },
            {
                data: ['test-data'],
                history: {
                    states: [],
                    isLocked: false,
                    config: { maxHistoryLength: 10 },
                },
            },
        ],
    ]).test('test unlock reducer', (state, expected) => {
        expect(unlock(state)).toStrictEqual(expected);
    });

    it('test unlock throws error if state history is not locked', () => {
        const state = {
            data: ['some-test-data2'],
            history: {
                states: [
                    { data: ['some-test-data1'] },
                ],
                isLocked: false,
                config: { maxHistoryLength: 10 },
            },
        };

        expect(() => unlock(state)).toThrow(HistoryLockError);
    });
});
