module.exports = {
  name: 'regions-list-feature',
  preset: '../../../jest.config.js',
  transform: {
    '^.+\\.[tj]sx?$': 'ts-jest'
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'html'],
  coverageDirectory: '../../../coverage/libs/regions-list/feature',
  setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts']
};
