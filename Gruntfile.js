'use strict';

module.exports = function(grunt) {
  // Automatically load in all Grunt npm tasks
  require('load-grunt-config')(grunt);

  // default - Register tasks
  grunt.registerTask('default', ['build','jshint']);

  grunt.registerTask('build', ['jshint']);
  grunt.registerTask('tasks', ['availabletasks']);
};
