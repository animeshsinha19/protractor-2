exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    framework: 'jasmine',
    capabilities: {
        browserName: 'chrome',
    },
    specs: ['test-lib/**.js']
};