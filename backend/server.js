const express = require("express")
const cors = require("cors")

const pedidosRoutes = require("./routes/pedidos")
const repartidoresRoutes = require("./routes/repartidores")

const app = express()

app.use(cors())
app.use(express.json())

app.use("/pedidos", pedidosRoutes)
app.use("/repartidores", repartidoresRoutes)

app.get("/", (req, res) => {
  res.json({
    mensaje: "API funcionando correctamente"
  })
})

app.post("/login", (req, res) => {

  const { usuario, password } = req.body

  const usuarios = [
    {
      usuario: "admin",
      password: "123",
      rol: "admin"
    },
    {
      usuario: "repartidor",
      password: "123",
      rol: "repartidor"
    }
  ]

  const usuarioEncontrado = usuarios.find(
    u =>
      u.usuario === usuario &&
      u.password === password
  )

  if (!usuarioEncontrado) {

    return res.status(401).json({
      mensaje: "Credenciales incorrectas"
    })

  }

  res.json({
    usuario: usuarioEncontrado.usuario,
    rol: usuarioEncontrado.rol
  })

})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(
    `Servidor ejecutándose en puerto ${PORT}`
  )
})