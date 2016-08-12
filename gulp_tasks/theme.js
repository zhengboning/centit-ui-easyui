'use strict';

const gulp = require('gulp');

const is = require('gulp-if');

const conf = require('../conf/gulp.conf');
const themeConf = require('../conf/theme.conf').config;

gulp.task('theme[css]', themeFiles);
gulp.task('theme[color]', colorFiles);
gulp.task('theme[favicon]', faviconFiles);
gulp.task('theme', gulp.parallel(['theme[css]', 'theme[color]', 'theme[favicon]']));

function themeFiles() {
  return gulp.src(themeConf.themeFiles)
    .pipe(is('*.{png,gif,jpg,jpeg,bmp}', gulp.dest(conf.path.tmp('styles/theme/images'))))
    .pipe(is('*.css', gulp.dest(conf.path.tmp('styles/theme'))));
}

function colorFiles() {
  return gulp.src(themeConf.colorFiles)
    .pipe(gulp.dest(conf.path.tmp('styles/theme/colors')));
}

function faviconFiles() {
  return gulp.src(conf.path.src('favicon.ico'))
    .pipe(gulp.dest(conf.paths.tmp));
}
