requirejs.config({
  baseUrl: window.ViewContextPath + 'ui',

  paths: {
		jquery: 'js/jquery/jquery-1.11.2.min',

		'socket.io': 'js/plugins/socket.io-1.3.7',

		underscore: 'js/plugins/underscore/underscore-min',

		easyUI: 'js/easyui/1.4.3/jquery.easyui.min',

		yepnope: 'js/plugins/yepnope/yepnope-1.5.4.min',

		custom: '../custom',

		modules: '../modules',

		centit: 'js/centit',

		loaders: 'js/loaders',

		plugins: 'js/plugins',

		websocket: 'js/websocket',

    style: 'css'

    },

    shim: {
    	easyUI : {
    		deps: ['jquery', 'css!style/icon.css'],

    		init: function($) {
    			$.parser.auto = false;
    		}
    	}
  },

    map: {
		'*' : {
			'css' : 'js/css.min',
			'text' : 'js/text'
		}
	}
});

requirejs(['main']);
