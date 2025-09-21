import React, { useState } from "react";
import { Search, Filter, MapPin, Star, Calendar, Phone, User } from "lucide-react";

const doctors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialization: "Cardiologist",
    rating: 4.8,
    reviews: 124,
    experience: "12 years",
    location: "Heart Care Clinic, Mumbai Central",
    fee: 800,
    qualifications: ["MBBS", "MD Cardiology", "FACC"],
    tag: "Previously Consulted",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    name: "Dr. Rajesh Patel",
    specialization: "Orthopedic Surgeon",
    rating: 4.6,
    reviews: 89,
    experience: "15 years",
    location: "Bone & Joint Center, Andheri West",
    fee: 1200,
    qualifications: ["MBBS", "MS Orthopedics"],
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 3,
    name: "Dr. Priya Sharma",
    specialization: "Dermatologist",
    rating: 4.9,
    reviews: 156,
    experience: "8 years",
    location: "Skin Care Clinic, Bandra East",
    fee: 600,
    qualifications: ["MBBS", "MD Dermatology"],
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

export default function DoctorListing() {
  const [search, setSearch] = useState("");

  const filteredDoctors = doctors.filter(
    (doc) =>
      doc.name.toLowerCase().includes(search.toLowerCase()) ||
      doc.specialization.toLowerCase().includes(search.toLowerCase()) ||
      doc.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      {/* Header */}
      <h1 className="text-3xl font-bold mb-2">Find Doctors</h1>
      <p className="text-gray-600 text-[20px] mb-6">
        Search and book appointments with qualified healthcare professionals
      </p>

      {/* Search + Filters */}
      <div className="flex items-center gap-3 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search by doctor name, specialization, location..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border-white shadow bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button className="flex items-center bg-white border-white shadow gap-2 border px-4 py-2 rounded-lg hover:bg-gray-100">
          <Filter size={18} /> Filters
        </button>
        <button className="flex items-center gap-2   bg-white border-white shadow  px-4 py-2 rounded-lg hover:bg-gray-100">
          <MapPin size={18} /> View on Map
        </button>
      </div>

      {/* Result Count */}
      <p className="text-gray-500 mb-4">
        Found {filteredDoctors.length} doctor
        {filteredDoctors.length > 1 ? "s" : ""}
      </p>

      {/* Doctor Cards */}
      <div className="space-y-4">
        {filteredDoctors.map((doc) => (
          <div
            key={doc.id}
            className="bg-white p-5 border-white bg-white shadow rounded-lg  flex gap-4 items-start"
          >
            {/* Image */}
            <img
              src={doc.image}
              alt={doc.name}
              className="w-20 h-20 rounded-full object-cover border"
            />

            {/* Details */}
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-semibold">{doc.name}</h2>
                {doc.tag && (
                  <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded">
                    {doc.tag}
                  </span>
                )}
              </div>
              <p className="text-blue-600 font-medium">{doc.specialization}</p>

              <div className="flex items-center gap-3 text-sm text-gray-600 mt-1">
                <span className="flex items-center gap-1">
                  <Star size={14} className="text-yellow-500" />
                  {doc.rating} ({doc.reviews})
                </span>
                <span>• {doc.experience}</span>
              </div>

              <p className="text-sm text-gray-500 mt-1">{doc.location}</p>
              <p className="text-sm font-medium text-green-700 mt-1">
                ₹{doc.fee} consultation fee
              </p>

              <div className="flex flex-wrap gap-2 mt-2 text-xs text-gray-500">
                {doc.qualifications.map((q, idx) => (
                  <span key={idx} className="border px-2 py-1 rounded">
                    {q}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-2">
              <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                <Calendar size={16} /> Book Appointment
              </button>
              <button className="flex items-center gap-2 border px-4 py-2 rounded hover:bg-gray-100">
                <Phone size={16} /> Request Contact
              </button>
              <button className="flex items-center gap-2 border px-4 py-2 rounded hover:bg-gray-100">
                <User size={16} /> View Profile
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
