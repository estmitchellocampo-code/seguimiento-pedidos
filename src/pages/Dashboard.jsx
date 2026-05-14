// src/pages/Dashboard.jsx
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

function Dashboard() {
  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <h1 className="mb-4 fw-bold">Dashboard</h1>

        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="card p-4 shadow-lg border-0">
              <h3>Pedidos</h3>
              <p className="display-6">15</p>
              <Link to="/pedidos" className="btn btn-primary">
                Ver pedidos
              </Link>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="card p-4 shadow-lg border-0">
              <h3>Repartidores</h3>
              <p className="display-6">5</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
