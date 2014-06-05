define(["app"], function(WeatherApp) {
	WeatherApp.module('Entity', function(Entity, WeatherApp, Backbone, Marionette, $, _) {
		
		Entity.Model = Backbone.Model.extend({
			defaults:{
				humidity : ''
			}
		});
		
		Entity.Collection = Backbone.Collection.extend({
			 url : 'http://api.openweathermap.org/data/2.5/forecast/daily?q=London&mode=json&units=metric&cnt=5',
			 model :  Entity.Model,
			 parse : function(data) {
				 return data.list;
			 },
			 fetchWeather : function(city) {
				 this.url = 'http://api.openweathermap.org/data/2.5/forecast/daily?q='+city+'&mode=json&units=metric&cnt=5';
				 this.fetch();
			 }
		});
	});
	return WeatherApp.Entity;
});