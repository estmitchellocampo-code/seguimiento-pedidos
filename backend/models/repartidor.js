const mongoose = require("mongoose")

const repartidorSchema = new mongoose.Schema({
  nombre: String,
  telefono: String,
  zona: String,
  vehiculo: String,
  capacidadMaxima: Number,
  estado: {
    type: String,
    default: "Disponible"
  }
})

module.exports = mongoose.model(
  "Repartidor",
  repartidorSchema
)