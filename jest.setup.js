/* eslint-env jest */
// Jest setup file for react-native-shared-passwords

// Mock expo-constants (not installed by default)
jest.mock(
  'expo-constants',
  () => ({
    default: {
      executionEnvironment: 'bare',
      appOwnership: null,
    },
  }),
  { virtual: true }
);

// Reset mocks between tests
beforeEach(() => {
  jest.clearAllMocks();
});
