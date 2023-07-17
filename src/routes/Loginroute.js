"use strict"

const express = require("express");
const router = express.Router();
const loginService = require('../services/Loginservice')

router.post("", async (request, response) => {
    response.json(await loginService.autenticar(request.body));
});



module.exports = router;