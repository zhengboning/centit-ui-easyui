'use strict';

const gulp = require('gulp');

const conf = require('../conf/gulp.conf');
const easyuiConf = require('../conf/easyui.conf').config;

gulp.task('easyuiJS', easyuiJS);
gulp.task('easyuiCSS', easyuiCSS);

function easyuiJS() {
  return gulp.src(easyuiConf.jsFiles)
    .pipe(gulp.dest(conf.path.tmp('/js')));
}

function easyuiCSS() {
  return gulp.src(easyuiConf.cssFiles)
    .pipe(gulp.dest(conf.path.tmp('/css')));
}
