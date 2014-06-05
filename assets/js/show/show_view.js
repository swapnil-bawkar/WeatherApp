define(["app", "tpl!show/tpl/main_view.tpl"], function(WeatherApp, mainViewTemplate){
	WeatherApp.module('Show', function(Show, WeatherApp, Backbone, Marionette, $, _){
		
		Show.ItemView = Marionette.ItemView.extend({
			template : mainViewTemplate
		});
		
		Show.CollectionView = Marionette.CollectionView.extend({
			itemView : Show.ItemView
		});
		
		Show.FormView = Marionette.ItemView.extend({
			
			el : '#formView',
			
			events : {
				'click .submit' : 'onSubmit' 
			},
			
			ui : {
				cityField : "input[type=text]"
			},
			
			onSubmit : function(e){
				e.preventDefault();
				var city = this.$('input[type=text]').val();
				this.trigger('submit', city);
			}
		});
	});
	return WeatherApp.Show;
});