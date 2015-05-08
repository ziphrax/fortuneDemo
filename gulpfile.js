var gulp = require('gulp')
	,concat = require('gulp-concat')
	,debug = require('gulp-debug')
	,dependencies = {
		emberApp:[
			'app/ember/application/*.js',
			'app/ember/components/*.js',
			'app/ember/models/*.js',
			'app/ember/controllers/*.js',
			'app/ember/routes/*.js',
		],
		emberTemplates: [
			'app/ember/templates/*.hbs'
		],
		js: [
			'bower_components/jquery/dist/jquery.min.js',
			'bower_components/jquery/dist/jquery.min.map',
			'bower_components/bootstrap/dist/js/bootstrap.min.js',
			'bower_components/ember/ember.min.js',
			'bower_components/ember-data/ember-data.min.js'
		],
		fonts: [
			'bower_components/bootstrap/dist/fonts/*'
		],
		css: [
			'bower_components/bootstrap/dist/css/*.min.*',
			'bower_components/bootstrap/dist/css/*.map'
		]
	};

gulp.task('default',['move-dependencies','ember-concat'],function(){
	return;
});

gulp.task('move-dependencies',['js-dependencies','fonts-dependencies','css-dependencies'],function(){
	return;
});

gulp.task('js-dependencies',function(){
	return gulp.src(dependencies.js)		
		.pipe(gulp.dest('./public/'));
});

gulp.task('fonts-dependencies',function(){
	return gulp.src(dependencies.fonts)		
		.pipe(gulp.dest('./public/fonts/'));
});

gulp.task('css-dependencies',function(){
	return gulp.src(dependencies.css)		
		.pipe(gulp.dest('./public/css/'));
});

gulp.task('ember-concat',function(){
	return gulp.src(dependencies.emberApp)
		.pipe(debug({title: 'ember-concat:'}))
		.pipe(concat('main.js'))
		.pipe(debug({title: 'ember-concat:'}))
		.pipe(gulp.dest('./public/'));
});