App.ClientRoute = Ember.Route.extend({
	model: function(params){
		return this.store.find('client',params.client_id);
	}
});

App.ClientsRoute = Ember.Route.extend({
	loadNeedsFrom: 'client',
	model: function(){
		return this.store.find('client');
	}
});

App.ClientsNewRoute = Ember.ClientRoute.extend({
	controllerName: 'client',
	model: function(){
		return this.store.createRecord('client');
	},
	renderTemplate: function(controller,model){
		this.render('client',{
			controller: 'client'
		});
	}
});