import { useState } from "react";
import { useLocation } from "wouter";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import {Link} from "react-router-dom"

export default function LoginPage() {
  const [, setLocation] = useLocation();
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // ✅ Add login logic here
    try {
      const response = await fetch("http://127.0.0.1:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.error) {
        console.log(data.error); // ✅ redirect without reload
      } else {
        setLocation("/"); // ✅ redirect without reload
      }
    } catch (err) {
      console.error("Error verifying OTP:", err);
      setError("Server error, try again later.");
    } // redirect after login
  };

  return (
   <div className="bg-blue-100">
    <div className="flex items-center justify-center min-h-screen bg-[#f5f9ff]">
      {/* Login Card */}
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        {/* Logo */}
        <div className="flex items-center justify-center mb-6">
          <img
            src="src/assets/logo.png"
            alt="ArogyaCare Logo"
            className="h-10 mr-2"
          />
          <h1 className="text-2xl font-bold text-[#1e90ff]">
            Arogya<span className="text-green-600">Care</span>
          </h1>
        </div>

        {/* Heading */}
        <h2 className="text-xl font-semibold text-gray-800 text-center mb-6">
          Welcome Back 👋
        </h2>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block mb-1 font-medium text-gray-700"
            >
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="pl-10 pr-3 py-2 border rounded-md w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block mb-1 font-medium text-gray-700"
            >
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="pl-10 pr-10 py-2 border rounded-md w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
              <button
                type="button"
                className="absolute right-3 top-3 text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          {/* Forgot Password */}
          <div className="flex justify-end">
            <a href="#" className="text-sm text-blue-600 hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium"
          >
            Login
          </button>
        </form>

        {/* Sign Up */}
        <p className="text-sm text-gray-600 text-center mt-6">
          Don’t have an account?{" "}
          <Link to="/SignUp" className="text-blue-600 font-medium hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
   </div>
  );
}
