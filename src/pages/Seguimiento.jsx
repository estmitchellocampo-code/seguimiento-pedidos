import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"

function Seguimiento() {

  const [pedidos, setPedidos] = useState([])

  useEffect(() => {

    cargarPedidos()

  }, [])

  const cargarPedidos = async () => {

    const respuesta = await fetch(
      "https://seguimiento-pedidos-6c1v.onrender.com/pedidos"
    )

    const datos = await respuesta.json()

    setPedidos(datos)

  }

  const pendientes =
    pedidos.filter(
      p => p.estado === "Pendiente"
    ).length

  const asignados =
    pedidos.filter(
      p => p.estado === "Asignado"
    ).length

  const enTransito =
    pedidos.filter(
      p => p.estado === "En tránsito"
    ).length

  const entregados =
    pedidos.filter(
      p => p.estado === "Entregado"
    ).length

  return (

    <>
      <Navbar />

      <div className="container mt-4">

        <h1 className="mb-4">
          Seguimiento de Pedidos
        </h1>

        <div className="row mb-4">

          <div className="col">
            <div className="card p-3">
              Pendientes: {pendientes}
            </div>
          </div>

          <div className="col">
            <div className="card p-3">
              Asignados: {asignados}
            </div>
          </div>

          <div className="col">
            <div className="card p-3">
              En tránsito: {enTransito}
            </div>
          </div>

          <div className="col">
            <div className="card p-3">
              Entregados: {entregados}
            </div>
          </div>

        </div>

        <table className="table table-striped">

          <thead>

            <tr>
              <th>Cliente</th>
              <th>Destino</th>
              <th>Repartidor</th>
              <th>Estado</th>
            </tr>

          </thead>

          <tbody>

            {pedidos.map((pedido) => (

              <tr key={pedido.id}>

                <td>{pedido.cliente}</td>

                <td>{pedido.destino}</td>

                <td>
                  {pedido.repartidorAsignado || "-"}
                </td>

                <td>{pedido.estado}</td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </>
  )

}

export default Seguimiento