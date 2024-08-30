const mongoose = require('mongoose');
const Ticket = mongoose.model('Ticket');

exports.get = async() => {
    const result = await Ticket.find({});
    return result;
}

exports.create = async(data) => {
    const ticket = Ticket(data)
    await ticket.save()
} 

exports.update = async(id, data) => {
    await Ticket.findByIdAndUpdate(id, {
        $set:{
            titulo: data.titulo,
            telefone: data.telefone
        }
    })
}



// const mongoose = require('mongoose');
// const Registro = mongoose.model('Registro');

// exports.get = async() => {
//     const result = await Registro.find({});
//     return result;
// }

// exports.create = async(data) => {
//     const registro = Registro(data)
//     await registro.save()
// } 

// exports.update = async(id, data) => {
//     await Registro.findByIdAndUpdate(id, {
//         $set:{
//             titulo: data.titulo,
//             preco: data.preco
//         }
//     })
// }



