var gulp = require('gulp');

var browserify = require('browserify');
var watchify = require('watchify');
var source = require('vinyl-source-stream');


/**
 * Task: BUILD
 */
var b = browserify();

b.add('./src/main.js');

function bundle() {
  return b.bundle().pipe(source('bundle.js')).pipe(gulp.dest('./build/js'));
}

gulp.task('build', bundle);


/**
 * Task: HTML 
 */
gulp.task('html', function () {
  return gulp.src('./index.html').pipe(gulp.dest('./build'));
});


/**
 * Task: DEFAULT
 */
 gulp.task('default', ['html', 'build']);
