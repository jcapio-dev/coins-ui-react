export default {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    transform: {
        "^.+\\.tsx?$": "ts-jest",
        '.+\\.(css|styl|less|sass|scss)$': 'jest-transform-css'
    // process `*.tsx` files with `ts-jest`
    },
    moduleNameMapper: {
        '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/__test__/__ mocks __/fileMock.js',
         "\\.(css|scss)$": "<rootDir>/__test__/__mocks__/styleMock.js"
    }
}