import React, { useState } from "react";
import {
  Heart,
  Brain,
  Droplet,
  Activity,
  Eye,
  Zap,
  Calendar,
} from "lucide-react";

// Mock data (replace with API later)
const mockVitals = [
  {
    id: 1,
    name: "Heart",
    description: "Cardiovascular health monitoring",
    icon: <Heart className="text-pink-500" size={24} />,
    status: "Good",
    statusColor: "text-green-600",
    bg: "bg-pink-50",
    lastCheckup: "2024-01-18",
    metrics: [
      { label: "Blood Pressure", value: "120/80 mmHg" },
      { label: "Heart Rate", value: "72 bpm" },
    ],
  },
  {
    id: 2,
    name: "Brain",
    description: "Neurological health assessment",
    icon: <Brain className="text-purple-500" size={24} />,
    status: "Excellent",
    statusColor: "text-emerald-600",
    bg: "bg-purple-50",
    lastCheckup: "2024-01-10",
    metrics: [
      { label: "Memory Score", value: "95 %" },
      { label: "Reaction Time", value: "0.3 sec" },
    ],
  },
  {
    id: 3,
    name: "Liver",
    description: "Liver function monitoring",
    icon: <Zap className="text-yellow-500" size={24} />,
    status: "Fair",
    statusColor: "text-red-500",
    bg: "bg-yellow-50",
    lastCheckup: "2024-01-12",
    metrics: [
      { label: "ALT", value: "52 U/L", abnormal: true },
      { label: "AST", value: "38 U/L" },
    ],
  },
  {
    id: 4,
    name: "Kidneys",
    description: "Kidney function assessment",
    icon: <Droplet className="text-blue-500" size={24} />,
    status: "Good",
    statusColor: "text-green-600",
    bg: "bg-blue-50",
    lastCheckup: "2024-01-15",
    metrics: [
      { label: "Creatinine", value: "1.0 mg/dL" },
      { label: "BUN", value: "15 mg/dL" },
    ],
  },
  {
    id: 5,
    name: "Thyroid",
    description: "Thyroid hormone regulation",
    icon: <Activity className="text-green-500" size={24} />,
    status: "Good",
    statusColor: "text-green-600",
    bg: "bg-green-50",
    lastCheckup: "2024-01-15",
    metrics: [
      { label: "TSH", value: "2.1 mIU/L" },
      { label: "T3", value: "1.2 ng/mL" },
    ],
  },
  {
    id: 6,
    name: "Eyes",
    description: "Vision and eye health",
    icon: <Eye className="text-indigo-500" size={24} />,
    status: "Good",
    statusColor: "text-green-600",
    bg: "bg-indigo-50",
    lastCheckup: "2024-01-08",
    metrics: [
      { label: "Vision Acuity", value: "20/20", highlight: true },
      { label: "Eye Pressure", value: "14 mmHg" },
    ],
  },
];

export default function VitalOrgansDashboard() {
  const [vitals] = useState(mockVitals);

  return (
    <div className="p-6 min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Header */}
      <h2 className="text-2xl font-semibold mb-2">
        <span className = "text-blue-500">Vital</span>
        <span className = "text-green-500">  Organs</span></h2>
      <p className="text-gray-800 mb-6">
        Monitor your organ health and vitals
      </p>

      {/* Grid of Vitals */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {vitals.map((vital) => (
          <div
            key={vital.id}
            className={`p-5 rounded-2xl shadow-md hover:shadow-lg transition ${vital.bg}`}
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-white shadow">
                  {vital.icon}
                </div>
                <div>
                  <h3 className="text-lg font-medium">{vital.name}</h3>
                  <p className="text-sm text-gray-500">{vital.description}</p>
                </div>
              </div>
              <span
                className={`text-sm font-medium ${vital.statusColor}`}
              >
                {vital.status}
              </span>
            </div>

            {/* Last Checkup */}
            <div className="flex items-center text-gray-500 text-sm mb-3">
              <Calendar size={14} className="mr-2" />
              Last checkup: {vital.lastCheckup}
            </div>

            {/* Metrics */}
            <div className="space-y-2 mb-4">
              {vital.metrics.map((m, idx) => (
                <div
                  key={idx}
                  className={`flex justify-between text-sm ${
                    m.abnormal ? "text-red-600" : ""
                  } ${m.highlight ? "text-green-600 font-medium" : ""}`}
                >
                  <span>{m.label}</span>
                  <span>{m.value}</span>
                </div>
              ))}
            </div>

            {/* Actions */}
            <button className="text-sm font-medium text-purple-600 hover:underline">
              View Details →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
