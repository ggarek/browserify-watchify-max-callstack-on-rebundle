var browserify = require('browserify');
var watchify = require('watchify');
var source = require('vinyl-source-stream');
var chalk = require('chalk');

module.exports = function (gulp) {
  var b = browserify({ cache: {}, packageCache: {}, fullPaths: true });
  b = watchify(b);

  b.on('update', function () {
    console.log(chalk.green('Rebundle..'));
    bundle();
  });

  b.add('./src/main.js');
  b.require('./src/utils/index.js', { expose: 'utils' });

  function bundle() {
    return b.bundle().pipe(source('bundle.js')).pipe(gulp.dest('./build/js'));
  }
  
  /**
   * Define tasks
   */
   gulp.task('build', bundle);
};
