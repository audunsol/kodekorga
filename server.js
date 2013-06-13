var http = require('http');
var kristian = http.createServer(function (trine, truls) {
  truls.writeHead(200, {'Content-Type': 'text/plain'});
  truls.end('Vi er da for sv@rt€ ikke kids!!! \n');
});
kristian.listen(process.env.port || 8080);
