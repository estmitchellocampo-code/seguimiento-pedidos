import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate
} from "react-router-dom"

import Dashboard from "./pages/Dashboard"
import Pedidos from "./pages/Pedidos"

function Login() {

  const navigate = useNavigate()

  return (

    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(to right, #141e30, #243b55)"
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
          type="email"
          placeholder="Correo electrónico"
          className="form-control mb-3"
        />

        <input
          type="password"
          placeholder="Contraseña"
          className="form-control mb-3"
        />

        <button
          className="btn btn-dark w-100"
          onClick={() => navigate("/dashboard")}
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
          element={<Dashboard />}
        />

        <Route
          path="/pedidos"
          element={<Pedidos />}
        />

      </Routes>

    </BrowserRouter>

  )

}

export default App