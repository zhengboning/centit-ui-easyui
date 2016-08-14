'use strict';

const gulp = require('gulp');

const amdOptimize = require("amd-optimize");
const concat = require('gulp-concat');

const conf = require('../conf/gulp.conf');
const requirejsConf = require('../conf/requirejs.conf').config;

gulp.task('scripts', scripts);

function scripts() {
  return gulp.src(conf.path.src('*.js'))
    .pipe(amdOptimize('main'))
    .pipe(concat('app.js'))
    .pipe(gulp.dest(conf.path.tmp('scripts')));
}
