import each from 'jest-each';
import lock from '../../reducers/lock';
import HistoryLockError from '../../error/HistoryLockError';

describe('@paysera/redux-state-history lock', () => {
    each([
        [
            {
                data: ['test-data'],
                history: {
                    states: [],
                    isLocked: false,
                    config: { maxHistoryLength: 10 },
                },
            },
            {
                data: ['test-data'],
                history: {
                    states: [],
                    isLocked: true,
                    config: { maxHistoryLength: 10 },
                },
            },
        ],
    ]).test('test lock reducer', (state, expected) => {
        expect(lock(state)).toStrictEqual(expected);
    });

    it('test lock throws error if state history already locked', () => {
        const state = {
            data: ['some-test-data2'],
            history: {
                states: [
                    { data: ['some-test-data1'] },
                ],
                isLocked: true,
                config: { maxHistoryLength: 10 },
            },
        };

        expect(() => lock(state)).toThrow(HistoryLockError);
    });
});
