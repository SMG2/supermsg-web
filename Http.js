/**
 * Created by yangbingxun on 2016/11/24.
 */
var http = require('http');

http.createServer(function (request, response) {

    // 发送 HTTP 头部
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain','Access-Control-Allow-Origin':'*','Access-Control-Allow-Headers':'nonce,timestamp,userid,signature'});
    // console.log(request.headers);
    // 发送响应数据 "Hello World"
    response.write('hhh');
    response.end('Hello World\n');
}).listen(8081);
