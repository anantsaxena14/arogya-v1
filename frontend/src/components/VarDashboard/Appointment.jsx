// src/components/Appointments.jsx
import React, { useState } from "react";
import { Calendar, X } from "lucide-react"; // icons
import { motion } from "framer-motion"; // for smooth animations (optional)

export default function Appointments() {
  const [activeTab, setActiveTab] = useState("upcoming");

  // Mock data (later can be replaced with backend API response)
  const upcomingAppointments = [
    {
      id: 1,
      doctor: "Dr. Sarah Johnson",
      date: "Dec 15, 2024",
      time: "2:00 PM",
    },
    {
      id: 2,
      doctor: "Dr. Michael Chen",
      date: "Dec 20, 2024",
      time: "10:30 AM",
    },
  ];

  const pastAppointments = [
    {
      id: 1,
      doctor: "Dr. Sarah Johnson",
      date: "Nov 15, 2024",
      status: "Completed",
    },
    {
      id: 2,
      doctor: "Dr. Robert Wilson",
      date: "Oct 22, 2024",
      status: "Completed",
    },
  ];

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md w-full">
      <h2 className="text-2xl font-bold mb-4">Appointments</h2>

      {/* Tabs */}
      <div className="flex justify-center mb-6">
        <div className="flex bg-gray-100 rounded-full p-1">
          <button
            className={`px-6 py-2 rounded-full text-sm font-medium transition ${
              activeTab === "upcoming"
                ? "bg-white shadow text-black"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab("upcoming")}
          >
            Upcoming
          </button>
          <button
            className={`px-6 py-2 rounded-full text-sm font-medium transition ${
              activeTab === "past"
                ? "bg-white shadow text-black"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab("past")}
          >
            Past
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        {activeTab === "upcoming" ? (
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b text-left">
                <th className="py-2 px-3">Doctor</th>
                <th className="py-2 px-3">Date & Time</th>
                <th className="py-2 px-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {upcomingAppointments.map((appt) => (
                <tr
                  key={appt.id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="py-3 px-3">{appt.doctor}</td>
                  <td className="py-3 px-3">
                    {appt.date} - {appt.time}
                  </td>
                  <td className="py-3 px-3 flex gap-3">
                    <button className="flex items-center gap-1 border border-teal-500 text-teal-500 px-3 py-1 rounded-lg hover:bg-teal-50 transition">
                      <Calendar size={16} /> Reschedule
                    </button>
                    <button className="flex items-center gap-1 border border-red-500 text-red-500 px-3 py-1 rounded-lg hover:bg-red-50 transition">
                      <X size={16} /> Cancel
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b text-left">
                <th className="py-2 px-3">Doctor</th>
                <th className="py-2 px-3">Date</th>
                <th className="py-2 px-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {pastAppointments.map((appt) => (
                <tr
                  key={appt.id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="py-3 px-3">{appt.doctor}</td>
                  <td className="py-3 px-3">{appt.date}</td>
                  <td className="py-3 px-3">
                    <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">
                      {appt.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
