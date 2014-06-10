/* global module:true */
module.exports = function(grunt) {
    "use strict";

    grunt.initConfig({
        // require js optimization
        requirejs: {
            compile: {
                options: {
                	 baseUrl: './assets/js',
                     mainConfigFile: './assets/js/require_main.js',
                     optimize: 'none',
                     name: "app",
                     //wrapShim: true,
                     findNestedDependencies: true,
                     out: "weather-app-min.js"
                }
            }
        }
    });

    // load the tasks we've utilized within this config
    grunt.loadNpmTasks("grunt-contrib-requirejs");

    // define the default (no arg) task to run requirejs and cssmin
    grunt.registerTask("default", ["requirejs"]);

};