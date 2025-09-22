// src/components/RecentTests/RecentTests.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ClipboardCheck,
  Heart,
  Activity,
  Brain,
  FlaskConical,
  HeartPulse,
} from "lucide-react"; // icons

const testData = [
  {
    id: 1,
    name: "Complete Blood Count (CBC)",
    date: "2024-01-20",
    time: "10:30 AM",
    lab: "PathLab Diagnostics",
    result: "Normal",
    status: "Completed",
    icon: <ClipboardCheck className="w-6 h-6 text-green-500" />,
  },
  {
    id: 2,
    name: "Lipid Profile",
    date: "2024-01-18",
    time: "09:15 AM",
    lab: "MedTest Labs",
    result: "Abnormal",
    abnormalValues: 2,
    status: "Completed",
    icon: <Heart className="w-6 h-6 text-red-500" />,
  },
  {
    id: 3,
    name: "Thyroid Function Test",
    date: "2024-01-15",
    time: "11:45 AM",
    lab: "HealthCheck Diagnostics",
    result: "Processing",
    status: "In Progress",
    icon: <Activity className="w-6 h-6 text-blue-500" />,
  },
  {
    id: 4,
    name: "Brain MRI Scan",
    date: "2024-01-12",
    time: "02:00 PM",
    lab: "Advanced Imaging Center",
    result: "Scheduled",
    status: "Pending",
    icon: <Brain className="w-6 h-6 text-purple-500" />,
  },
  {
    id: 5,
    name: "Vitamin D Test",
    date: "2024-01-10",
    time: "08:30 AM",
    lab: "QuickTest Labs",
    result: "Normal",
    status: "Completed",
    icon: <FlaskConical className="w-6 h-6 text-orange-500" />,
  },
  {
    id: 6,
    name: "ECG (Electrocardiogram)",
    date: "2024-01-08",
    time: "03:20 PM",
    lab: "CardioCheck Center",
    result: "Normal",
    status: "Completed",
    icon: <HeartPulse className="w-6 h-6 text-green-500" />,
  },
];

const statusColors = {
  Completed: "bg-green-100 text-green-600 border-green-300",
  Pending: "bg-yellow-100 text-yellow-600 border-yellow-300",
  "In Progress": "bg-blue-100 text-blue-600 border-blue-300",
};

const RecentTests = () => {
  const [tests] = useState(testData);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-indigo-50 p-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          <span className = "text-blue-600"> Recent </span>
          <span className = "text-green-500"> Tests</span> 
        </h2>

        <div className="relative border-l-2 border-gray-200">
          {tests.map((test, index) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="mb-8 ml-6"
            >
              {/* Timeline Icon */}
              <span className="absolute -left-5 flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-md">
                {test.icon}
              </span>

              {/* Test Card */}
              <div className="p-6 bg-white rounded-2xl shadow-lg border hover:shadow-xl transition">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {test.name}
                  </h3>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium border ${statusColors[test.status]}`}
                  >
                    {test.status}
                  </span>
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  {test.date} · {test.time} · {test.lab}
                </p>

                <div className="mt-4">
                  <p className="text-sm">
                    Result:{" "}
                    <span
                      className={`font-semibold ${
                        test.result === "Normal"
                          ? "text-green-600"
                          : test.result === "Abnormal"
                          ? "text-red-600"
                          : "text-blue-600"
                      }`}
                    >
                      {test.result}
                    </span>
                    {test.abnormalValues && (
                      <span className="ml-2 text-xs text-red-500">
                        {test.abnormalValues} abnormal values
                      </span>
                    )}
                  </p>
                  {test.result === "Processing" && (
                    <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-500 h-2 rounded-full w-2/3"></div>
                    </div>
                  )}
                </div>

                {/* Buttons */}
                <div className="mt-4 flex gap-3">
                  <button className="px-4 py-2 text-sm rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition">
                    View Report
                  </button>
                  <button className="px-4 py-2 text-sm rounded-lg bg-gray-200 hover:bg-gray-300 transition">
                    Download
                  </button>
                  <button className="px-4 py-2 text-sm rounded-lg bg-blue-100 text-blue-600 hover:bg-blue-200 transition">
                    Share
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentTests;
