"use strict"

const express = require("express");
const router = express.Router();
const loginService = require('../services/Loginservice')

router.post("", async (require, response) => {
    const result = await loginService.autenticar(require.body);

    if(!result.success) {
        return response.status(result.status).json(result);
    }

    return response.json(result);
});



module.exports = router;