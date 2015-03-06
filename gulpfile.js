var gulp = require('gulp');

/**
 * Task: BUILD
 */
require('./tasks/bundle')(gulp);


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
