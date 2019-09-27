module.exports = {
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/dist/',
    ],
    testPathIgnorePatterns: [
      '<rootDir>/node_modules/',
      '<rootDir>/dist/'
    ],
    testEnvironment: 'node'
}