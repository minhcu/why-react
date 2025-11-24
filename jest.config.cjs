// jest.config.js
module.exports = {
    // Other Jest configurations...
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: 80,
        },
    },
    // You might also want to configure which files to collect coverage from:
    collectCoverageFrom: [
        "src/sum.js",
    ],
};