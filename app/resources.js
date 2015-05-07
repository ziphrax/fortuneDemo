 var fortune = require('fortune')
	, fortuneAPI = fortune({
		adapter: 'mongodb',
		connectionString: 'mongodb://localhost/fortune1',
		db: 'fortune1',
		namespace: '/api/v1'
	})  
	.resource('post', {
		name: String,
		content: String,
		author: String,
		created: Date,
		lastUpdated: Date
	});

module.exports = fortuneAPI;