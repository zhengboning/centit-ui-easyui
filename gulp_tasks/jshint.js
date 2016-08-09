'use strict';

const gulp = require('gulp');

const jshint = require('gulp-jshint');

const conf = require('../conf/gulp.conf');

gulp.task('jshint', hint);

function hint() {
  return gulp.src([
    conf.path.src('**/*.js'),
    `!${conf.paths.src }/**/*.min.js`,
    `!${conf.paths.src }/ui/easyui/**/*.min.js`,
    `!${conf.paths.src }/ui/plugins/**/*.min.js`,
    `!${conf.paths.src }/ui/require/**/*.min.js`
  ])
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'));
}
