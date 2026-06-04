import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import { Link } from "react-router-dom"

function Dashboard() {

  const [totalPedidos, setTotalPedidos] = useState(0)
  const [totalRepartidores, setTotalRepartidores] = useState(0)
  const [totalSeguimiento, setTotalSeguimiento] = useState(0)

  useEffect(() => {

    cargarDatos()

  }, [])

  const cargarDatos = async () => {

    try {

      const respuestaPedidos =
        await fetch(
          "https://seguimiento-pedidos-6c1v.onrender.com/pedidos"
        )

      const pedidos =
        await respuestaPedidos.json()

      const respuestaRepartidores =
        await fetch(
          "https://seguimiento-pedidos-6c1v.onrender.com/repartidores"
        )

      const repartidores =
        await respuestaRepartidores.json()

      setTotalPedidos(
        pedidos.length
      )

      setTotalRepartidores(
        repartidores.length
      )

      setTotalSeguimiento(
      pedidos.length
      )
      

    }

    catch (error) {

      console.error(error)

      alert(
        "Error cargando dashboard"
      )

    }

  }

  return (

  <>

    <Navbar />

    <div className="container mt-4">

      <h1 className="mb-4 fw-bold">
        Dashboard
      </h1>

      <div className="row">

        <div className="col-md-4 mb-4">

          <div className="card p-4 shadow-lg border-0">

            <h3>Pedidos</h3>

            <p className="display-6">
              {totalPedidos}
            </p>

            <Link
              to="/pedidos"
              className="btn btn-primary"
            >
              Ver pedidos
            </Link>

          </div>

        </div>

        <div className="col-md-4 mb-4">

          <div className="card p-4 shadow-lg border-0">

            <h3>Repartidores</h3>

            <p className="display-6">
              {totalRepartidores}
            </p>

            <Link
              to="/repartidores"
              className="btn btn-success"
            >
              Ver repartidores
            </Link>

          </div>

        </div>

        <div className="col-md-4 mb-4">

          <div className="card p-4 shadow-lg border-0">

            <h3>Seguimiento</h3>

            <p className="display-6">
              {totalSeguimiento}
            </p>

            <Link
  to="/seguimiento"
  className="btn btn-warning"
>
  Ver seguimiento
</Link>
    

          </div>

        </div>

      </div>

    </div>

  </>

)

}

export default Dashboard