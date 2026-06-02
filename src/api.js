const BASE_URL = "http://localhost:3001";

// 📦 PEDIDOS
export const getPedidos = async () => {
  const res = await fetch(`${BASE_URL}/pedidos`);
  return res.json();
};

export const createPedido = async (pedido) => {
  const res = await fetch(`${BASE_URL}/pedidos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(pedido),
  });

  return res.json();
};

export const deletePedido = async (id) => {
  const res = await fetch(`${BASE_URL}/pedidos/${id}`, {
    method: "DELETE",
  });

  return res.json();
};

export const updatePedido = async (id, data) => {
  const res = await fetch(`${BASE_URL}/pedidos/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return res.json();
};