module.exports = {
  name: 'region-detail-ui',
  preset: '../../../jest.config.js',
  transform: {
    '^.+\\.[tj]sx?$': 'ts-jest'
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'html'],
  coverageDirectory: '../../../coverage/libs/region-detail/ui',
  setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts']
};
