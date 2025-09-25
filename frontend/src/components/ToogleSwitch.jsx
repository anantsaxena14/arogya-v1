// ToggleSwitch.jsx
import { useNavigate, useLocation } from "react-router-dom";

export default function ToggleSwitch() {
  const navigate = useNavigate();
  const location = useLocation();

  const isDoctor = location.pathname.includes("doctor");

  return (
    <div className="flex justify-end p-4 space-x-4">
      <button
        onClick={() => navigate("/login")}
        className={`px-4 py-2 rounded-full font-medium transition ${
          !isDoctor
            ? "bg-blue-600 text-white shadow-md"
            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
        }`}
      >
        Patient
      </button>
      <button
        onClick={() => navigate("/doctor-login")}
        className={`px-4 py-2 rounded-full font-medium transition ${
          isDoctor
            ? "bg-green-600 text-white shadow-md"
            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
        }`}
      >
        Doctor
      </button>
    </div>
  );
}
