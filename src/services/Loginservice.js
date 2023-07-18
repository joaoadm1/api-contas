"use strict"

const bcrypt = require("bcrypt");
const usuarioModel = require("../models/UsuarioModel");
const { gerarToken } = require("../utils/TokenUtil");


module.exports = {
    autenticar: async (usuario) => {
        try {
            const usuarioEncontrado = await usuarioModel.findOne({
                email: usuario.email,
            });

            if (!usuarioEncontrado) {
                return {
                    mensagem: "Credenciais inválidas",
                    success: false,
                    status: 401,
                }
            };

            const senhaValida = await bcrypt.compare(
                usuario.senha,
                usuarioEncontrado.senha
            );

            if (!senhaValida) {
                return {
                    mensagem: "Credenciais inválidas",
                    success: false,
                    status: 401,
                };
            }

            const token = gerarToken(JSON.stringify(usuarioEncontrado));

            return {
                message: "Login realizado com sucesso",
                status: 200,
                success: true,
                token,

            };


        } catch (error) {
            return {
                mensagem: error,
                success: false,
                status: 500,
            };

        }
    },
};
