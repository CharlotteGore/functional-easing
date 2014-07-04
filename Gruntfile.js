'use strict';

var serverRootUri = 'http://127.0.0.1:8080';
var mochaPhantomJsTestRunner = serverRootUri + '/testrunner.html';

/* jshint -W106 */
module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      files: [
      	'index.js'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // browserify everything
    browserify: {
      // build the tests
      tests: {
        src: [ 'test/test.js' ],
        dest: 'test/browserified_tests.js',
        options: {
          bundleOptions : {
          	debug : true
          }
        }
      }
    },

    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['test']
    },

    // run the mocha tests in the browser via PhantomJS
    'mocha_phantomjs': {
      all: ['test/testrunner.html']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-mocha-phantomjs');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('test', ['jshint', 'browserify','mocha_phantomjs']);
}
