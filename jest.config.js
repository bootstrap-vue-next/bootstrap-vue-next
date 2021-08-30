module.exports = {
    preset: 'vite-jest',
    extensionsToTreatAsEsm: ['.ts'],
    globals: {
        'ts-jest': {
            useESM: true,
        },
    },
    testRegex: "spec.js$",
    moduleFileExtensions: ["js", "vue", "ts"],
    transform: {
        "^.+\\.js$": "babel-jest",
        "^.+\\.ts$": "ts-jest",
        ".*\\.(vue)$": "vue3-jest"
    },
    coverageDirectory: "./coverage/",
    testEnvironmentOptions: {
        pretendToBeVisual: true
    },
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ["./tests/setup.ts"],
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/$1"
    }
}
