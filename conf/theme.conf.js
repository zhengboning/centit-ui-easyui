'use strict';

const conf = require('./gulp.conf');

exports.config = {
  name: 'qui',
  color: 'blue'
};

exports.config.baseUrl = baseUrl(exports.config);
exports.config.themeFiles = themeFiles(exports.config);
exports.config.colorFiles = colorFiles(exports.config);

/////////////////////////////////////////

function baseUrl(config) {
  return `${conf.paths.src}/ui/themes/${config.name}`
}

function themeFiles(config) {
  var themes = [],
    baseUrl = config.baseUrl;

  themes.push(`${baseUrl}/*.css`);  // CSS
  themes.push(`${baseUrl}/images/*`);    // 图片
  return themes;
}

function colorFiles(config) {
  var colors = [],
    color = config.color,
    baseUrl = config.baseUrl;

  if (color) {
    colors.push(`${baseUrl}/colors/*/*.css`);   // CSS
    colors.push(`${baseUrl}/colors/*/images/*`);  // 图片
  }
  return colors;
}
