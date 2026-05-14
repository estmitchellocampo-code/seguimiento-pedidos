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

    <div className="container mt-5">

      <div className="row justify-content-center">

        <div className="col-md-4">

          <div className="card p-4 shadow">

            <h2 className="text-center mb-4">
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
              className="btn btn-primary w-100"
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