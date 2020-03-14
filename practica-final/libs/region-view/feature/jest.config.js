module.exports = {
  name: 'region-view-feature',
  preset: '../../../jest.config.js',
  transform: {
    '^.+\\.[tj]sx?$': 'ts-jest'
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'html'],
  coverageDirectory: '../../../coverage/libs/region-view/feature',
  setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts']
};
