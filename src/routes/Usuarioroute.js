"use strict"

const express = require("express");
const router = express.Router();
const usuarioService = require('../services/Usuarioservice')

router.get("", async (request, response) => {
    response.json(await usuarioService.listar());
});

router.get("/:id", async (request, response) => {
    return response.json(await usuarioService.buscarPorId(request.params.id));

});

//POST
//body params

router.post("", async (request, response) => {
    return response.json(await usuarioService.cadastrar(request.body));
    //return response.json(await usuarioService.cadastrarNovaConta(request.body));
});

router.put("/:id", async (request, response) => {
    return response.json(await usuarioService.alterar(request.params.id, request.body)
    );
});

module.exports = router;