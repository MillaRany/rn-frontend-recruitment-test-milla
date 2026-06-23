const { getDefaultConfig } = require("expo/metro-config");
const path = require("path");

const config = getDefaultConfig(__dirname);

config.resolver.resolveRequest = (context, moduleName, platform) => {
  if (moduleName === "zustand") {
    return { type: "sourceFile", filePath: require.resolve("./node_modules/zustand/index.js") };
  }
  if (moduleName === "zustand/middleware") {
    return { type: "sourceFile", filePath: require.resolve("./node_modules/zustand/middleware.js") };
  }
  return context.resolveRequest(context, moduleName, platform);
};

module.exports = config;
