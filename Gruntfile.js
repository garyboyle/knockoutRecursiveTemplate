module.exports = function(grunt){

	grunt.initConfig({
		bowercopy:{
			libs:{
				files : {
				'scripts/knockout.js': 'knockout/dist/knockout.js',
				'scripts/materialize.min.js': 'Materialize/dist/js/materialize.min.js'
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-bowercopy');

	grunt.registerTask('default', ['bowercopy']);
}