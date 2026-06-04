import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

function Repartidores() {

  const [repartidores, setRepartidores] = useState([]);

  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [zona, setZona] = useState("");
  const [vehiculo, setVehiculo] = useState("");
  const [capacidadMaxima, setCapacidadMaxima] = useState("");
  const [estado, setEstado] = useState("Disponible");

  const [editandoId, setEditandoId] = useState(null);

  const cargarRepartidores = async () => {

    try {

      const res = await fetch(
        "https://seguimiento-pedidos-6c1v.onrender.com/repartidores"
      );

      const data = await res.json();

      setRepartidores(data);

    } catch (error) {

      console.error(error);

      alert("Error al cargar repartidores");

    }

  };

  useEffect(() => {

    cargarRepartidores();

  }, []);

  const guardarRepartidor = async () => {

    if (
      !nombre ||
      !telefono ||
      !zona
    ) {

      alert("Complete todos los campos");

      return;

    }

    if (editandoId) {

      try {

        await fetch(
          `https://seguimiento-pedidos-6c1v.onrender.com/repartidores/${editandoId}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              nombre,
              telefono,
              zona,
              vehiculo,
              capacidadMaxima,
              estado
            }),
          }
        );

        setEditandoId(null);

      } catch (error) {

        console.error(error);

      }

    } else {

      try {

        await fetch(
          "https://seguimiento-pedidos-6c1v.onrender.com/repartidores",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              nombre,
              telefono,
              zona,
              vehiculo,
              capacidadMaxima,
              estado
            }),
          }
        );

      } catch (error) {

        console.error(error);

      }

    }

    setNombre("");
    setTelefono("");
    setZona("");
    setVehiculo("");
    setCapacidadMaxima("");
    setEstado("Disponible");

    cargarRepartidores();

  };

  const eliminarRepartidor = async (id) => {

    const confirmar = window.confirm(
      "¿Está seguro de eliminar este repartidor?"
    );

    if (!confirmar) return;

    try {

      await fetch(
        `https://seguimiento-pedidos-6c1v.onrender.com/repartidores/${id}`,
        {
          method: "DELETE",
        }
      );

      cargarRepartidores();

    } catch (error) {

      console.error(error);

    }

  };

  const editarRepartidor = (r) => {

    setNombre(r.nombre);
    setTelefono(r.telefono);
    setZona(r.zona);
    setVehiculo(r.vehiculo || "");
    setCapacidadMaxima(r.capacidadMaxima || "");
    setEstado(r.estado || "Disponible");

    setEditandoId(r.id);

  };

  return (

    <>

      <Navbar />

      <div className="container mt-4">

        <h1 className="mb-4 fw-bold">
          Gestión de Repartidores
        </h1>

        <div className="card p-4 mb-4 shadow-lg border-0">

          <h3 className="mb-3">

            {editandoId
              ? "Editar Repartidor"
              : "Crear Repartidor"}

          </h3>

          <div className="row">

            <div className="col-md-4 mb-3">
              <input
                className="form-control"
                placeholder="Nombre"
                value={nombre}
                onChange={(e) =>
                  setNombre(e.target.value)
                }
              />
            </div>

            <div className="col-md-4 mb-3">
              <input
                className="form-control"
                placeholder="Teléfono"
                value={telefono}
                onChange={(e) =>
                  setTelefono(e.target.value)
                }
              />
            </div>

            <div className="col-md-4 mb-3">
              <input
                className="form-control"
                placeholder="Zona"
                value={zona}
                onChange={(e) =>
                  setZona(e.target.value)
                }
              />
            </div>

            <div className="col-md-4 mb-3">
              <input
                className="form-control"
                placeholder="Vehículo"
                value={vehiculo}
                onChange={(e) =>
                  setVehiculo(e.target.value)
                }
              />
            </div>

            <div className="col-md-4 mb-3">
              <input
                type="number"
                className="form-control"
                placeholder="Capacidad máxima"
                value={capacidadMaxima}
                onChange={(e) =>
                  setCapacidadMaxima(e.target.value)
                }
              />
            </div>

            <div className="col-md-4 mb-3">

              <select
                className="form-select"
                value={estado}
                onChange={(e) =>
                  setEstado(e.target.value)
                }
              >

                <option>
                  Disponible
                </option>

                <option>
                  En ruta
                </option>

                <option>
                  En reparto
                </option>

                <option>
                  Fuera de servicio
                </option>

              </select>

            </div>

          </div>

          <button
            className={
              editandoId
                ? "btn btn-warning"
                : "btn btn-success"
            }
            onClick={guardarRepartidor}
          >

            {editandoId
              ? "Actualizar Repartidor"
              : "Guardar Repartidor"}

          </button>

        </div>

        <table className="table table-striped shadow">

          <thead className="table-dark">

            <tr>

              <th>ID</th>
              <th>Nombre</th>
              <th>Teléfono</th>
              <th>Zona</th>
              <th>Vehículo</th>
              <th>Capacidad</th>
              <th>Estado</th>
              <th>Acciones</th>

            </tr>

          </thead>

          <tbody>

            {repartidores.map((r) => (

              <tr key={r.id}>

                <td>{r.id}</td>
                <td>{r.nombre}</td>
                <td>{r.telefono}</td>
                <td>{r.zona}</td>
                <td>{r.vehiculo}</td>
                <td>{r.capacidadMaxima}</td>
                <td>{r.estado}</td>

                <td>

                  <button
                    className="btn btn-primary btn-sm me-2"
                    onClick={() =>
                      editarRepartidor(r)
                    }
                  >
                    Editar
                  </button>

                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() =>
                      eliminarRepartidor(r.id)
                    }
                  >
                    Eliminar
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </>

  );

}

export default Repartidores;