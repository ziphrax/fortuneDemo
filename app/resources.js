 var fortune = require('fortune')
	, fortuneAPI = fortune({
		adapter: 'mongodb',
		connectionString: 'mongodb://localhost/fortune1',
		db: 'fortune1',
		namespace: '/api/v1'
	})  
	.resource('client', {
		name: String,
		created: String,
		updated: String,
		programmes: ['programme']
	})
	.resource('programme',{
		name: String,
		created: String,
		updated: String,
		client: ['client']
	});

module.exports = fortuneAPI;