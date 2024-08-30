const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const scheme = new Schema({
    idTicket: {
        type: Number,
        required: true
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
})
module.exports = mongoose.model('Ticket', scheme)