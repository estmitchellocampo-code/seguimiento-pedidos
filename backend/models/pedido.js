const mongoose = require("mongoose")

const pedidoSchema = new mongoose.Schema({
  cliente: String,
  origen: String,
  destino: String,
  descripcion: String,
  estado: {
    type: String,
    default: "Pendiente"
  }
})

module.exports = mongoose.model("Pedido", pedidoSchema)
