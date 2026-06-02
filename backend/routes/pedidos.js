const express = require("express")
const router = express.Router()

const Pedido = require("../models/Pedido")

router.get("/", async (req, res) => {

  const pedidos = await Pedido.find()

  res.json(pedidos)

})

router.post("/", async (req, res) => {

  const nuevoPedido =
    await Pedido.create(req.body)

  res.json(nuevoPedido)

})

router.put("/:id", async (req, res) => {

  await Pedido.findByIdAndUpdate(
    req.params.id,
    req.body
  )

  res.json({
    mensaje: "Pedido actualizado"
  })

})

router.delete("/:id", async (req, res) => {

  await Pedido.findByIdAndDelete(
    req.params.id
  )

  res.json({
    mensaje: "Pedido eliminado"
  })

})

module.exports = router