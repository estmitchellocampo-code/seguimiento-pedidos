import Navbar from '../components/Navbar'
import { pedidos } from '../data/pedidos'

function Pedidos() {

  return (

    <>

      <Navbar />

      <div className="container mt-4">

        <h1 className="mb-4">
          Gestión de Pedidos
        </h1>

        <div className="card p-4 mb-4">

  <h3 className="mb-3">
    Crear Pedido
  </h3>

  <div className="row">

    <div className="col-md-4">

      <input
        type="text"
        className="form-control"
        placeholder="Cliente"
      />

    </div>

    <div className="col-md-4">

      <input
        type="text"
        className="form-control"
        placeholder="Estado"
      />

    </div>

    <div className="col-md-4">

      <input
        type="text"
        className="form-control"
        placeholder="Repartidor"
      />

    </div>

  </div>

  <button className="btn btn-success mt-3">

    Guardar Pedido

  </button>

</div>

        <table className="table table-striped">

          <thead className="table-dark">

            <tr>

              <th>ID</th>
              <th>Cliente</th>
              <th>Estado</th>
              <th>Repartidor</th>

            </tr>

          </thead>

          <tbody>

            {pedidos.map((pedido) => (

              <tr key={pedido.id}>

                <td>{pedido.id}</td>

                <td>{pedido.cliente}</td>

                <td>{pedido.estado}</td>

                <td>{pedido.repartidor}</td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </>

  )

}

export default Pedidos