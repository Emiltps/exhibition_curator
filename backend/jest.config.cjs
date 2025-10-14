// jest.config.cjs
const { defaultsESM } = require("ts-jest/presets"); // CommonJS import

module.exports = {
  ...defaultsESM,
  testEnvironment: "node",
  extensionsToTreatAsEsm: [".ts"],
  transform: {
    "^.+\\.ts$": ["ts-jest", { useESM: true }],
  },
};
