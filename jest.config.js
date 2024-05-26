module.exports = {
  preset: 'react-native',
  roots: ['<rootDir>/src'],
  setupFilesAfterEnv: ['<rootDir>/jest-setup.js'],
  moduleNameMapper: {
    '^@commons/(.*)$': '<rootDir>/src/commons/$1',
    '^@modules/(.*)$': '<rootDir>/src/modules/$1',
    '^@core/(.*)$': '<rootDir>/src/core/$1',
    '^@providers/(.*)$': '<rootDir>/src/providers/$1',
  },
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native(-.*)?|@react-native(-community)?)/)',
  ],
};
