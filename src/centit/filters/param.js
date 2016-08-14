/**
 * 将Object类型的数据转换成可供
 */
define(function() {
  function data2params(data) {
    if (!data) return;

    var params = $.param(data, false);
    params = decodeURIComponent(params);

    // 转换 optDefs[0][optCode]=1 为 optDefs[0].optCode=1
    params = params.replace(/\[([_$a-z]\w*?)\]/g, '.$1');

    // 转换 test[]=1&test[]=2 为 test=1&test=2
    params = params.replace(/(\[\])/g, "");

    // 中文转码
    params = encodeURI(params);

    return params;
  }

  return data2params;
});
