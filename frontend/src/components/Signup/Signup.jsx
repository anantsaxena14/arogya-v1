import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ToggleSwitch from "../ToogleSwitch";

export default function SignupPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    age: "",
    gender: "",
    password: "",
    weight: "",
    height: "",
    bloodGroup: "",
    allergies: "",
    vision: "",
    emergencyContact: "",
    doctorContact: "",
    includeMedical: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://127.0.0.1:5000/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.message) {
        alert(response.message);
        alert("Check your email for verification link");
        navigate("/login");
      } else {
        alert(response.error);
      }
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-r from-blue-50 to-teal-50">
      {/* Left Section - Illustration + Text */}
      <div className="hidden md:flex w-1/2 flex-col justify-center mb-20 bg-gradient-to-r from-green-50 to-blue-50 items-center p-10">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">
          Join <span className="text-green-600">ArogyaCare</span>
        </h1>
        <p className="text-lg text-gray-600 text-center max-w-md mb-6">
          Create your account and manage your health journey with our trusted
          healthcare community.
        </p>

        {/* Illustration */}
        <img
          src="/src/assets/loginimage.jpeg"
          alt="Healthcare Illustration"
          className="mt-10  rounded-2xl w-3/4"
        />
      </div>

      {/* Right Section - Signup Form */}
     <div className="flex w-full md:w-1/2 justify-center mb-60 items-center p-6">
  <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl p-8">
    {/* Header */}
    <div className="flex flex-col items-center mb-6">
      <div className="bg-teal-100 p-3 rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-teal-600"
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
      <h2 className="text-2xl font-semibold  mt-3">
        <span className = "text-blue-600">Create</span><span className="text-green-600"> Account</span> 
      </h2>
      <p className="text-gray-500 text-sm text-center">
        Fill in your details to get started
      </p>
    </div>

    {/* ... your form remains unchanged ... */}
 



          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Info Section */}
            <div>
              <h3 className="font-semibold text-lg text-green-600 mb-3">
                Personal Information
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name *"
                  value={formData.name}
                  onChange={handleChange}
                  className="border rounded-xl px-3 py-2 w-full focus:ring-2 focus:ring-blue-400"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number *"
                  value={formData.phone}
                  onChange={handleChange}
                  className="border rounded-xl px-3 py-2 w-full focus:ring-2 focus:ring-blue-400"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                  value={formData.email}
                  onChange={handleChange}
                  className="border rounded-xl px-3 py-2 w-full focus:ring-2 focus:ring-blue-400"
                  required
                />
                <input
                  type="text"
                  name="address"
                  placeholder="Address *"
                  value={formData.address}
                  onChange={handleChange}
                  className="border rounded-xl px-3 py-2 col-span-2 focus:ring-2 focus:ring-blue-400"
                  required
                />
                <input
                  type="number"
                  name="age"
                  placeholder="Age"
                  value={formData.age}
                  onChange={handleChange}
                  className="border rounded-xl px-3 py-2 focus:ring-2 focus:ring-blue-400"
                />
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="border rounded-xl px-3 py-2 focus:ring-2 focus:ring-blue-400"
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
                <input
                  type="password"
                  name="password"
                  placeholder="Password *"
                  value={formData.password}
                  onChange={handleChange}
                  className="border rounded-xl px-3 py-2 col-span-2 focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
            </div>

            {/* Checkbox for Medical Details */}
            <div className="flex items-center space-x-2  p-3 rounded-lg ">
              <input
                type="checkbox"
                name="includeMedical"
                checked={formData.includeMedical}
                onChange={handleChange}
              />
              <label className="text-sm  text-blue-700">
                Include Medical Details (Optional but Recommended)
              </label>
            </div>

            {/* Medical Info Section */}
            {formData.includeMedical && (
              <div>
                <h3 className="font-semibold text-lg text-teal-600 mb-3">
                  Medical Information
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="weight"
                    placeholder="Weight (kg)"
                    value={formData.weight}
                    onChange={handleChange}
                    className="border rounded-xl px-3 py-2 focus:ring-2 focus:ring-blue-400"
                  />
                  <input
                    type="text"
                    name="height"
                    placeholder="Height (cm)"
                    value={formData.height}
                    onChange={handleChange}
                    className="border rounded-xl px-3 py-2 focus:ring-2 focus:ring-blue-400"
                  />
                  <select
                    name="bloodGroup"
                    value={formData.bloodGroup}
                    onChange={handleChange}
                    className="border rounded-xl px-3 py-2 focus:ring-2 focus:ring-blue-400"
                  >
                    <option value="">Blood Group</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                  </select>
                  <input
                    type="text"
                    name="vision"
                    placeholder="Vision Details"
                    value={formData.vision}
                    onChange={handleChange}
                    className="border rounded-xl px-3 py-2 focus:ring-2 focus:ring-blue-400"
                  />
                  <textarea
                    name="allergies"
                    placeholder="Allergies / Medical Conditions"
                    value={formData.allergies}
                    onChange={handleChange}
                    className="border rounded-xl px-3 py-2 col-span-2 focus:ring-2 focus:ring-blue-400"
                  />
                  <input
                    type="text"
                    name="emergencyContact"
                    placeholder="Emergency Contact Number"
                    value={formData.emergencyContact}
                    onChange={handleChange}
                    className="border rounded-xl px-3 py-2 focus:ring-2 focus:ring-blue-400"
                  />
                  <input
                    type="text"
                    name="doctorContact"
                    placeholder="Primary Doctor Contact"
                    value={formData.doctorContact}
                    onChange={handleChange}
                    className="border rounded-xl px-3 py-2 focus:ring-2 focus:ring-blue-400"
                  />
                </div>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2.5 rounded-xl font-semibold hover:bg-blue-700 transition shadow-sm"
            >
              Create Account
            </button>
          </form>

          {/* Footer */}
          <p className="mt-4 text-center text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 font-medium hover:underline">
              Back to Login
            </Link>
          </p>
          <p className="mt-4 text-xs text-gray-400 text-center">
            By creating an account, you agree to our{" "}
            <span className="text-blue-500">Terms of Service</span> and{" "}
            <span className="text-blue-500">Privacy Policy</span>.
          </p>
        </div>
      </div>
    </div>
  );
}
