const express = require("express")

const router = express.Router()

let pedidos = [
  {
    id: 1,
    cliente: "PRUEBA EXPRESS",
    origen: "Bogotá",
    destino: "Zipaquirá",
    descripcion: "API funcionando",
    estado: "Pendiente"
  }
]

router.get("/", (req, res) => {
  res.json(pedidos)
})

router.post("/", (req, res) => {

  const nuevoPedido = {
    id: Date.now(),
    ...req.body
  }

  pedidos.push(nuevoPedido)

  res.json(nuevoPedido)

})

router.put("/:id", (req, res) => {

  const id = Number(req.params.id)

  pedidos = pedidos.map((pedido) =>

    pedido.id === id
      ? { ...pedido, ...req.body }
      : pedido

  )

  res.json({
    mensaje: "Pedido actualizado"
  })

})

router.delete("/:id", (req, res) => {

  const id = Number(req.params.id)

  pedidos = pedidos.filter(
    pedido => pedido.id !== id
  )

  res.json({
    mensaje: "Pedido eliminado"
  })

})

module.exports = router