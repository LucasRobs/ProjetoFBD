const express = require("express");
const routes = express();
const AdminController = require('./controller/AdminController');
const ProdutosController = require('./controller/ProdutosController');
const SessionController = require('./controller/SessionController');

routes.get("/Admin", AdminController.index);
routes.post("/Admin", AdminController.create);

routes.get("/Produtos", ProdutosController.index);
routes.post("/Produtos", ProdutosController.create);
routes.delete("/Produtos/:id", ProdutosController.delete);
routes.get("/Produtos/:id", ProdutosController.ProdutosPorID);
routes.put("/Editar/:id", ProdutosController.EditarProduto);

routes.post("/Login", SessionController.create);
routes.get("/Login", SessionController.index);

module .exports = routes;