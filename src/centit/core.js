/**
 * CentitUI 核心组件
 */
define(['ajax', 'config'], function(Ajax, Config) {

  var Core = {};

  Core.ajax = ajax;

  return Core;

  /////////////////////

  /**
   * 封装Ajax.ajax方法
   * 可以在config里自定义对数据的处理方法
   * @param url
   * @param options
   * @returns {*|Promise.<TResult>}
   */
  function ajax(url, options) {
    var loader = Config.ajax.loader;
    var errorLoader = Config.ajax.errorLoader;

    return Ajax.ajax(url, options)
      .then(
        // 处理正常数据
        function(response) {
          if (loader && $.isFunction(loader)) {
            return loader.apply(this, arguments);
          }

          return Promise.resolve(response);
        },

        // 处理错误数据
        function(error) {
          if (errorLoader && $.isFunction(errorLoader)) {
            return errorLoader.apply(this, arguments);
          }

          return Promise.reject(error);
        }
      );
  }
});
