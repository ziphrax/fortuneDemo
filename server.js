var fortune = require('fortune')
	, express = fortune.express
	, logger = require('./app/middleware/logger')
	, routes = require('./app/routes/routes')
	, engine = require('ejs-locals')
	, fortuneAPI = require('./app/resources')

var container = express()
	.engine('ejs', engine)
	.set('view engine','ejs')
	.use(logger)
	.use(express.static('public'))
	.use(routes)
	.use(fortuneAPI.router)
	.listen(3001);