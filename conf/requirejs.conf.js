'use strict';

exports.config = {
  baseUrl: './src/centit',
  shim: {
  },
  paths: {

    // main 入口
    main: '../main',

    // 自定义配置
    custom: '../custom',

    // 配置文件
    config: 'config',

    // 核心
    core: 'core',
    ajax: 'cores/ajax',
    util: 'cores/util',

    // 第三方插件
    libs: '../libs'

  },
  packages: [

  ]
};
