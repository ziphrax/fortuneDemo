App.ProgrammeController = Ember.Controller.extend({
	needs:['clients'],
	actions: {
		save: function(){
			var controller = this;
			var m = this.get('model');
			m.save().then(function(){
				controller.transitionToRoute('programme',m);
			},function(err){
				console.log(err);
			});
		},
		delete: function() { this.deleteMyModel(); },
	}
});

App.ProgrammesController = Ember.ArrayController.extend({
	itemController : 'programme'
});