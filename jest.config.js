module.exports = {
  preset: "react-native",
  transformIgnorePatterns: [
    "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg|@testing-library|test-renderer)",
  ],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "\\.(gif|png|jpg|jpeg|ttf|mp4|mov)$":
      "<rootDir>/__mocks__/fileMock.js",
  },
  setupFiles: [
    require.resolve("react-native/jest/setup.js"),
    "<rootDir>/jest.setup.js",
  ],
  testPathIgnorePatterns: ["/node_modules/", "/android/", "/ios/", "/\\.expo/"],
};