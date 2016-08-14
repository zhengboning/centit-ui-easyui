requirejs(['custom', 'core'], function(Config, Core) {
  Core.ajax('/src/data/menu.json')
    .then(function(menus) {
      console.log(menus);
    });
});
