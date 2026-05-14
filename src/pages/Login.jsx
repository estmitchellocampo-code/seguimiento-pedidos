function Login() {
  return (
    <div className="container mt-5">
      <div className="card p-4">
        <h2>Iniciar Sesión</h2>

        <input
          className="form-control mb-3"
          placeholder="Correo"
        />

        <input
          className="form-control mb-3"
          type="password"
          placeholder="Contraseña"
        />

        <button className="btn btn-primary">
          Ingresar
        </button>
      </div>
    </div>
  )
}

export default Login