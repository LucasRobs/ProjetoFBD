const express = require("express");
const server = express();
server.use(express.static("public"));

const nunjucks = require("nunjucks");
nunjucks.configure("src/views", {
  express: server,
  noCache: true
})

server.get("/", (req, res) =>{
  return res.render("index.html")
})
server.get("/produtos", (req, res) =>{
  return res.render("produtos.html", { nomeADM: "Lucas"})
})
server.get("/addProdutos", (req, res) =>{
  return res.render("addProduto.html")
})

server.listen(3000);