const express = require("express")
const router = express.Router()

const Pedido = require("../models/Pedido")

router.get("/", async (req, res) => {

  const pedidos = await Pedido.find()

  res.json(pedidos)

})

router.post("/", async (req, res) => {

  const nuevoPedido =
    await Pedido.create({

      ...req.body,

      historial: [
        {
          accion: "Pedido creado"
        }
      ]

    })

  res.json(nuevoPedido)

})

router.put("/:id", async (req, res) => {

  const pedido =
    await Pedido.findById(req.params.id)

  if (!pedido) {

    return res.status(404).json({
      mensaje: "Pedido no encontrado"
    })

  }

  pedido.historial.push({
    accion: "Pedido actualizado"
  })

  Object.assign(
    pedido,
    req.body
  )

  await pedido.save()

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