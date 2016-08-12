'use strict';

const gulp = require('gulp');

const gulpInject = require('gulp-inject');
const wiredep = require('wiredep').stream;
const order = require('gulp-order');

const conf = require('../conf/gulp.conf');
const themeConf = require('../conf/theme.conf').config;

gulp.task('inject', inject);

function inject() {
  // 注入easyui文件
  const injectEasyuiCSS = gulp
    .src(conf.path.tmp('easyui/css/*.css'), {read: false})
    .pipe(order(['easyui.css', 'color.css', 'icon.css']));
  const injectEasyuiCSSOptions = {
    starttag: '<!-- inject:easyui[css] -->',
    ignorePath: conf.paths.tmp,
    addRootSlash: false
  };

  // 注入easyui文件
  const injectEasyuiJS = gulp
    .src(conf.path.tmp('easyui/js/*.js'), {read: false})
    .pipe(order(['jquery.easyui.min.js', 'easyui-lang*.js']));
  const injectEasyuiJSOptions = {
    starttag: '<!-- inject:easyui[js] -->',
    ignorePath: conf.paths.tmp,
    addRootSlash: false
  };

  // 注入主题
  const injectTheme = gulp
    .src(conf.path.tmp('styles/theme/*.css'), {read: false});
  const injectThemeOptions = {
    starttag: '<!-- inject:theme -->',
    ignorePath: conf.paths.tmp,
    addRootSlash: false
  };

  // 注入主题
  const injectThemeColor = gulp
    .src(conf.path.tmp(`styles/theme/colors/${themeConf.color}/*.css`), {read: false});
  const injectThemeColorOptions = {
    starttag: '<!-- inject:theme[color] -->',
    ignorePath: conf.paths.tmp,
    addRootSlash: false
  };

  return gulp.src(conf.path.src('index.html'))
    .pipe(gulpInject(injectEasyuiCSS, injectEasyuiCSSOptions))
    .pipe(gulpInject(injectEasyuiJS, injectEasyuiJSOptions))
    .pipe(gulpInject(injectTheme, injectThemeOptions))
    .pipe(gulpInject(injectThemeColor, injectThemeColorOptions))
    .pipe(wiredep(Object.assign({}, conf.wiredep)))
    .pipe(gulp.dest(conf.paths.tmp));
}
