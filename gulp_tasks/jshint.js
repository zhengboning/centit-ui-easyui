'use strict';

const gulp = require('gulp');

const jshint = require('gulp-jshint');

const conf = require('../conf/gulp.conf');

gulp.task('jshint', hint);

function hint() {
  return gulp.src([
    conf.path.src('**/*.js'),
    '!'+conf.paths.src+'/**/*.min.js',
    '!'+conf.paths.src+'/ui/js/require.js',
    '!'+conf.paths.src+'/ui/js/css-builder.js',
    '!'+conf.paths.src+'/ui/js/text.js',
    '!'+conf.paths.src+'/ui/js/normalize.js',
    '!'+conf.paths.src+'/ui/js/plugins/**/*.js',
    '!'+conf.paths.src+'/ui/js/easyui/**/*.js',
  ])
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'));
}
