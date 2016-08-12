'use strict';

const conf = require('./gulp.conf');

exports.config = {
  version: '1.5',
  theme: 'default',
  locale: 'zh_CN',
  mobile: false,
};

exports.config.baseUrl = baseUrl(exports.config);

exports.config.jsFiles = js(exports.config);

exports.config.cssFiles = css(exports.config);

exports.config.imageFiles = image(exports.config);

////////////////////////////////////////

/**
 * 根据版本重新计算baseUrl
 */
function baseUrl(config) {
  return `${conf.paths.src}/ui/easyui/jquery-easyui-${config.version}`;
}

/**
 * 需要加载的js文件
 */
function js(config) {
  var jsFiles = [],
    baseUrl = config.baseUrl,
    mobile = config.mobile,
    locale = config.locale;

  jsFiles.push(`${baseUrl}/jquery.easyui.min.js`);

  if (mobile) {
    jsFiles.push(`${baseUrl}/jquery.easyui.mobile.js`);
  }

  if (locale) {
    jsFiles.push(`${baseUrl}/locale/easyui-lang-${locale}.js`)
  }

  return jsFiles;
}

/**
 * 需要加载的css文件
 */
function css(config) {
  var cssFiles = [],
    baseUrl = config.baseUrl,
    mobile = config.mobile,
    theme = config.theme;

  cssFiles.push(`${baseUrl}/themes/${theme}/easyui.css`);
  cssFiles.push(`${baseUrl}/themes/color.css`);
  cssFiles.push(`${baseUrl}/themes/icon.css`);

  if (mobile) {
    cssFiles.push(`${baseUrl}/themes/mobile.css`);
  }

  return cssFiles;
}

function image(config) {
  var imageFiles = [],
    baseUrl = config.baseUrl,
    theme = config.theme;

  imageFiles.push(`${baseUrl}/themes/icons/*`);
  imageFiles.push(`${baseUrl}/themes/${theme}/images/*`);

  return imageFiles;
}





