import { Navigate } from "react-router-dom"

function ProtectedRoute({
  children,
  roles
}) {

  const rol = localStorage.getItem("rol")

  if (!rol) {
    return <Navigate to="/" />
  }

  if (
    roles &&
    !roles.includes(rol)
  ) {
    return <Navigate to="/" />
  }

  return children

}

export default ProtectedRoute