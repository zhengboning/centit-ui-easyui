'use strict';

const gulp = require('gulp');

const jshint = require('gulp-jshint');

const conf = require('../conf/gulp.conf');

gulp.task('jshint', hint);

function hint() {
  return gulp.src(conf.path.src('**/core/**/*.js'))
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'));
}
