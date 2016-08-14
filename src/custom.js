/**
 * 用户自定义配置
 */
define(['config'], function(config) {
  'use strict';

  config.ajax.loader = function(data) {
    if ($.isArray(data)) {
      return data.slice(0, 1);
    }
  };

  return config;
});
