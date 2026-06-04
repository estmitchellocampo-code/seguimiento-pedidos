import Navbar from "../components/Navbar"

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

          <div className="col-md-5">

            <div className="card p-4 shadow h-100">

              <h3 className="mb-4">
                Historial del Pedido
              </h3>

              <div className="mb-4">
                ✅ Pedido creado
                <br />
                <small>
                  24/05/2026 - 07:00
                </small>
              </div>

              <div className="mb-4">
                📦 Pedido asignado
                <br />
                <small>
                  24/05/2026 - 08:00
                </small>
              </div>

              <div className="mb-4">
                🚚 En ruta
                <br />
                <small>
                  26/05/2026 - 09:00
                </small>
              </div>

              <div>
                📍 Próxima entrega
                <br />
                <small>
                  Zipaquirá, Cundinamarca
                </small>
              </div>

            </div>

          </div>

          <div className="col-md-7">

            <div className="card p-3 shadow">

              <h4 className="mb-3">
                Ruta Actual del Repartidor
              </h4>

              <img
                src="https://media.bikemap.net/routes/4333520/staticmaps/in_e921b2dc-fc69-490a-91ca-e783df7f6ab4_694x400_bikemap-2021-3D-static.png"
                alt="Ruta del pedido"
                className="img-fluid rounded"
              />

            </div>

          </div>

        </div>

      </div>

    </>

  )

}

export default Ruta