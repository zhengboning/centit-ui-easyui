/**
 * 用户自定义配置
 */
requirejs(['custom', 'core'], function(config, core) {
  core.ajax('/src/data/menu.json')
    .then(function(menus) {
      console.log(menus);
    });
});
