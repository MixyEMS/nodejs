var http = require('http');
var querystring = require('querystring');

var postData = querystring.stringify({
	 content:"哈哈",
	 cid:348
});

var options = {
	'hostname':'www.baidu.com',
	'port':'80',
	'path':'/',
	'method':'POST',
	'Accept':'application/json, text/javascript,q=0.01',
	'Accept-Encoding':'gzip, deflate',
	'Accept-Language':'zh-CN,zh;q=0.8'
}

var req = http.request(options,function(res){
	 console.log('status:'+res.statusCode);
	 console.log('headers:'+JSON.stringify(res.headers));

	 res.on('data',function(chunk){
	 	 console.log(Buffer.isBuffer(chunk));
	 	 console.log(typeof chunk);
	 	 console.log(chunk.toString());
	 });

	 res.on('end',function(){
	 	console.log('ending..');
	 });
});
req.on('error',function(msg){
	console.log(msg);
})
req.write(postData);
req.end();