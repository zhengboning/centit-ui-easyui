/**
 * ES6异步写法重新封装ajax请求
 */
define([], function() {
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

    var params = $.param(options.data, false);
    params = decodeURIComponent(params);

    // 转换 optDefs[0][optCode]=1 为 optDefs[0].optCode=1
    params = params.replace(/\[([_$a-z]\w*?)\]/g, '.$1');

    // 转换 test[]=1&test[]=2 为 test=1&test=2
    params = params.replace(/(\[\])/g, "");

    // 中文转码
    params = encodeURI(params);

    options.data = params;

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
