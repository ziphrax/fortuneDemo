var gulp = require('gulp')
	,dependencies = {
		js: [
			'bower_components/jquery/dist/jquery.min.js',
			'bower_components/jquery/dist/jquery.min.map',
			'bower_components/bootstrap/dist/js/bootstrap.min.js',
			'bower_components/ember/ember.min.js'
		],
		fonts: ['bower_components/bootstrap/dist/fonts/*'],
		css: ['bower_components/bootstrap/dist/css/*.min.*',
				'bower_components/bootstrap/dist/css/*.map',
				'other_components/bootstrap-markdown/css/bootstrap-markdown.min.css'
			]
	};

gulp.task('default',['move-dependencies'],function(){
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