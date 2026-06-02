import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate
} from "react-router-dom"

import { useState } from "react"

import Dashboard from "./pages/Dashboard"
import Pedidos from "./pages/Pedidos"
import Repartidores from "./pages/Repartidores"

import ProtectedRoute from "./components/ProtectedRoute"

function Login() {

  const navigate = useNavigate()

  const [usuario, setUsuario] = useState("")
  const [password, setPassword] = useState("")

 const iniciarSesion = async () => {

  try {

    const respuesta = await fetch(
      "http://localhost:3001/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          usuario,
          password
        })
      }
    )

    const datos = await respuesta.json()

    if (!respuesta.ok) {

      alert(datos.mensaje)

      return

    }

    localStorage.setItem(
      "rol",
      datos.rol
    )

    if (datos.rol === "admin") {

      navigate("/dashboard")

    } else {

      navigate("/pedidos")

    }

  }

  catch (error) {

    console.error(error)

    alert(
      "No fue posible conectar con el servidor"
    )

  }

}

  return (

    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          "linear-gradient(to right, #141e30, #243b55)"
      }}
    >

      <div
        style={{
          background: "white",
          padding: "40px",
          borderRadius: "15px",
          width: "350px",
          textAlign: "center"
        }}
      >

        <h2
          style={{
            fontSize: "30px",
            marginBottom: "20px",
            color: "#141e30"
          }}
        >
          Iniciar Sesión
        </h2>

        <input
          type="text"
          placeholder="Usuario"
          className="form-control mb-3"
          value={usuario}
          onChange={(e) =>
            setUsuario(e.target.value)
          }
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              iniciarSesion()
            }
          }}
        />

        <input
          type="password"
          placeholder="Contraseña"
          className="form-control mb-3"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              iniciarSesion()
            }
          }}
        />

        <button
          className="btn btn-dark w-100"
          onClick={iniciarSesion}
        >
          Ingresar
        </button>

      </div>

    </div>

  )

}

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Login />}
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute
              roles={["admin"]}
            >
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/pedidos"
          element={
            <ProtectedRoute
              roles={[
                "admin",
                "repartidor"
              ]}
            >
              <Pedidos />
            </ProtectedRoute>
          }
        />

        <Route
          path="/repartidores"
          element={
            <ProtectedRoute
              roles={["admin"]}
            >
              <Repartidores />
            </ProtectedRoute>
          }
        />

      </Routes>

    </BrowserRouter>

  )

}

export default App