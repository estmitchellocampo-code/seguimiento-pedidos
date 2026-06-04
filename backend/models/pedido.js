const mongoose = require("mongoose")

const mongoose = require("mongoose")

const pedidoSchema = new mongoose.Schema({

  cliente: String,

  origen: String,

  destino: String,

  descripcion: String,

  repartidorAsignado: {
    type: String,
    default: ""
  },

  estado: {
    type: String,
    default: "Pendiente"
  },

  historial: [
    {
      accion: String,

      fecha: {
        type: Date,
        default: Date.now
      }
    }
  ]

})

module.exports = mongoose.model(
  "Pedido",
  pedidoSchema
)