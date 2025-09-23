import React from "react";
import { Link, Outlet } from "react-router-dom"; // ✅ Import Outlet
import {
  Stethoscope,
  TestTube,
  FileText,
  Clock,
  FileBarChart,
  MessageSquare,
  HeartPulse,
  Users,
} from "lucide-react";

const cards = [
  {
    title: "Doctor Created Checks",
    icon: <Stethoscope className="w-8 h-8 text-cyan-600" />,
    color: "bg-cyan-50",
    link: "doctor-checks",
  },
  {
    title: "Recent Tests",
    icon: <TestTube className="w-8 h-8 text-green-600" />,
    color: "bg-green-50",
    link: "/RecentTests",
  },
  {
    title: "Add Prescription",
    icon: <FileText className="w-8 h-8 text-purple-600" />,
    color: "bg-purple-50",
    link: "add-prescription",
  },
  {
    title: "Need to Add",
    icon: <Clock className="w-8 h-8 text-orange-600" />,
    color: "bg-orange-50",
    link: "/ReportsPage",
  },
  {
    title: "View Reports",
    icon: <FileBarChart className="w-8 h-8 text-blue-600" />,
    color: "bg-blue-50",
    link: "/labreport", // ✅ matches route
  },
  {
    title: "Consult Your Report with Doctors",
    icon: <MessageSquare className="w-8 h-8 text-pink-600" />,
    color: "bg-pink-50",
    link: "consult-report",
  },
  {
    title: "Popular Categories (Vital Organs)",
    icon: <HeartPulse className="w-8 h-8 text-red-600" />,
    color: "bg-red-50",
    link: "/VitalOrganDashboard",
  },
  {
    title: "Women Care",
    icon: <Users className="w-8 h-8 text-violet-600" />,
    color: "bg-violet-50",
    link: "/WomenCare",
  },
];

const LabTestDashboard = () => {
  return (
    <div className="p-6 bg-blue-50">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-center mb-2">
          <span className="text-green-600">Arogya</span>
          <span className="text-blue-600">Care</span>
        </h1>
        <p className="text-gray-700 text-2xl">Your Complete Healthcare Solution</p>
      </div>

      {/* Section Title */}
      <h2 className="text-3xl font-semibold text-gray-700 mb-6">Lab Tests</h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <Link
            key={index}
            to={card.link} // ✅ relative links work with nested routes
            className={`${card.color} p-6 rounded-2xl shadow hover:shadow-2xl transition cursor-pointer block`}
          >
            <div className="flex items-center justify-center mb-4">
              {card.icon}
            </div>
            <h3 className="text-base font-medium text-gray-700 text-center">
              {card.title}
            </h3>
            <p className="text-sm text-indigo-500 mt-2 text-center">
              Explore →
            </p>
          </Link>
        ))}
      </div>

      
    </div>
  );
};

export default LabTestDashboard;
