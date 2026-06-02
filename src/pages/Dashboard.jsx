import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import { Link } from "react-router-dom"

function Dashboard() {

  const [totalPedidos, setTotalPedidos] = useState(0)
  const [totalRepartidores, setTotalRepartidores] = useState(0)
  const [totalEntregados, setTotalEntregados] = useState(0)

  useEffect(() => {

    cargarDatos()

  }, [])

  const cargarDatos = async () => {

    try {

      const respuestaPedidos =
        await fetch(
          "http://localhost:3001/pedidos"
        )

      const pedidos =
        await respuestaPedidos.json()

      const respuestaRepartidores =
        await fetch(
          "http://localhost:3001/repartidores"
        )

      const repartidores =
        await respuestaRepartidores.json()

      setTotalPedidos(
        pedidos.length
      )

      setTotalRepartidores(
        repartidores.length
      )

      const entregados =
        pedidos.filter(
          pedido =>
            pedido.estado === "Entregado"
        )

      setTotalEntregados(
        entregados.length
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

            </div>

          </div>

          <div className="col-md-4 mb-4">

            <div className="card p-4 shadow-lg border-0">

              <h3>Entregados</h3>

              <p className="display-6">
                {totalEntregados}
              </p>

            </div>

          </div>

        </div>

      </div>

    </>

  )

}

export default Dashboard