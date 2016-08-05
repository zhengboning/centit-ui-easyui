define(function(require) {
	require('plugins/es6-promise.min');
	require('plugins/es5-array');

	var Config = require('config');
	var Loader = require('loaders/loader');
	var $ = require('jquery');
	var _ = require('underscore');
	var Mustache = require('plugins/mustache.min');

	var LoaderTheme = Loader.extend(function() {
		var _self = this;

		this.name = "系统主题@loader.theme.js";

		this.init = function() {

			try {
				return this._init();
			}
			catch(e) {

				var msg = Mustache.render("加载【{{name}}】时发生错误（{{&message}}）", {
					name: _self.name,
					message: e.message ?　e.message : e
				});

				console.error(msg);
				return Promise.reject(msg);
			}

		};

		this._init = function() {

			var ThemeConfig;

			switch(Config.Theme.DefaultTheme || 'default') {
				default :
					ThemeConfig = require('themes/qui/theme');
			}

			ThemeConfig = $.extend({}, ThemeConfig, require('custom/theme'));

			this.convert(ThemeConfig);

			return Promise.resolve(Config.Theme);
		};


		this.convert = function(theme) {
			// COLORS
			Config.Theme.ColorCSS = [];
			if (theme.colors && $.isArray(theme.colors)) {

				// 指定id或者第一个颜色
				var color = theme.colors.filter(function(c) {
					return c.id == Config.Theme.DefaultColor;
				})[0] || theme.colors[0];

				Config.Theme.ColorCSS.push(color.css);
			}

			// ICONS
			Config.Theme.IconCSS = _.union(Config.Theme.IconCSS, theme.icons);

			// CSS
			Config.Theme.CSS = _.union(Config.Theme.CSS, theme.css);

			// Template
			Config.Theme.Template = Config.Theme.Template || theme.template;

			// 初始化方法
			Config.Theme.init = theme.init || $.noop;
		};
	});

	return new LoaderTheme('Theme');
});
