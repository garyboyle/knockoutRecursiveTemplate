module.exports = function(grunt){

	grunt.initConfig({
		bowercopy:{
			libs:{
				files : {
					'scripts/knockout.js': 'knockout/dist/knockout.js',
					'scripts/materialize.min.js': 'Materialize/dist/js/materialize.min.js',
					'css/materialize.min.css': 'Materialize/dist/css/materialize.min.css',
					'scripts/jquery.min.js': 'jquery/dist/jquery.min.js',
					'font/':'Materialize/dist/font/'
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-bowercopy');

	grunt.registerTask('default', ['bowercopy']);
}