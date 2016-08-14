'use strict';

exports.config = {
  baseUrl: './src/centit',
  shim: {
  },
  paths: {
    // main 入口
    main: '../main',

    // 自定义
    custom: '../custom',

    // config
    config: 'config',

    // core
    core: 'core',
    ajax: 'cores/ajax',
    util: 'cores/util',

  },
  packages: [

  ]
};
