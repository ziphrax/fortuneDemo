App.ClientController = Ember.Controller.extend({
	needs:['programmes'],
	actions: {
		save: function(){
			var controller = this;
			var m = this.get('model');
			m.save().then(function(){
				controller.transitionToRoute('client',m);
			},function(err){
				console.log(err);
			});
		},
		delete: function() { this.deleteMyModel(); },
	}
});

App.ClientsController = Ember.ArrayController.extend({
	itemController : 'client'
});