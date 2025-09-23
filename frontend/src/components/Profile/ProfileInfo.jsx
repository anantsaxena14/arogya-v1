// src/components/Profile/ProfileInfo.jsx
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

const ProfileInfo = () => {
  const [profile, setProfile] = useState({
    fullName: "Lavansh Gupta",
    dob: "21-11-2005",
    age: "19 years old",
    gender: "Male",
    contactNumber: "+91 9690533122",
    email: "lavanshgupta204@gmail.com",
    address: "126 Beharipur Civil Lines , Bareilly",
    emergencyContactName: "Ruchi gupta",
    emergencyContactPhone: "+91 (555) 987-6543",
    bloodGroup: "O+",
    language: "English",
    insuranceProvider: "Blue Cross Blue Shield",
    deviceStatus: "Connected",
    photoUrl: "/src/assets/profilepic.jpg", // 👈 default profile image
  });

  const [isEditing, setIsEditing] = useState(false);
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    console.log("Saved Data:", profile);
    setIsEditing(false);
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfile((prev) => ({ ...prev, photoUrl: imageUrl }));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-blue-50 p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl p-8 rounded-3xl shadow-2xl backdrop-blur-xl bg-white/70 border border-white/40"
      >
        {/* Profile Header */}
        <div className="flex flex-col items-center mb-8 relative">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative w-28 h-28 rounded-full overflow-hidden shadow-lg cursor-pointer"
            onClick={() => fileInputRef.current.click()}
          >
            <img
              src={profile.photoUrl}
              alt="Profile"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 bg-black/50 text-xs text-white px-2 py-1 w-full text-center opacity-0 hover:opacity-100 transition-all">
              Change Photo
            </div>
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              className="hidden"
              onChange={handlePhotoUpload}
            />
          </motion.div>

          <h2 className="mt-4 text-2xl font-bold text-gray-800">Profile Information</h2>
          <p className="text-gray-500 text-sm">Manage your personal & healthcare details</p>
        </div>

        {/* Form */}
        <motion.form layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(profile).map(([key, value]) =>
            key !== "photoUrl" ? (
              <motion.div
                key={key}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="relative"
              >
                <input
                  type="text"
                  name={key}
                  value={value}
                  onChange={handleChange}
                  disabled={!isEditing || key === "age"}
                  className={`peer w-full px-3 pt-5 pb-2 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all
                    ${
                      !isEditing || key === "age"
                        ? "bg-gray-100 cursor-not-allowed text-gray-500"
                        : "bg-white/60"
                    }`}
                />
                <label className="absolute left-3 top-2 text-xs text-gray-500 transition-all peer-focus:text-blue-500">
                  {key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
                </label>
              </motion.div>
            ) : null
          )}
        </motion.form>

        {/* Buttons */}
        <div className="mt-8 flex justify-end gap-4">
          {isEditing ? (
            <>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsEditing(false)}
                className="px-6 py-2 rounded-xl bg-gray-200 hover:bg-gray-300 transition"
              >
                Cancel
              </motion.button>
              <motion.button
                whileHover={{
                  scale: 1.05,
                  backgroundImage: "linear-gradient(to right, #3b82f6, #06b6d4)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSave}
                className="px-6 py-2 rounded-xl text-white bg-gradient-to-r from-blue-500 to-cyan-400 shadow-lg"
              >
                Save
              </motion.button>
            </>
          ) : (
            <motion.button
              whileHover={{
                scale: 1.05,
                backgroundImage: "linear-gradient(to right, #3b82f6, #06b6d4)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsEditing(true)}
              className="px-6 py-2 rounded-xl text-white bg-gradient-to-r from-blue-500 to-cyan-400 shadow-lg"
            >
              Edit Profile
            </motion.button>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default ProfileInfo;
