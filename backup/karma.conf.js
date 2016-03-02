'use strict';

// https://medium.com/@gunnarlium/es6-code-coverage-with-babel-jspm-karma-jasmine-and-istanbul-2c1918c5bb23#.g0ajs26sn

module.exports = function(config) {
  config.set({
    basePath: "",
    frameworks: ["jspm", "mocha"],

    jspm: {
        loadFiles: [
            "Specifications/**/*.js"
        ],
        serveFiles: [
            "Source/**/*.js"
        ]
    },
    
    files: [],

    exclude: [
    ],

    preprocessors: {
      "Source/**/*.js": ["babel"],
      "Specifications/**/*.js": ["babel"]
    },
    
    babelPreprocessor: {
      options: {
        sourceMap: 'inline',
        modules: "system",
        moduleIds: false,
        loose: "all",
        presets: ['es2015'],
        plugins: [
            "transform-decorators"
        ]
      },
    },

    reporters: ['progress'],

    port: 9876,

    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: ["Chrome"],

    singleRun: false,

    concurrency: Infinity
  })
}
