import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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

      if (response.ok) {
        alert("Signup successful! Redirecting to login...");
        navigate("/verify");
      } else {
        alert("Signup failed! Try again.");
      }
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="flex bg-white shadow-2xl rounded-2xl overflow-hidden w-full max-w-6xl">
        
        {/* Left Side Illustration */}
        <div className="w-1/2 bg-gradient-to-br from-blue-200 to-blue-500 flex items-center justify-center p-6">
          <img
            src="src/assets/Healthcare_login_illustration_f4438a3d.png" // replace with your doctor image path
            alt="Doctor Illustration"
            className="w-180 h-auto"
          />
        </div>

        {/* Right Side Form */}
        <div className="w-1/2 p-10 overflow-y-auto max-h-[90vh]">
          <h1 className="text-3xl font-bold text-center mb-2">
          <span className="text-green-600">Arogya</span>
          <span className="text-blue-600">Care</span>
        </h1>
          <p className="text-center text-gray-500 mb-8">
            Join our healthcare community and manage your health journey
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Info Section */}
            <div>
              <h3 className="font-semibold text-lg text-teal-600 mb-3">
                Personal Information
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name *"
                  value={formData.name}
                  onChange={handleChange}
                  className="border rounded-lg px-3 py-2 w-full"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number *"
                  value={formData.phone}
                  onChange={handleChange}
                  className="border rounded-lg px-3 py-2 w-full"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                  value={formData.email}
                  onChange={handleChange}
                  className="border rounded-lg px-3 py-2 w-full"
                  required
                />
                <input
                  type="text"
                  name="address"
                  placeholder="Address *"
                  value={formData.address}
                  onChange={handleChange}
                  className="border rounded-lg px-3 py-2 col-span-2"
                  required
                />
                <input
                  type="number"
                  name="age"
                  placeholder="Age"
                  value={formData.age}
                  onChange={handleChange}
                  className="border rounded-lg px-3 py-2"
                />
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="border rounded-lg px-3 py-2"
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
                  className="border rounded-lg px-3 py-2 col-span-2"
                  required
                />
              </div>
            </div>

            {/* Checkbox for Medical Details */}
            <div className="flex items-center space-x-2 border p-3 rounded-lg bg-green-50">
              <input
                type="checkbox"
                name="includeMedical"
                checked={formData.includeMedical}
                onChange={handleChange}
              />
              <label className="text-sm text-gray-700">
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
                    className="border rounded-lg px-3 py-2"
                  />
                  <input
                    type="text"
                    name="height"
                    placeholder="Height (cm)"
                    value={formData.height}
                    onChange={handleChange}
                    className="border rounded-lg px-3 py-2"
                  />
                  <select
                    name="bloodGroup"
                    value={formData.bloodGroup}
                    onChange={handleChange}
                    className="border rounded-lg px-3 py-2"
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
                    placeholder="Vision Details (e.g., -2.5 both eyes)"
                    value={formData.vision}
                    onChange={handleChange}
                    className="border rounded-lg px-3 py-2"
                  />
                  <textarea
                    name="allergies"
                    placeholder="Allergies / Medical Conditions"
                    value={formData.allergies}
                    onChange={handleChange}
                    className="border rounded-lg px-3 py-2 col-span-2"
                  />
                  <input
                    type="text"
                    name="emergencyContact"
                    placeholder="Emergency Contact Number"
                    value={formData.emergencyContact}
                    onChange={handleChange}
                    className="border rounded-lg px-3 py-2"
                  />
                  <input
                    type="text"
                    name="doctorContact"
                    placeholder="Primary Doctor Contact"
                    value={formData.doctorContact}
                    onChange={handleChange}
                    className="border rounded-lg px-3 py-2"
                  />
                </div>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-teal-500 text-white py-3 rounded-lg hover:bg-teal-600 transition"
            >
              Create Account
            </button>
          </form>

          {/* Footer */}
          <p className="mt-4 text-center text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-teal-500 hover:underline">
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
