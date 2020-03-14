module.exports = {
  preset: 'jest-preset-angular',
  roots: ['libs/api'],
  setupFilesAfterEnv: ['<rootDir>/libs/api/test-setup.ts']
};
