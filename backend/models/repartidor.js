const mongoose = require("mongoose")

const repartidorSchema = new mongoose.Schema({
  nombre: String,
  telefono: String,
  zona: String
})

module.exports = mongoose.model("Repartidor", repartidorSchema)
