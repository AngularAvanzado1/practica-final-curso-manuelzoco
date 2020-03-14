module.exports = {
  name: 'regions-list-ui',
  preset: '../../../jest.config.js',
  transform: {
    '^.+\\.[tj]sx?$': 'ts-jest'
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'html'],
  coverageDirectory: '../../../coverage/libs/regions-list/ui',
  setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts']
};
