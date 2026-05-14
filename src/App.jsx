import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate
} from 'react-router-dom'

import Dashboard from './pages/Dashboard'
import Pedidos from './pages/Pedidos'

function Login() {

  const navigate = useNavigate()

  function ingresar() {
    navigate('/dashboard')
  }

  return (

    <div
      className="container-fluid d-flex justify-content-center align-items-center"
      style={{
        height: '100vh',
        background: 'linear-gradient(to right, #141e30, #243b55)'
      }}
    >

      <div className="row justify-content-center w-100">

        <div className="col-md-4">

          <div
            className="card p-5 shadow-lg border-0"
            style={{
              borderRadius: '20px'
            }}
          >

            <h2
              className="text-center mb-4 fw-bold"
              style={{
                color: '#243b55'
              }}
            >
              Iniciar Sesión
            </h2>

            <input
              type="email"
              className="form-control mb-3"
              placeholder="Correo electrónico"
            />

            <input
              type="password"
              className="form-control mb-3"
              placeholder="Contraseña"
            />

            <button
              className="btn btn-dark w-100 py-2"
              onClick={ingresar}
            >
              Ingresar
            </button>

          </div>

        </div>

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