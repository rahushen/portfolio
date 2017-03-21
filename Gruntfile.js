module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      featured: {
        options: {
          engine: 'im',
          sizes: [{
            width: 720,
            height: 400,
	    gravity: 'Center',
            aspectRatio: false,
            suffix: '_small',
            quality: 30
          }]
        },
        files: [{
          expand: true,
          src: ['appify.jpg','sunflower.jpg','bokeh.jpg'],
          cwd: 'img_src/',
          dest: 'img/'
        }]
      },
      hero: {
        options: {
          engine: 'im',
          sizes: [{
            width: 1140,
            height: 350,
	    gravity: 'Center',
	    aspectRatio: false,
            suffix: '_medium',
            quality: 70
          }]
        },
        files: [{
          expand: true,
          src: ['hero.jpg'],
          cwd: 'img_src/',
          dest: 'img/'
        }]
      }
    },
  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.registerTask('default', ['responsive_images']);

};
