const express = require("express");
const cors = require('cors');
const routes = require('./routes');
const server = express();
//server.use(express.static("public"));
server.use(cors());
server.use(express.json());
server.use(routes);
const nunjucks = require("nunjucks");
nunjucks.configure("src/views", {
  express: server,
  noCache: true
})

server.listen(3333);