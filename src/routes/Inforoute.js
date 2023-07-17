"use strict"

const express = require ("express");
const router = express.Router();
const infoService = require ('../services/Infoservice');

router.get("", (request, response) => {
    const info = infoService.apresentarInfo();
    response.json(info);
});

module.exports = router;