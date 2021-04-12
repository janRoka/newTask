'use strict';

var gulp         = require('gulp'),
	sass         = require('gulp-sass'),
	sassGlob     = require('gulp-sass-glob'),
	rename       = require('gulp-rename'),
	concat       = require('gulp-concat'),
	uglify       = require('gulp-uglify'),
	cssnano      = require('gulp-cssnano'),
	browserSync  = require('browser-sync'),
	autoprefixer = require('gulp-autoprefixer'),
	gcmq         = require('gulp-group-css-media-queries'),
	watch        = require('gulp-watch'),
	cache        = require('gulp-cache'),
	imagemin     = require('gulp-imagemin'),
	pngquant     = require('imagemin-pngquant'),
	imageminJpegRecompress = require('imagemin-jpeg-recompress');


/* Пути */

var path = {
	base: 'public_html/',
	libs: 'public_html/_libs/node_modules/',
	compress: 'public_html/images/',
	compressed: 'public_html/images_compressed/'
}


/* Слежение */

gulp.task('browser-sync',function(){
	browserSync.init({
		// server: {
		// 	baseDir: path.base
		// },
		proxy: 'site.loc',
		notify: false
	});
});

gulp.task('watch', function(){
	watch(path.base + 'scss/**/*.scss', {usePolling: true}, gulp.series('sass')).on('end',browserSync.reload);
	watch(path.base + '**/*.{php,html}', browserSync.reload);
	watch(path.base + 'js/*.js', browserSync.reload);
});

gulp.task('default', gulp.parallel('watch', 'browser-sync'));


/* Обработка css/scss кода */

gulp.task('sass', function(){
	return gulp.src(path.base + 'scss/*.scss')
	.pipe(sassGlob())
	.pipe(sass().on('error',sass.logError))
	// .pipe(gcmq())
	.pipe(autoprefixer({cascade: true}))
	// .pipe(cssnano())
	.pipe(gulp.dest(path.base + 'css'))
	.pipe(browserSync.reload({stream: true}));
});


/* Сжатие изображений, жмет отлично, как optimizilla */

gulp.task('imgmin', function() {
	return gulp.src(path.compress + '**/*.{jpg,jpeg,png,gif}')
	.pipe(cache(imagemin([
		imagemin.gifsicle({interlaced: true}),
		imagemin.mozjpeg({progressive: true}),
		imageminJpegRecompress({
			loops: 5,
			min: 70,
			max: 75,
			quality:'medium'
		}),
		imagemin.svgo(),
		imagemin.optipng({optimizationLevel: 3}),
		pngquant({quality: [0.7, 0.75], speed: 5})
	],{
		verbose: true
	})))
	.pipe(gulp.dest(path.compressed));
});

gulp.task('clear', function (done) {
	return cache.clearAll(done);
});


/* Сборка общих библиотек */

gulp.task('compress-css', function () {
	gulp.src([
		path.libs + 'normalize.css/normalize.css',
		path.libs + 'bootstrap/dist/css/bootstrap-grid.css',
		path.libs + '@fancyapps/fancybox/dist/jquery.fancybox.css'
	])
	.pipe(concat('libs.min.css'))
	.pipe(cssnano())
	.pipe(gulp.dest(path.base + 'css'));
});

gulp.task('compress-js', function () {
	gulp.src([
		path.libs + '@fancyapps/fancybox/dist/jquery.fancybox.js'
	])
	.pipe(concat('libs.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest(path.base + 'js'));
});

gulp.task('build', gulp.parallel('compress-css','compress-js'));
