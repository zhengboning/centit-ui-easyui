'use strict';

const conf = require('../conf/gulp.conf');

exports.config = {
  baseUrl: `${conf.paths.src}/ui/easyui/`,
  namePrefix: 'jquery-easyui',
  version: '1.5',
  theme: 'default',
  local: 'zh_CN',
  mobile: false,
};

exports.config.baseUrl = baseUrl(exports.config);

exports.config.jsFiles = js(exports.config);

exports.config.cssFiles = css(exports.config);

////////////////////////////////////////

/**
 * 根据版本重新计算baseUrl
 */
function baseUrl(config) {
  return `${config.baseUrl}/${config.namePrefix}-${config.version}`;
}

/**
 * 需要加载的js文件
 */
function js(config) {
  var jsFiles = [],
    baseUrl = config.baseUrl,
    mobile = config.mobile,
    local = config.local;

  jsFiles.push(`${baseUrl}/jquery.easyui.min.js`);

  if (mobile) {
    jsFiles.push(`${baseUrl}/jquery.easyui.mobile.js`);
  }

  if (local) {
    jsFiles.push(`${baseUrl}/locale/easyui-lang-${local}.js`)
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





