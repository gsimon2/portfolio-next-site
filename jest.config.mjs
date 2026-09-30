import nextJest from "next/jest.js";

const createJestConfig = nextJest({ dir: "./" });

/** @type {import('jest').Config} */
const config = {
   testEnvironment: "jsdom",
   setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
   moduleNameMapper: {
      "^@test-utils$": "<rootDir>/test-utils/index.tsx",
   },
   clearMocks: true,
   restoreMocks: true,
   collectCoverageFrom: [
      "components/**/*.{ts,tsx}",
      "pages/**/*.{ts,tsx}",
      "utils/**/*.{ts,tsx}",
      "!pages/_app.tsx",
      "!pages/_document.tsx",
      "!**/*.d.ts",
   ],
   coverageReporters: ["text", "lcov", "json-summary"],
};

export default createJestConfig(config);
