define(["marionette"], function(Marionette) {
	var WeatherApp = new Marionette.Application();

	WeatherApp.addRegions({
		loadingSpinRegion: "#loadingSpin",
		mainRegion: "#mainView"
	});

	
	WeatherApp.on("initialize:after", function() {
		require(["show/show_controller"], function (ShowController) {
			ShowController.showView();
		});
	});
	return WeatherApp;
});
