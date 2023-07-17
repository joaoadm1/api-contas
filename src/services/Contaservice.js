"use strict"

let contas = require("../contasdb");
const contaModel = require("../models/ContaModels");


module.exports = {
    listarTodasContas: async () => {
        try {
            const contasCadastradas = await contaModel.find();
            return contasCadastradas;

        } catch (error) {
            return {
                mensagem: error,
                success: false,
                status: 404,
            };

        }

    },

    buscarPorId: async (id) => {
        try {
            const contaEncontrada = await contaModel.findOne({ _id: id });
            return contaEncontrada;

        } catch (error) {
            return {
                mensagem: error,
                success: false,
                status: 404,
            };

        }

    },
    cadastrarNovaConta: async (conta) => {
        try {

            const novaConta = await contaModel.create(conta);
            return {
                novaConta,
                mensagem: "Conta cadastrada com sucesso.",
            };
        } catch (error) {
            return {
                mensagem: error,
                success: false,
                status: 404,
            }
        }
    },

    alterarConta: async (id, novasInformacoes) => {
        try {
            //const contaEncontrada = await contaModel.findById(id);
            const contaAtualizada = await contaModel.findByIdAndUpdate(
                id,
                { ...novasInformacoes },
                { new: true },
            )
            if (!contaAtualizada){
                throw {
                    mensagem: "Não foi possível localizar a conta!",
                    success: false,
                    status: 404,
                };
            };
            return contaAtualizada;
        }catch (error) {
            return {
                mensagem: error,
                success: false,
                status: 404,
            }
        }
    },

}
