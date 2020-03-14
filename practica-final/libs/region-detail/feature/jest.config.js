module.exports = {
  name: 'region-detail-feature',
  preset: '../../../jest.config.js',
  transform: {
    '^.+\\.[tj]sx?$': 'ts-jest'
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'html'],
  coverageDirectory: '../../../coverage/libs/region-detail/feature',
  setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts']
};
