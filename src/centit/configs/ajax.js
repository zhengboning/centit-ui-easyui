/**
 * Ajax 配置
 */
define(function() {
  'use strict';

  var Config = {

    // 处理正常响应
    loader: $.noop,

    // 处理错误响应
    errorLoader: $.noop
  };

  return Config;
});
