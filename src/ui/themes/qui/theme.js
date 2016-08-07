define(function(require) {

	var Config = require('config');
	var Cache = require('core/cache');

	var $ = require('jquery');

	var ThemeConfig = {
		id : "qui",

		name : "qui",

		css : [
            "ui/themes/qui/style.css",
            "ui/themes/qui/header.css",
            "ui/themes/qui/menu.css",
            "ui/themes/qui/layout.css",
            "ui/themes/qui/tab.css"
        ],

		icons: [],

		template : "ui/themes/qui/template.html",

		colors : [{
			id : "sky_blue",
			name : "天空蓝",
			color: '#518CF0',
			css : "ui/themes/qui/colors/blue/color.css"
		},{
			id : "jewelry_blue",
			name : "宝石蓝",
			color: '#0062BD',
			css : "ui/themes/qui/colors/jewelry-blue/color.css"
		},{
			id : "dark_blue",
			name : "深蓝",
			color: '#2D7BB4',
			css : "ui/themes/qui/colors/dark-blue/color.css"
		},{
			id : "light_blue",
			name : "淡蓝",
			color: '#E1EDFA',
			css : "ui/themes/qui/colors/light-blue/color.css"
		},{
			id : "blue_green",
			name : "蓝绿",
			color: '#0FF3F8',
			css : "ui/themes/qui/colors/blue-green/color.css"
		},{
			id : "orange",
			name : "橘色",
			color: '#FF870F',
			css : "ui/themes/qui/colors/orange/color.css"
		},{
			id : "red",
			name : "艳红",
			color: '#E03E2C',
			css : "ui/themes/qui/colors/red/color.css"
		}],

		menuIcons: null,

		init: function(panel, loader) {

			loader.progress(70, '构建菜单');
			// 菜单
			var Menu = require('widgets/menu/widget.menu');
			var menu = new Menu({
				contextPath: Config.ViewContextPath,

				loader: Config.Menu.Loader,

				dashboard: Config.Menu.Dashboard,

				icons: ThemeConfig.menuIcons || Config.Menu.Icons
			}, Cache.get('Menu')).render('#side');

			loader.progress(85, '创建菜单分页');
			// 菜单Tab
			var MenuTab = require('widgets/menu-tab/widget.menu-tab');
			new MenuTab().render('#center');
			menu.openDashboard();

			var MenuSearch = require('widgets/menu-search/widget.menu-search');
			menu.addPlugin(new MenuSearch());

			loader.progress(95, '加载工具栏');
			// 创建工具栏
			var Toolbar = require('widgets/toolbar/widget.toolbar');
			var toolbar = new Toolbar({
				name : 'main'
			}).render('#header');

			// 全屏按钮
			var ToolFullScreen = require('widgets/tools/widget.tool.full-screen');
			new ToolFullScreen().render(toolbar);

			// 皮肤颜色按钮
			var ToolColors = require('widgets/tools/widget.tool.colors');
			new ToolColors({
				colors: ThemeConfig.colors,
				current: Config.Theme.DefaultColor
			}).render(toolbar);
		}

	};

	return ThemeConfig;
});
