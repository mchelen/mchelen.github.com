/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    // Task configuration.

    image_resize: {
      resize: {
        options: {
          width: 100,
        },
        src: 'file/*.jpg',
        dest: 'file/thumbs/'
      }
    },


  });

  grunt.loadNpmTasks('grunt-image-resize');
  
  // Default task.
  grunt.registerTask('default', ['jshint', 'qunit', 'concat', 'uglify']);

  grunt.registerTask('resize', [
  'image_resize'
  ]);
  
};

