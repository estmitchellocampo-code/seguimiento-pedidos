import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

function Pedidos() {
  const [pedidos, setPedidos] = useState([]);

  const [cliente, setCliente] = useState("");
  const [origen, setOrigen] = useState("");
  const [destino, setDestino] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const [editandoId, setEditandoId] = useState(null);

  // 🔵 CARGAR DESDE BACKEND
  const cargarPedidos = async () => {
    try {
      const respuesta = await fetch("http://localhost:3001/pedidos");
      const datos = await respuesta.json();
      setPedidos(datos);
    } catch (error) {
      console.error(error);
      alert("Error al cargar pedidos");
    }
  };

  useEffect(() => {
    cargarPedidos();
  }, []);

  // 🔵 GUARDAR (CREAR O EDITAR)
  const guardarPedido = async () => {
    if (!cliente || !origen || !destino || !descripcion) {
      alert("Complete todos los campos");
      return;
    }

    // ✏️ EDITAR (PUT)
    if (editandoId) {
      try {
        await fetch(`http://localhost:3001/pedidos/${editandoId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            cliente,
            origen,
            destino,
            descripcion,
          }),
        });

        setEditandoId(null);
        await cargarPedidos();
      } catch (error) {
        console.error(error);
      }
    } 
    // ➕ CREAR (POST)
    else {
      try {
        await fetch("http://localhost:3001/pedidos", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            cliente,
            origen,
            destino,
            descripcion,
            estado: "Pendiente",
          }),
        });

        await cargarPedidos();
      } catch (error) {
        console.error(error);
      }
    }

    // limpiar formulario
    setCliente("");
    setOrigen("");
    setDestino("");
    setDescripcion("");
  };

  // 🗑️ ELIMINAR (DELETE)
  const eliminarPedido = async (id) => {
    const confirmar = window.confirm("¿Está seguro de eliminar este pedido?");
    if (!confirmar) return;

    try {
      await fetch(`http://localhost:3001/pedidos/${id}`, {
        method: "DELETE",
      });

      await cargarPedidos();
    } catch (error) {
      console.error(error);
    }
  };

  // ✏️ EDITAR (cargar datos al formulario)
  const editarPedido = (pedido) => {
    setCliente(pedido.cliente);
    setOrigen(pedido.origen);
    setDestino(pedido.destino);
    setDescripcion(pedido.descripcion);
    setEditandoId(pedido.id);
  };

  return (
    <>
      <Navbar />

      <div className="container mt-4">
        <h1 className="mb-4 fw-bold">Gestión de Pedidos</h1>

        {/* FORMULARIO */}
        <div className="card p-4 mb-4 shadow-lg border-0">
          <h3 className="mb-3">
            {editandoId ? "Editar Pedido" : "Crear Pedido"}
          </h3>

          <div className="row">
            <div className="col-md-6 mb-3">
              <input
                className="form-control"
                placeholder="Cliente"
                value={cliente}
                onChange={(e) => setCliente(e.target.value)}
              />
            </div>

            <div className="col-md-6 mb-3">
              <input
                className="form-control"
                placeholder="Origen"
                value={origen}
                onChange={(e) => setOrigen(e.target.value)}
              />
            </div>

            <div className="col-md-6 mb-3">
              <input
                className="form-control"
                placeholder="Destino"
                value={destino}
                onChange={(e) => setDestino(e.target.value)}
              />
            </div>

            <div className="col-md-6 mb-3">
              <input
                className="form-control"
                placeholder="Descripción"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") guardarPedido();
                }}
              />
            </div>
          </div>

          <button
            className={
              editandoId
                ? "btn btn-warning mt-3"
                : "btn btn-success mt-3"
            }
            onClick={guardarPedido}
          >
            {editandoId ? "Actualizar Pedido" : "Guardar Pedido"}
          </button>
        </div>

        {/* TABLA */}
        <table className="table table-striped shadow">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Cliente</th>
              <th>Origen</th>
              <th>Destino</th>
              <th>Descripción</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>

          <tbody>
            {pedidos.map((pedido) => (
              <tr key={pedido.id}>
                <td>{pedido.id}</td>
                <td>{pedido.cliente}</td>
                <td>{pedido.origen}</td>
                <td>{pedido.destino}</td>
                <td>{pedido.descripcion}</td>
                <td>{pedido.estado}</td>

                <td>
                  <button
                    className="btn btn-primary btn-sm me-2"
                    onClick={() => editarPedido(pedido)}
                  >
                    Editar
                  </button>

                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => eliminarPedido(pedido.id)}
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

export default Pedidos;