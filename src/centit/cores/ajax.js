/**
 * ES6异步写法重新封装ajax请求
 */
define(['filters/param'], function(ParamFilter) {
  'use strict';

  $.ajaxSetup({
    contentType: "application/x-www-form-urlencoded; charset=utf-8"
  });

  // 默认配置
  var DEFAULT_AJAX = {
    method: 'get',
    dataType : 'json',
    data: {}
  };

  var Ajax = {};
  Ajax.ajax = ajax;

  return Ajax;

  ////////////////////////

  /**
   * Promise封装$.ajax
   */
  function ajax(url, options) {
    options = $.extend({}, DEFAULT_AJAX, options);

    // 中文转码
    // Form Data 转换成 SpringMVC 可以接受的格式
    options.data = ParamFilter(options.data);

    return new Promise(function(resole, reject) {
      options = $.extend(true, {}, options, {
        success: function(data, textStatus, jqXHR) {
          resole(data, textStatus, jqXHR);
        },

        error: function(result) {
          reject(result);
        }
      });

      $.ajax(url, options);
    });
  }
});
