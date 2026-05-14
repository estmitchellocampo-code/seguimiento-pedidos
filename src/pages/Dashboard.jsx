import Navbar from '../components/Navbar'

function Dashboard() {

  return (

    <>

      <Navbar />

      <div className="container mt-4">

        <h1 className="mb-4">
          Dashboard
        </h1>

        <div className="row">

          <div className="col-md-4">

            <div className="card p-4 shadow">

              <h3>Pedidos</h3>

              <p className="display-6">
                15
              </p>

              <a
                href="/pedidos"
                className="btn btn-primary"
              >
                Ver pedidos
              </a>

            </div>

          </div>

          <div className="col-md-4">

            <div className="card p-4 shadow">

              <h3>Repartidores</h3>

              <p className="display-6">
                5
              </p>

            </div>

          </div>

        </div>

      </div>

    </>

  )

}

export default Dashboard
