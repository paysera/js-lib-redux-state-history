module.exports = {
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
    },
    roots: ['src/'],
    collectCoverageFrom: ['**/src/**/*.{js,jsx}'],
};
