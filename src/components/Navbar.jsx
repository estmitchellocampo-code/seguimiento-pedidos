import { Link, useNavigate } from "react-router-dom"

function Navbar() {

  const rol = localStorage.getItem("rol")

  const navigate = useNavigate()

  const cerrarSesion = () => {

    localStorage.removeItem("rol")

    navigate("/")

  }

  return (

    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{ background: "#141e30" }}
    >

      <div className="container">

        <Link
          className="navbar-brand"
          to="/dashboard"
        >
          Seguimiento Pedidos
        </Link>

        <div>

          {rol === "admin" && (

            <>
              <Link
                className="btn btn-outline-light me-2"
                to="/dashboard"
              >
                Dashboard
              </Link>

              <Link
                className="btn btn-outline-light me-2"
                to="/pedidos"
              >
                Pedidos
              </Link>

              <Link
                className="btn btn-outline-light me-2"
                to="/repartidores"
              >
                Repartidores
              </Link>
            </>

          )}

          {rol === "repartidor" && (

            <Link
              className="btn btn-outline-light me-2"
              to="/pedidos"
            >
              Pedidos
            </Link>

          )}

          <button
            className="btn btn-danger"
            onClick={cerrarSesion}
          >
            Salir
          </button>

        </div>

      </div>

    </nav>

  )

}

export default Navbar