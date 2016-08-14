/**
 * CentitUI 核心组件
 */
define(['ajax', 'config'], function(ajax, config) {

  var core = {};

  core.ajax = _ajax;

  return core;

  /////////////////////

  /**
   * 封装Ajax.ajax方法
   * 可以在config里自定义对数据的处理方法
   * @param url
   * @param options
   * @returns {*|Promise.<TResult>}
   */
  function _ajax(url, options) {
    var loader = config.ajax.loader;
    var errorLoader = config.ajax.errorLoader;

    return ajax.ajax(url, options)
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
