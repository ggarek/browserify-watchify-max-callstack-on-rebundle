var gulp = require('gulp');

var browserify = require('browserify');
var watchify = require('watchify');
var source = require('vinyl-source-stream');
var chalk = require('chalk');


/**
 * Task: BUILD
 */
var b = browserify({ cache: {}, packageCache: {}, fullPaths: true });
b = watchify(b);

b.on('update', function () {
  console.log(chalk.green('Rebundle..'));
  bundle();
});

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
