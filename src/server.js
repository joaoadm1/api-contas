"use strict"


const express = require("express");
const cors = require("cors");
const api = express();
const db = require("./db").connect();
const middlewareLog = require("./middlewares/log");
const { verificarToken } = require("./middlewares/autenticacaomiddleware");

db.then(() => {
    console.log("Banco de dados conectado com sucesso...");
}).catch((error) => {
    console.error(error);
});


// GET - POST - PUT - DELETE

api.use(
    cors({
        origin: "*",
    })
);

api.use(express.json());


// ROTAS DA APLICAÇÃO - início

// rotas de info
const infoRoute = require('./routes/Inforoute');
api.use('/info', infoRoute);

// rotas de Conta
const contaRoute = require('./routes/Contaroute');
api.use('/conta', verificarToken, middlewareLog.log, contaRoute);

// rota de usuário

const usuarioRoute = require('./routes/Usuarioroute');
api.use('/usuario',usuarioRoute);


const loginRoute = require('./routes/Loginroute');
api.use('/login', loginRoute);


module.exports = api;
