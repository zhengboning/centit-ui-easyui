define(['config'], function(Config) {
  'use strict';


  Config.ajax.loader = function(data) {
    if ($.isArray(data)) {
      return data.slice(0, 1);
    }
  };

  return Config;
});
