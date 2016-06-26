module.exports = function() {
    return {
        files: [
            "Source/**/*.js"
        ],
        test: [
            "Specifications/**/*.js"
        ],

        compilers: {
            "**/*.js": wallaby.compilers.babel()
        },

        debug: true
    };
};