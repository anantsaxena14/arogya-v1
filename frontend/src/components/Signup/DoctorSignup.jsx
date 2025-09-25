import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ToggleSwitch from "../ToogleSwitch";

export default function DoctorSignupPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    licenseId: "",
    specialization: "",
    experience: "",
    certificate: null,
    confirm: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : type === "file" ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const dataToSend = new FormData();
      for (const key in formData) {
        dataToSend.append(key, formData[key]);
      }

      const response = await fetch("http://127.0.0.1:5000/doctor-signup", {
        method: "POST",
        body: dataToSend, // no Content-Type header when sending FormData
      });

      const data = await response.json();

      if (response.ok) {
        alert("Doctor signup successful! Check your email for verification.");
        navigate("/doctor-login");
      } else {
        alert(data.error || "Signup failed. Try again.");
      }
    } catch (error) {
      console.error("Error during doctor signup:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-r from-green-50 to-blue-50">
      {/* Left Section - Illustration + Text */}
      <div className="hidden md:flex w-1/2 flex-col justify-center items-center p-10 bg-gradient-to-r from-teal-50 to-green-100">
        <h1 className="text-4xl font-bold text-green-700 mb-4">
          Join <span className="text-blue-600">ArogyaCare</span> as a Doctor
        </h1>
        <p className="text-lg text-gray-600 text-center max-w-md mb-6">
          Register now to manage patients, appointments, and grow your practice
          on our trusted healthcare platform.
        </p>

        <img
          src="src/assets/loginimage.jpeg"
          alt="Doctor Signup Illustration"
          className="mt-10 rounded-2xl w-3/4 shadow-lg"
        />
      </div>

      {/* Right Section - Signup Form */}
      <div className="flex w-full md:w-1/2 justify-center items-center p-6">
        <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl p-8">
          {/* Header */}
          <div className="flex flex-col items-center mb-6">
            <div className="bg-green-100 p-3 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold mt-3">
              <span className="text-green-600">Doctor</span>{" "}
              <span className="text-blue-600">Signup</span>
            </h2>
            <p className="text-gray-500 text-sm text-center">
              Fill in your professional details to get started
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name *"
                value={formData.fullName}
                onChange={handleChange}
                className="border rounded-xl px-3 py-2 w-full focus:ring-2 focus:ring-green-400"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address *"
                value={formData.email}
                onChange={handleChange}
                className="border rounded-xl px-3 py-2 w-full focus:ring-2 focus:ring-green-400"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number *"
                value={formData.phone}
                onChange={handleChange}
                className="border rounded-xl px-3 py-2 w-full focus:ring-2 focus:ring-green-400"
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password *"
                value={formData.password}
                onChange={handleChange}
                className="border rounded-xl px-3 py-2 w-full focus:ring-2 focus:ring-green-400"
                required
              />
              <input
                type="text"
                name="licenseId"
                placeholder="Medical License ID *"
                value={formData.licenseId}
                onChange={handleChange}
                className="border rounded-xl px-3 py-2 w-full focus:ring-2 focus:ring-green-400 col-span-2"
                required
              />
              <input
                type="text"
                name="specialization"
                placeholder="Specialization *"
                value={formData.specialization}
                onChange={handleChange}
                className="border rounded-xl px-3 py-2 w-full focus:ring-2 focus:ring-green-400"
                required
              />
              <input
                type="number"
                name="experience"
                placeholder="Years of Experience *"
                value={formData.experience}
                onChange={handleChange}
                className="border rounded-xl px-3 py-2 w-full focus:ring-2 focus:ring-green-400"
                required
              />
                <h2>Medical Certificate / License</h2>             
               <input
                type="file"
                name="certificate"
                accept=".pdf,.jpg,.jpeg,.png"
                placeholder ="upload pdf of jpg of certificate"
                onChange={handleChange}
                className="border rounded-xl px-3 py-2 w-full focus:ring-2 focus:ring-green-400 col-span-2"
                required
              />
            </div>

            {/* Confirmation Checkbox */}
            <div className="flex items-start space-x-2 p-3 bg-gray-50 rounded-lg border">
              <input
                type="checkbox"
                name="confirm"
                checked={formData.confirm}
                onChange={handleChange}
                required
              />
              <label className="text-sm text-gray-700">
                I confirm that all details are valid and consent to
                <span className="text-green-600"> ArogyaCare's</span>{" "}
                verification process. I agree to the{" "}
                <span className="text-blue-600">Terms of Service</span> and{" "}
                <span className="text-blue-600">Privacy Policy</span>.
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2.5 rounded-xl font-semibold hover:bg-green-700 transition shadow-sm"
            >
              Register as Doctor
            </button>
          </form>

          {/* Footer */}
          <p className="mt-4 text-center text-gray-600">
            Already registered?{" "}
            <Link
              to="/doctor-login"
              className="text-green-600 font-medium hover:underline"
            >
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
