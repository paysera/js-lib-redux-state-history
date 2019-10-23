import resolveConfig from '../service/resolveConfig';

export default (state, rawConfig) => ({
    ...state,
    history: {
        states: [],
        isLocked: false,
        config: resolveConfig(rawConfig),
    },
});
