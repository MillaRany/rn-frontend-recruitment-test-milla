// Mock @expo/vector-icons (fonts not available in Jest)
jest.mock("@expo/vector-icons", () => {
  const React = require("react");
  const { Text } = require("react-native");
  return {
    Ionicons: (props) =>
      React.createElement(Text, { ...props }, props.name || ""),
  };
});

// Mock expo-image (uses native modules not available in Jest)
jest.mock("expo-image", () => {
  const React = require("react");
  const { View } = require("react-native");
  return {
    Image: (props) =>
      React.createElement(View, { testID: "expo-image", ...props }),
  };
});