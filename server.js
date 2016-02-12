'use strict';

const http = require('http')
const wsServer = require("./ws.js")
const port = process.env.PORT || 8080;

module.exports = {
  startServer: function() {
		console.log("Server started")
    wsServer.init();
    http.createServer((req, res) => {
      let input = '';
      req.on('data', (buffer) => {
        input += buffer.toString();
      })
      req.on('end', () => {
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.end();
      })

    }).listen(port, console.log(`Listening on port ${port}`))
  }
}

if(!module.parent) {
  module.exports.startServer();
}
