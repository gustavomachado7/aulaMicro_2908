const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const scheme = new Schema({
    ticket: {
        idTicket: {
            type: Number,
        },
        idPessoa: {
            type: Number,
        },
        titulo: {
            type: String,
        },
        telefone: {
            type: Number,
        }
    },
    historico: {
        type: String,
    },
    idAtendente: {
        type: Number,
    },
    motivos: {
        type: String,
    }
})
module.exports = mongoose.model('Registro', scheme)