// https://medium.com/@gunnarlium/es6-code-coverage-with-babel-jspm-karma-jasmine-and-istanbul-2c1918c5bb23#.k76ideqi2

// https://github.com/alexweber/es6-jspm-gulp-boilerplate

/* global module */
module.exports = function (config) {
    'use strict';
    config.set({
        basePath: "",
        autoWatch: true,
        singleRun: false,
        frameworks: ['jspm', 'jasmine'],
        jspm: {
            config: 'config.js',
            packages: "jspm_packages/",
            loadFiles: [
                'Source/**/*.js',
                'Specifications/**/*.js'
            ],
            serveFiles: [
                
               
            ]
        },

        
        //preprocessors: {
        //    'Specifications/**/*.js': ['babel'],
        //    'Source/**/*.js': ['babel']
        //},        
        
        
        proxies: {
            '/Source': '/base/Source'
        },
        
        port: 9876,
        
        browsers: ['PhantomJS'],
        reporters: ['progress']
    });
};