'use strict';

module.exports = function(grunt){

  // Config

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    'http-server': {
      port: 8282,
      host: '0.0.0.0',
      ext: 'html',
      openBrowser: true
    },
  });

  // LOAD libraries
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-http-server');

  // Tasks
  grunt.registerTask('default', ['http-server']);
};
