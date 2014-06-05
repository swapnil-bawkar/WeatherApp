requirejs.config({
	baseUrl: "assets/js",
	paths: {
		jquery: "vendor/jquery",
		underscore: "vendor/underscore",
		backbone: "vendor/backbone",
		marionette: "vendor/backbone.marionette",
		tpl: "vendor/tpl",
		spin: "vendor/spin",
	    "spin.jquery": "vendor/spin.jquery"
	},
	shim: {
		underscore: {
			exports: "_"
		},
		backbone: {
			deps: ["jquery", "underscore"],
			exports: "Backbone"
		},
		marionette: {
			deps: ["backbone"],
			exports: "Marionette"
		},
		"spin.jquery": ["spin", "jquery"]
	}
});

require(["app"], function(WeatherApp){
	WeatherApp.start();
});