import { MAX_HISTORY_LENGTH } from '../constants/defaultConfig';

export default config => ({
    maxHistoryLength: config.maxHistoryLength || MAX_HISTORY_LENGTH,
});
