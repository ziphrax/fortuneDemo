App.ProgrammeRoute = Ember.Route.extend({
	model: function(params){
		return this.store.find('programme',params.programme_id);
	}
});

App.ProgrammesRoute = Ember.Route.extend({
	loadNeedsFrom: 'programme',
	model: function(){
		return this.store.find('programme');
	}
});

App.ProgrammesNewRoute = Ember.ProgrammeRoute.extend({
	controllerName: 'programme',
	model: function(){
		return this.store.createRecord('programme');
	},
	renderTemplate: function(controller,model){
		this.render('programme',{
			controller: 'programme'
		});
	}
});