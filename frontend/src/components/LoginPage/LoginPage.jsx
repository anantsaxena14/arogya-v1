import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock } from "lucide-react";

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
        // ✅ Save token + user data in localStorage
        localStorage.setItem("token", data.token);
        localStorage.setItem("user_id", data.user_id);

        alert("Login successful! Redirecting...");
        navigate("/"); // redirect to dashboard
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
    <div className="min-h-screen flex items-center w-full h-screen bg-[url('src/assets/bgimage.jpeg')] bg-cover justify-center bg-blue-50">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        {/* Logo / App Name */}
        <h1 className="text-3xl font-bold text-center mb-2">
          <span className="text-green-600">Arogya</span>
          <span className="text-blue-600">Care</span>
        </h1>
        <p className="text-center text-gray-500 mb-6">
          Welcome back! Please login to continue
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-1 text-gray-700 font-medium">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full pl-10 pr-3 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-400"
                required
              />
            </div>
          </div>
          <div>
            <label className="block mb-1 text-gray-700 font-medium">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                className="w-full pl-10 pr-3 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-400"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-teal-500 text-white py-2.5 rounded-xl font-semibold hover:bg-teal-600 transition shadow-sm disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Footer */}
        <p className="mt-6 text-center text-gray-600 text-sm">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-teal-600 font-medium hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
