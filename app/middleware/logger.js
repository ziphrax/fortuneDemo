module.exports = function logger(request,response,next){
	var start = +new Date();
	var stream = process.stdout;
	var url = request.url;
	var method = request.method;
	var ip = request.headers['x-real-ip'] || request.connection.remoteAddress;

	response.on('finish', function(){
		var duration = +new Date() -  start;
		stream.write(ip + ': '+ method + ' ' + url + ' ' + duration + ' ms' + ' \n');
	});

	next();
}