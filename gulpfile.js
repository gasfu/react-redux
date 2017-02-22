const gulp = require('gulp');
const minify = require('gulp-clean-css');
const stylus = require('gulp-stylus');
const mmq = require('gulp-merge-media-queries');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');

const path = {
	'stylesheetSRC': 'app/Stylesheets/**/*',
	'stylesheetMain': 'app/Stylesheets/main.styl',
	'stylesheetDEST': 'public/dist'
};

gulp.task('default', () => {
	gulp.watch(path.stylesheetSRC, ['style']);
});

gulp.task('style', () => {
	return gulp.src(path.stylesheetMain)
	.pipe(sourcemaps.init())
	.pipe(stylus({compress: true}))
	.pipe(mmq())
	.pipe(minify())
	.pipe(rename('app.min.css'))
	.pipe(sourcemaps.write())
	.pipe(gulp.dest(path.stylesheetDEST))
});