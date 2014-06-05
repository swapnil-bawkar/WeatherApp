define(["app", "show/show_view", "common/views"], function(WeatherApp, ShowView, CommonViews) {
	WeatherApp.module("Show", function(Show, WeatherApp, Backbone, Marionette, $, _) {
		Show.Controller = {
			showView: function() {
				require(["entity/entity"], function(Entity) {
					var loadingView = new CommonViews.Loading();
					WeatherApp.loadingSpinRegion.show(loadingView);
			        
					Show.Controller.entityCollection = new Entity.Collection();
					var collectionView = new ShowView.CollectionView({
						collection : Show.Controller.entityCollection
					});	
					WeatherApp.mainRegion.show(collectionView);
					Show.Controller.entityCollection.fetch({
						success : function(){
							WeatherApp.loadingSpinRegion.close();
						}
					});

					var formView = new ShowView.FormView();
					Show.Controller.listenTo(formView,'submit',Show.Controller.onFormSubmit);
				});
			},
			onFormSubmit : function(city) {
				var loadingView = new CommonViews.Loading();
				WeatherApp.loadingSpinRegion.show(loadingView);
				this.entityCollection.fetch({
					success : function(){
						WeatherApp.loadingSpinRegion.close();
					}
				});
			}
		};
		_.extend(Show.Controller, Backbone.Events);
	});
	return WeatherApp.Show.Controller;
});
