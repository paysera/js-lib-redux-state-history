import each from 'jest-each';
import { save } from '../../reducers';
import HistoryLockError from '../../error/HistoryLockError';

describe('@paysera/redux-state-history save', () => {
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
                    states: [
                        { data: ['test-data'] },
                    ],
                    isLocked: false,
                    config: { maxHistoryLength: 10 },
                },
            },
        ],
        [
            {
                data: ['test-data2'],
                history: {
                    states: [
                        { data: ['test-data1'] },
                    ],
                    isLocked: false,
                    config: { maxHistoryLength: 10 },
                },
            },
            {
                data: ['test-data2'],
                history: {
                    states: [
                        { data: ['test-data1'] },
                        { data: ['test-data2'] },
                    ],
                    isLocked: false,
                    config: { maxHistoryLength: 10 },
                },
            },
        ],
        [
            {
                data: ['test-data3'],
                history: {
                    states: [
                        { data: ['test-data1'] },
                        { data: ['test-data2'] },
                    ],
                    isLocked: false,
                    config: { maxHistoryLength: 2 },
                },
            },
            {
                data: ['test-data3'],
                history: {
                    states: [
                        { data: ['test-data2'] },
                        { data: ['test-data3'] },
                    ],
                    isLocked: false,
                    config: { maxHistoryLength: 2 },
                },
            },
        ],
    ]).test('test save reducer', (state, expected) => {
        expect(save(state)).toStrictEqual(expected);
    });

    it('test save throws error if history locked', () => {
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

        expect(() => save(state)).toThrow(HistoryLockError);
    });
});
