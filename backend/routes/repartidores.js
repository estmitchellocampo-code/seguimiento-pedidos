const express = require("express")

const router = express.Router()

let repartidores = [
  {
    id: 1,
    nombre: "Carlos",
    telefono: "3001234567",
    zona: "Norte"
  }
]

router.get("/", (req, res) => {
  res.json(repartidores)
})

router.post("/", (req, res) => {

  const nuevoRepartidor = {
    id: Date.now(),
    ...req.body
  }

  repartidores.push(nuevoRepartidor)

  res.json(nuevoRepartidor)

})

router.put("/:id", (req, res) => {

  const id = Number(req.params.id)

  repartidores = repartidores.map((r) =>

    r.id === id
      ? { ...r, ...req.body }
      : r

  )

  res.json({
    mensaje: "Repartidor actualizado"
  })

})

router.delete("/:id", (req, res) => {

  const id = Number(req.params.id)

  repartidores = repartidores.filter(
    r => r.id !== id
  )

  res.json({
    mensaje: "Repartidor eliminado"
  })

})

module.exports = router