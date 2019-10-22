import each from 'jest-each';
import { revert } from '../../reducers';
import HistoryLockError from '../../error/HistoryLockError';
import EmptyHistoryError from '../../error/EmptyHistoryError';

describe('@paysera/redux-state-history revert', () => {
    each([
        [
            {
                data: ['test-data'],
                history: {
                    states: [
                        { data: ['some-test-data'] },
                    ],
                    isLocked: false,
                    config: { maxHistoryLength: 10 },
                },
            },
            {
                data: ['some-test-data'],
                history: {
                    states: [],
                    isLocked: false,
                    config: { maxHistoryLength: 10 },
                },
            },
            1,
        ],
        [
            {
                data: ['test-data'],
                history: {
                    states: [
                        { data: ['some-test-data1'] },
                        { data: ['some-test-data2'] },
                    ],
                    isLocked: false,
                    config: { maxHistoryLength: 10 },
                },
            },
            {
                data: ['some-test-data2'],
                history: {
                    states: [
                        { data: ['some-test-data1'] },
                    ],
                    isLocked: false,
                    config: { maxHistoryLength: 10 },
                },
            },
        ],
    ]).test('test revert reducer', (state, expected) => {
        expect(revert(state)).toStrictEqual(expected);
    });

    it('test revert reducer throws error if revert state history empty', () => {
        const state = {
            data: ['some-test-data2'],
            history: {
                states: [],
                isLocked: false,
                config: { maxHistoryLength: 10 },
            },
        };

        expect(() => revert(state)).toThrow(EmptyHistoryError);
    });

    it('test revert reducer throws error if reverting locked state history', () => {
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

        expect(() => revert(state)).toThrow(HistoryLockError);
    });
});
