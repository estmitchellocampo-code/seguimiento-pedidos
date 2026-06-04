import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

function Pedidos() {

  const [pedidos, setPedidos] = useState([]);

  const [cliente, setCliente] = useState("");
  const [origen, setOrigen] = useState("");
  const [destino, setDestino] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [estado, setEstado] = useState("Pendiente");

  const [
  repartidorAsignado,
  setRepartidorAsignado
] = useState("")

  const [filtroEstado, setFiltroEstado] = useState("Todos");

  const [editandoId, setEditandoId] = useState(null);

  const cargarPedidos = async () => {

    try {

      const respuesta =
        await fetch(
          "https://seguimiento-pedidos-6c1v.onrender.com/pedidos"
        );

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

  const guardarPedido = async () => {

    if (
      !cliente ||
      !origen ||
      !destino ||
      !descripcion
    ) {

      alert("Complete todos los campos");

      return;

    }

    if (editandoId) {

      try {

        await fetch(
          `https://seguimiento-pedidos-6c1v.onrender.com/pedidos/${editandoId}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              cliente,
              origen,
              destino,
              descripcion,
              estado,
            }),
          }
        );

        setEditandoId(null);

        await cargarPedidos();

      } catch (error) {

        console.error(error);

      }

    } else {

      try {

        await fetch(
          "https://seguimiento-pedidos-6c1v.onrender.com/pedidos",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              cliente,
              origen,
              destino,
              descripcion,
              estado,
            }),
          }
        );

        await cargarPedidos();

      } catch (error) {

        console.error(error);

      }

    }

    setCliente("");
    setOrigen("");
    setDestino("");
    setDescripcion("");
    setEstado("Pendiente");

  };

  
  

  
    const eliminarPedido = async (id) => {

  const confirmar =
    window.confirm(
      "¿Está seguro de eliminar este pedido?"
    );

    if (!confirmar) return;

    try {

      await fetch(
        `https://seguimiento-pedidos-6c1v.onrender.com/pedidos/${id}`,
        {
          method: "DELETE",
        }
      );

      await cargarPedidos();

    } catch (error) {

      console.error(error);

    }

  };

 const editarPedido = (pedido) => {

  setCliente(pedido.cliente)
  setOrigen(pedido.origen)
  setDestino(pedido.destino)
  setDescripcion(pedido.descripcion)
  setEstado(pedido.estado)

  setEditandoId(pedido.id)

};;

  const pedidosFiltrados =
    pedidos.filter((pedido) => {

      if (filtroEstado === "Todos") {

        return true;

      }

      return pedido.estado === filtroEstado;

    });

  return (

    <>

      <Navbar />

      <div className="container mt-4">

        <h1 className="mb-4 fw-bold">
          Gestión de Pedidos
        </h1>

        <div className="card p-4 mb-4 shadow-lg border-0">

          <h3 className="mb-3">

            {editandoId
              ? "Editar Pedido"
              : "Crear Pedido"}

          </h3>

          <div className="row">

            <div className="col-md-6 mb-3">

              <input
                className="form-control"
                placeholder="Cliente"
                value={cliente}
                onChange={(e) =>
                  setCliente(e.target.value)
                }
              />

            </div>

            <div className="col-md-6 mb-3">

              <input
                className="form-control"
                placeholder="Origen"
                value={origen}
                onChange={(e) =>
                  setOrigen(e.target.value)
                }
              />

            </div>

            <div className="col-md-6 mb-3">

              <input
                className="form-control"
                placeholder="Destino"
                value={destino}
                onChange={(e) =>
                  setDestino(e.target.value)
                }
              />

            </div>

            <div className="col-md-6 mb-3">

              <input
                className="form-control"
                placeholder="Descripción"
                value={descripcion}
                onChange={(e) =>
                  setDescripcion(
                    e.target.value
                  )
                }
              />

            </div>

            <div className="col-md-6 mb-3">

              <select
                className="form-select"
                value={estado}
                onChange={(e) =>
                  setEstado(
                    e.target.value
                  )
                }
              >

                <option>
                  Pendiente
                </option>

                <option>
                  En tránsito
                </option>

                <option>
                  Entregado
                </option>

              </select>

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

            {editandoId
              ? "Actualizar Pedido"
              : "Guardar Pedido"}

          </button>

        </div>

        <div className="card p-3 mb-4 shadow">

          <label className="fw-bold mb-2">

            Filtrar por estado

          </label>

          <select
            className="form-select"
            value={filtroEstado}
            onChange={(e) =>
              setFiltroEstado(
                e.target.value
              )
            }
          >

            <option value="Todos">
              Todos
            </option>

            <option value="Pendiente">
              Pendiente
            </option>

            <option value="En tránsito">
              En tránsito
            </option>

            <option value="Entregado">
              Entregado
            </option>

          </select>

        </div>

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

            {pedidosFiltrados.map(
              (pedido) => (

                <tr key={pedido.id}>

                  <td>
                   {pedido.id}
                  </td>

                  <td>
                    {pedido.cliente}
                  </td>

                  <td>
                    {pedido.origen}
                  </td>

                  <td>
                    {pedido.destino}
                  </td>

                  <td>
                    {pedido.descripcion}
                  </td>

                  <td>
                    {pedido.estado}
                  </td>

                  <td>

                    <button
                      className="btn btn-primary btn-sm me-2"
                      onClick={() =>
                        editarPedido(
                          pedido
                        )
                      }
                    >
                      Editar
                    </button>

                    <button
  className="btn btn-danger btn-sm"
  onClick={() =>
    eliminarPedido(pedido.id)
  }
>
  Eliminar
</button>

                  </td>

                </tr>

              )
            )}

          </tbody>

        </table>

      </div>

    </>

  );

}

export default Pedidos;