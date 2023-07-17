'use strict'

const mongoose = require('mongoose');
const { Schema } = mongoose;

const usuarioSchema = new Schema(
    {
        nome: {
            type: String,
            required: true,
        },

        email: {
            type: String,
            required: true,
            unique: true,
        },

        senha: {
            type: String,
            required: true,
        },
    },
    {
        //created at - data de criação do registro
        //updated at - data de alteração do registro
        timestamps: true,
    }
);

module.exports = mongoose.model("UsuarioModel", usuarioSchema);