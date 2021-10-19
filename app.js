const http = require('http');

http.createServer(function (req, res) {
  res.write('Perfectly worked! - Ameya');
  res.end();
}).listen(8080, '0.0.0.0');
