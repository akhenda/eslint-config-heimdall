/** @type {import('jest').Config} */
const config = {
  coverageReporters: ['json-summary', 'text', 'lcov', 'json', 'html', 'text-summary'],
  testMatch: ['**/?(*.)+(spec|test).js'],
};

module.exports = config;
