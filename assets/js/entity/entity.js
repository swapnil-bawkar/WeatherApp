define(["app"], function(WeatherApp) {
	WeatherApp.module('Entity', function(Entity, WeatherApp, Backbone, Marionette, $, _) {
		
		Entity.Model = Backbone.Model.extend({
			defaults:{
				humidity : ''
			}
		});
		
		Entity.Collection = Backbone.Collection.extend({
			 url : 'http://api.openweathermap.org/data/2.5/weather?q=Pune&appid=affaa91efadc905013e46b826000a8fa',
			 model :  Entity.Model,
			 fetchWeather : function(city) {
				 this.url = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=affaa91efadc905013e46b826000a8fa';
			 }
		});
	});
	return WeatherApp.Entity;
});