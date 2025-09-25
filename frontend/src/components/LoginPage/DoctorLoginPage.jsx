import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock } from "lucide-react";
import ToggleSwitch from "../ToogleSwitch";

export default function DoctorLoginPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:5000/doctor-login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("doctor_token", data.token);
        localStorage.setItem("doctor_id", data.doctor_id);

        alert("Doctor login successful! Redirecting...");
        navigate("/doctor-dashboard");
      } else {
        alert(data.error || "Invalid doctor credentials! Try again.");
      }
    } catch (error) {
      console.error("Error during doctor login:", error);
      alert("Server error. Please try again later.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-r from-green-50 to-blue-50">
      {/* Left Section - Illustration + Text */}
      <div className="hidden md:flex w-1/2 flex-col justify-center items-center p-10 bg-gradient-to-r from-teal-50 to-green-100">
        <h1 className="text-4xl font-bold text-green-700 mb-4">
          Welcome Back, <span className="text-blue-600">Doctor</span>
        </h1>
        <p className="text-lg text-gray-600 text-center max-w-md mb-6">
          Login to access your patients, manage appointments, and continue
          providing quality healthcare services with <b>ArogyaCare</b>.
        </p>

        <img
          src="/src/assets/loginimage.jpeg"
          alt="Doctor Login Illustration"
          className="mt-10 rounded-2xl w-3/4  shadow-lg"
        />
      </div>

      {/* Right Section - Login Form */}
      <div className="flex w-full md:w-1/2 justify-center mb-40 items-center p-6">
        <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8">
          {/* Portal Title */}
          <div className="flex flex-col items-center mb-6">
            <div className="bg-green-100 p-3 rounded-full">
              <Lock className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 mt-3">
              Doctor Login
            </h2>
            <p className="text-gray-500 text-sm">
              Access your secure healthcare portal
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block mb-1 text-gray-700 font-medium">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-10 pr-3 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block mb-1 text-gray-700 font-medium">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 text-gray-400" size={18} />
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pl-10 pr-3 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
                  required
                />
              </div>
              <div className="text-right mt-2">
                <Link
                  to="/doctor-forgot-password"
                  className="text-sm text-green-600 hover:underline"
                >
                  Forgot Password?
                </Link>
              </div>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                name="remember"
                checked={formData.remember}
                onChange={handleChange}
                className="h-4 w-4 text-green-600 border-gray-300 rounded"
              />
              <label className="ml-2 text-sm text-gray-600">
                Remember Me
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-600 text-white py-2.5 rounded-xl font-semibold hover:bg-green-700 transition shadow-sm disabled:opacity-50"
            >
              {loading ? "Logging in..." : "Login as Doctor"}
            </button>
          </form>

          {/* Footer */}
          <p className="mt-6 text-center text-gray-600 text-sm">
            New doctor?{" "}
            <Link
              to="/doctor-signup"
              className="text-green-600 font-medium hover:underline"
            >
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
