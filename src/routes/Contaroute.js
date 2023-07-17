"use strict"

const express = require("express");
const router = express.Router();
let contas = require("../contasdb");
const contaService = require('../services/Contaservice')

router.get("", async (request, response) => {
    const contas = await contaService.listarTodasContas();
    response.json(contas);
});

router.get("/:id", async (request, response) => {

    const contaPesquisada = await contaService.buscarPorId(request.params.id);
    return response.json(contaPesquisada);

});

//POST
//body params

router.post("", async (request, response) => {
    const novaConta = await contaService.cadastrarNovaConta(request.body);
    return response.json(novaConta);
    //return response.json(await contaService.cadastrarNovaConta(request.body));
});

router.put("/:id", async (request, response) => {
    const resposta = await contaService.alterarConta(
        request.params.id,
        request.body,
    );
    return response.json(resposta);


});

module.exports = router;