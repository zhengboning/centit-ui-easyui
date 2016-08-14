/**
 * 用户自定义配置
 */
requirejs(['custom', 'core'], function(Config, Core) {
  Core.ajax('/src/data/menu.json')
    .then(function(menus) {
      console.log(menus);
    });
});
