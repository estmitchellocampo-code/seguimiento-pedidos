import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

function Repartidores() {
  const [repartidores, setRepartidores] = useState([]);

  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [zona, setZona] = useState("");

  const [editandoId, setEditandoId] = useState(null);

  // 🔵 CARGAR DESDE BACKEND
  const cargarRepartidores = async () => {
    try {
      const res = await fetch("http://localhost:3001/repartidores");
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

  // 🔵 GUARDAR (CREAR / EDITAR)
  const guardarRepartidor = async () => {
    if (!nombre || !telefono || !zona) {
      alert("Complete todos los campos");
      return;
    }

    // ✏️ EDITAR (PUT)
    if (editandoId) {
      try {
        await fetch(`http://localhost:3001/repartidores/${editandoId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nombre,
            telefono,
            zona,
          }),
        });

        setEditandoId(null);
      } catch (error) {
        console.error(error);
      }
    } 
    // ➕ CREAR (POST)
    else {
      try {
        await fetch("http://localhost:3001/repartidores", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nombre,
            telefono,
            zona,
          }),
        });
      } catch (error) {
        console.error(error);
      }
    }

    setNombre("");
    setTelefono("");
    setZona("");

    cargarRepartidores();
  };

  // 🗑️ ELIMINAR (DELETE)
  const eliminarRepartidor = async (id) => {
    const confirmar = window.confirm("¿Está seguro de eliminar este repartidor?");
    if (!confirmar) return;

    try {
      await fetch(`http://localhost:3001/repartidores/${id}`, {
        method: "DELETE",
      });

      cargarRepartidores();
    } catch (error) {
      console.error(error);
    }
  };

  // ✏️ EDITAR (cargar datos al formulario)
  const editarRepartidor = (repartidor) => {
    setNombre(repartidor.nombre);
    setTelefono(repartidor.telefono);
    setZona(repartidor.zona);
    setEditandoId(repartidor.id);
  };

  return (
    <>
      <Navbar />

      <div className="container mt-4">
        <h1 className="mb-4 fw-bold">Gestión de Repartidores</h1>

        {/* FORMULARIO */}
        <div className="card p-4 mb-4 shadow-lg border-0">
          <h3 className="mb-3">
            {editandoId ? "Editar Repartidor" : "Crear Repartidor"}
          </h3>

          <div className="row">
            <div className="col-md-4 mb-3">
              <input
                className="form-control"
                placeholder="Nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>

            <div className="col-md-4 mb-3">
              <input
                className="form-control"
                placeholder="Teléfono"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
              />
            </div>

            <div className="col-md-4 mb-3">
              <input
                className="form-control"
                placeholder="Zona"
                value={zona}
                onChange={(e) => setZona(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") guardarRepartidor();
                }}
              />
            </div>
          </div>

          <button
            className={
              editandoId ? "btn btn-warning" : "btn btn-success"
            }
            onClick={guardarRepartidor}
          >
            {editandoId ? "Actualizar Repartidor" : "Guardar Repartidor"}
          </button>
        </div>

        {/* TABLA */}
        <table className="table table-striped shadow">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Teléfono</th>
              <th>Zona</th>
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

                <td>
                  <button
                    className="btn btn-primary btn-sm me-2"
                    onClick={() => editarRepartidor(r)}
                  >
                    Editar
                  </button>

                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => eliminarRepartidor(r.id)}
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