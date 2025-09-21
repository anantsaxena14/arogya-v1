// src/components/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const isAuthenticated = localStorage.getItem("token"); // your login flag

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
