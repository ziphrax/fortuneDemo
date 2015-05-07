var fortune = require('fortune')
	, express = fortune.express
	, logger = require('./app/middleware/logger')
	, myRoutes = require('./app/routes/routes')
	, engine = require('ejs-locals')
	, fortuneAPI = require('./app/resources')

var container = express()
	.engine('ejs', engine)
	.set('view engine','ejs')
	.use(logger)
	.use(myRoutes)
	.use(fortuneAPI.router)
	.listen(3001);