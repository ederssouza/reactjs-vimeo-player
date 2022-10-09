module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/dist/', '/node_modules/', '/public/'],
  moduleNameMapper: {
    '\\.css$': 'identity-obj-proxy'
  },
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/**/types.ts',
    '!src/**/index.ts',
    '!src/App.tsx',
    '!src/main.tsx',
    '!src/vite-env.d.ts'
  ],
  modulePaths: ['<rootDir>/src/'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  transform: {
    '^.+\\.tsx?$': 'babel-jest'
  }
}
