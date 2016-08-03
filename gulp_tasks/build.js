const gulp = require('gulp');

const conf = require('../conf/gulp.conf');

gulp.task('build', build);

function build() {
  return gulp.src(conf.path.src('**/*'))
    .pipe(gulp.dest(conf.path.dist()));
}
