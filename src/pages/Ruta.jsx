import Navbar from "../components/Navbar";

function Ruta() {

  return (
    <>
      <Navbar />

      <div className="container mt-4">

        <h1 className="fw-bold mb-4">
          Seguimiento de Ruta
        </h1>

        <div className="card p-4 shadow mb-4">

          <div className="row">

            <div className="col-md-4">
              <strong>Cliente:</strong> Ana Torres
            </div>

            <div className="col-md-4">
              <strong>Estado:</strong> En tránsito
            </div>

            <div className="col-md-4">
              <strong>Repartidor:</strong> Carlos Gómez
            </div>

          </div>

          <hr />

          <div className="row">

            <div className="col-md-4">
              <strong>Origen:</strong> Bogotá
            </div>

            <div className="col-md-4">
              <strong>Destino:</strong> Zipaquirá
            </div>

            <div className="col-md-4">
              <strong>Vehículo:</strong> Camión ABC-123
            </div>

          </div>

        </div>

        <div className="row">

          <div className="col-md-6">

            <div className="card p-4 shadow">

              <h4>Historial</h4>

              <ul>
                <li>Pedido creado</li>
                <li>Pedido asignado</li>
                <li>En ruta</li>
                <li>Próxima entrega</li>
              </ul>

            </div>

          </div>

          <div className="col-md-6">

            <div className="card p-2 shadow">

              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Mapa_de_Bogot%C3%A1.svg/1200px-Mapa_de_Bogot%C3%A1.svg.png"
                alt="Ruta"
                className="img-fluid"
              />

            </div>

          </div>

        </div>

      </div>
    </>
  );
}

export default Ruta;