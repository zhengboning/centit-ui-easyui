'use strict';

const gulp = require('gulp');

const filter = require('gulp-filter');

const conf = require('../conf/gulp.conf');
const easyuiConf = require('../conf/easyui.conf').config;

gulp.task('easyui[js]', easyuiJS);
gulp.task('easyui[css]', easyuiCSS);
gulp.task('easyui[image]', easyuiImage);
gulp.task('easyui', gulp.parallel('easyui[js]', 'easyui[css]', 'easyui[image]'));

function easyuiJS() {
  return gulp.src(easyuiConf.jsFiles)
    .pipe(gulp.dest(conf.path.tmp('/easyui/js')));
}

function easyuiCSS() {
  return gulp.src(easyuiConf.cssFiles)
    .pipe(gulp.dest(conf.path.tmp('/easyui/css')));
}

function easyuiImage() {
  var imagesFilter = filter('**/images/*', {restore: true});
  var iconFilter = filter('**/icons/*', {restore: true});

  return gulp.src(easyuiConf.imageFiles)
    // 图片分为2部分
    .pipe(imagesFilter)
    .pipe(gulp.dest(conf.path.tmp('/easyui/css/images')))
    .pipe(imagesFilter.restore)

    .pipe(iconFilter)
    .pipe(gulp.dest(conf.path.tmp('/easyui/css/icons')))
    .pipe(iconFilter.restore);
}
