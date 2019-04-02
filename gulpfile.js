'use strict';

var gulp         = require('gulp'),
	sass         = require('gulp-sass'),
	concat       = require('gulp-concat'),
	uglify       = require('gulp-uglify'),
	cssnano      = require('gulp-cssnano'),
	browserSync  = require('browser-sync'),
	autoprefixer = require('gulp-autoprefixer');

gulp.task('default',function(){
	console.log('Работает');
});

gulp.task('sass', function(){
	return gulp.src('./scss/style.scss')
	.pipe(sass().on('error',sass.logError))
	.pipe(autoprefixer(['last 5 versions', '> 1%'], {cascade: true}))
	.pipe(cssnano())
	.pipe(gulp.dest('./css'))
	.pipe(browserSync.reload({stream: true}));
});

gulp.task('sass:watch', function(){
	gulp.watch('./scss/*.scss', ['sass']);
});

gulp.task('browser-sync',function(){
	browserSync.init({
		server: {
			baseDir: './'
		},
		notify: false
	});
});

gulp.task('watch', ['browser-sync'], function(){
	gulp.watch('./scss/*.scss', ['sass']).on('end',browserSync.reload);
	gulp.watch('./**/*.html', browserSync.reload);
	gulp.watch('./**/*.php', browserSync.reload);
	gulp.watch('./js/**/*.js', browserSync.reload);
});

gulp.task('compress-css', function () {
	gulp.src([
		'app/bower/normalize.css/normalize.css',
		'app/bower/bootstrap-css-only/css/bootstrap.min.css',
		'app/bower/bootstrap-css-only/css/bootstrap-grid.min.css',
		'app/bower/fancybox/dist/jquery.fancybox.min.css',
		'app/bower/slick-carousel/slick/slick.css',
		'app/bower/slick-carousel/slick/slick-theme.css'
	])
	.pipe(concat('libs.min.css'))
	.pipe(cssnano())
	.pipe(gulp.dest('./css'));
});

gulp.task('compress-js', function () {
	gulp.src([
		'app/bower/jquery.maskedinput/dist/jquery.maskedinput.min.js',
		'app/bower/fancybox/dist/jquery.fancybox.min.js',
		'app/bower/slick-carousel/slick/slick.min.js'
	])
	.pipe(concat('libs.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('./js'));
});

gulp.task('build',['compress-css','compress-js'],function(){
	console.log('Собрано.');
});