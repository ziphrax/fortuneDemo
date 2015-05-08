App.Router.map(function() {
	this.resource('clients',function(){
		this.route('new');
		this.resource('client',{path: '/:client_id'},function(){
			this.resource('programmes',path:'/')
		});
	});
	this.resource('programmes',function(){
		this.route('new');
		this.resource('programme',{path: '/:programme_id'},function(){			
		});
	});
});