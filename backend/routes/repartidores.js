const express = require("express")
const router = express.Router()

const Repartidor = require("../models/Repartidor")

router.get("/", async (req, res) => {

  const repartidores =
    await Repartidor.find()

  res.json(repartidores)

})

router.post("/", async (req, res) => {

  const nuevoRepartidor =
    await Repartidor.create(req.body)

  res.json(nuevoRepartidor)

})

router.put("/:id", async (req, res) => {

  await Repartidor.findByIdAndUpdate(
    req.params.id,
    req.body
  )

  res.json({
    mensaje: "Repartidor actualizado"
  })

})

router.delete("/:id", async (req, res) => {

  await Repartidor.findByIdAndDelete(
    req.params.id
  )

  res.json({
    mensaje: "Repartidor eliminado"
  })

})

module.exports = router