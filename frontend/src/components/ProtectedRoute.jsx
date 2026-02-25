import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const token = localStorage.getItem("token");

  // Ako nema tokena → preusmjeri na login
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // Ako ima token → renderuj child rute (Home, itd.)
  return <Outlet />;
};

export default ProtectedRoute;