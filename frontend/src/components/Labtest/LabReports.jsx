import React, { useState } from "react";
import { Search, Filter, FileText, Calendar, CheckCircle, AlertTriangle, Eye, Download, Share2 } from "lucide-react";

// Single Report Card Component
const ReportCard = ({ report }) => {
  return (
    <div className="bg-white p-5 rounded-2xl shadow hover:shadow-lg transition w-full">
      {/* Title + Icon */}
      <div className="flex items-center gap-3 mb-3">
        <FileText className="w-6 h-6 text-purple-600" />
        <h3 className="text-lg font-semibold text-gray-800">{report.title}</h3>
      </div>

      {/* Lab + Date */}
      <p className="text-sm text-gray-500">{report.lab}</p>
      <div className="flex items-center text-sm text-gray-400 mt-1">
        <Calendar className="w-4 h-4 mr-1" /> {report.date}
      </div>

      {/* Category */}
      <span className="inline-block mt-2 px-3 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-full">
        {report.category}
      </span>

      {/* Status */}
      <div className="mt-3 flex items-center">
        {report.status === "Normal" ? (
          <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
        ) : (
          <AlertTriangle className="w-4 h-4 text-red-600 mr-2" />
        )}
        <span
          className={`text-sm font-medium ${
            report.status === "Normal" ? "text-green-600" : "text-red-600"
          }`}
        >
          {report.status}
        </span>
      </div>

      {/* Summary */}
      <p className="text-sm text-gray-500 mt-1">{report.summary}</p>

      {/* Actions */}
      <div className="mt-5 flex flex-col gap-3">
        <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-2 rounded-lg shadow hover:opacity-90 transition">
          <Eye className="w-4 h-4" /> View Details
        </button>
        <div className="flex justify-between">
          <button className="flex items-center gap-2 text-gray-600 text-sm border px-3 py-2 rounded-lg hover:bg-gray-50">
            <Download className="w-4 h-4" /> Download
          </button>
          <button className="flex items-center gap-2 text-gray-600 text-sm border px-3 py-2 rounded-lg hover:bg-gray-50">
            <Share2 className="w-4 h-4" /> Share
          </button>
        </div>
      </div>
    </div>
  );
};

// Main Reports Page
const ViewReports = () => {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  // Example Reports Data (this will come from backend later)
  const reports = [
    {
      id: 1,
      title: "Complete Blood Count (CBC)",
      lab: "PathLab Diagnostics",
      date: "2024-01-20",
      category: "Blood Tests",
      status: "Normal",
      summary: "12/12 Normal",
    },
    {
      id: 2,
      title: "Lipid Profile",
      lab: "MedTest Labs",
      date: "2024-01-18",
      category: "Blood Tests",
      status: "Abnormal",
      summary: "4/6 Normal, 2 Abnormal",
    },
    {
      id: 3,
      title: "Thyroid Function Test",
      lab: "HealthCheck Diagnostics",
      date: "2024-01-15",
      category: "Hormonal",
      status: "Normal",
      summary: "3/3 Normal",
    },
    {
      id: 4,
      title: "Liver Function Test",
      lab: "DiagnoLab",
      date: "2024-01-12",
      category: "Blood Tests",
      status: "Abnormal",
      summary: "7/8 Normal, 1 Abnormal",
    },
  ];

  // Filtered + Search
  const filteredReports = reports.filter(
    (r) =>
      (activeFilter === "All" || r.category === activeFilter) &&
      r.title.toLowerCase().includes(search.toLowerCase())
  );

  const categories = ["All", "Blood Tests", "Imaging", "Cardiac", "Hormonal"];

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          <span className = "text-blue-700">View</span>
          <span className = "text-green-600"> Reports </span></h2>
        <p className="text-gray-800">Download and share your test reports</p>
      </div>

      {/* Search + Filters */}
      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
        <div className="relative w-full md:w-1/2">
          <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search reports..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <button className="flex items-center gap-2 border px-4 py-2 rounded-lg text-sm hover:bg-gray-50">
          <Filter className="w-4 h-4" /> Filters
        </button>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`px-4 py-2 text-sm rounded-full ${
              activeFilter === cat
                ? "bg-indigo-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Reports Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredReports.map((report) => (
          <ReportCard key={report.id} report={report} />
        ))}
      </div>
    </div>
  );
};

export default ViewReports;
