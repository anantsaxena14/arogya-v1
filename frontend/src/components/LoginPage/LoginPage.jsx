import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock } from "lucide-react";
import ToggleSwitch from "../ToogleSwitch";

export default function LoginPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user_id", data.user_id);
        alert("Login successful! Redirecting...");
        navigate("/");
      } else {
        alert(data.error || "Invalid credentials! Try again.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-r from-blue-50 to-teal-50">
      {/* Left Section - Illustration + Text */}
      <div className="hidden md:flex w-1/2 flex-col justify-center bg-gradient-to-r from-green-50 to-blue-50  items-center p-10">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">
          Welcome to <span className="text-green-600">ArogyaCare</span>
        </h1>
        <p className="text-lg text-gray-600 text-center max-w-md mb-6">
          Join our trusted network of healthcare professionals and provide 
          quality care to patients across the platform.
        </p>

        {/* Features
        <div className="flex space-x-6 text-blue-600 font-medium">
          <span>🔒 Secure Platform</span>
          <span>👨‍⚕️ Verified Doctors</span>
        </div> */}

        {/* Illustration image area */}
        <img
          src="/src/assets/loginimage.jpeg"
          alt="Doctors Illustration"
          className="mt-10 rounded-2xl  w-3/4"
        />
      </div>

      {/* Right Section - Login Form */}
      <div className="flex w-full md:w-1/2 justify-center mb-15 items-center p-6">
        <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8">
          {/* Portal Title */}
          <div className="flex flex-col items-center mb-6">
            <div className="bg-blue-100 p-3 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 10h.01M12 14l9-5-9-5-9 5 9 5zm0 0v7m0-7l-9-5 9-5 9 5-9 5z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 mt-3">
              User Portal
            </h2>
            <p className="text-gray-500 text-sm">
              Access your professional healthcare dashboard
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block mb-1 text-gray-700 font-medium">
                Email or Phone
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email or phone"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-10 pr-3 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
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
                  className="w-full pl-10 pr-3 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
              <div className="text-right mt-2">
                <Link
                  to="/forgot-password"
                  className="text-sm text-blue-600 hover:underline"
                >
                  Forgot Password?
                </Link>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-2.5 rounded-xl font-semibold hover:bg-blue-700 transition shadow-sm disabled:opacity-50"
            >
              {loading ? "Logging in..." : "Secure Login"}
            </button>
          </form>

          {/* OR Divider */}
          <div className="flex items-center my-6">
            <hr className="flex-grow border-gray-300" />
            <span className="px-2 text-gray-400 text-sm">OR CONTINUE WITH</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Social Buttons */}
          <div className="flex justify-center space-x-4">
            <button className="p-3 border rounded-full hover:bg-gray-100">
              🔴
            </button>
            <button className="p-3 border rounded-full hover:bg-gray-100">
              📘
            </button>
            <button className="p-3 border rounded-full hover:bg-gray-100">
              🍎
            </button>
          </div>

          {/* Footer */}
          <p className="mt-6 text-center text-gray-600 text-sm">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-blue-600 font-medium hover:underline">
              Sign Up
            </Link>
          </p>
          <p className="mt-2 text-center text-gray-400 text-xs">
            Your data is protected with end-to-end encryption
          </p>
        </div>
      </div>
    </div>
  );
}
