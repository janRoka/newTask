'use strict';

var gulp         = require('gulp'),
	less         = require('gulp-less'),
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

// Работа на локалке будет доступно через localhost:3000
// gulp.task('browser-sync',function(){
// 	browserSync.init({
// 		proxy: 'site.loc',
// 		notify: false
// 	});
// });

// Работа на сервере. После запустить в браузере ip-сервера:3000
// gulp.task('browser-sync',function(){
// 	browserSync.init({
// 		proxy: 'http://site.ru/', // Необходимый домен
// 		port: 3000,
// 		open: false,
// 		ghost: true,
// 		notify: false
// 	});
// });

gulp.task('watch', ['browser-sync'], function(){
	gulp.watch('./scss/*.scss', ['sass']).on('end',browserSync.reload);
	gulp.watch('./*.html', browserSync.reload);
	gulp.watch('./js/**/*.js', browserSync.reload);
});

gulp.task('compress-css', function () {
	gulp.src([
		'css/bootstrap.min.css',
		'css/fancybox.min.css',
		'css/slick.css',
		'css/slick-theme.css'
	])
	.pipe(concat('libs.min.css'))
	.pipe(cssnano())
	.pipe(gulp.dest('./css'));
});

gulp.task('compress-js', function () {
	gulp.src([
		'js/fancybox.min.js',
		'js/slick.min.js'
	])
	.pipe(concat('libs.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('./js'));
});

gulp.task('build',['compress-css','compress-js'],function(){
	console.log('Собрано.');
});