module.exports = function(grunt) {

  grunt.initConfig({
    sass: {                              // Task
      dist: {
        files: [{
          expand: true,
          cwd: 'styles',
          src: ['css/*.scss'],
          dest: 'css',
          ext: '.css'
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');

};
