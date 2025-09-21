import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const VitalMonitor = () => {
  // Dummy data for charts
  const heartRateData = [
    { time: "9AM", value: 78 },
    { time: "12PM", value: 76 },
    { time: "3PM", value: 72 },
    { time: "6PM", value: 80 },
    { time: "9PM", value: 90 },
    { time: "3PM", value: 72 },
    { time: "6PM", value: 80 },
    { time: "9PM", value: 90 },
  ];

  const bloodPressureData = [
    { time: "12PM", value: 120 },
    { time: "3PM", value: 127 },
    { time: "6PM", value: 119 },
  ];

  return (
    <div className="bg-white rounded-xl shadow p-6">
      {/* Header */}
      <h2 className="text-lg font-semibold flex items-center gap-2 mb-4">
        <span className="text-red-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 8c-1.657 0-3 1.343-3 3 0 1.31.84 2.417 2 2.83V17h2v-3.17c1.16-.413 2-1.52 2-2.83 0-1.657-1.343-3-3-3z"
            />
          </svg>
        </span>
        Vitals Monitor
      </h2>

      {/* Heart Rate + Blood Pressure */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-red-50 p-4 rounded-lg text-center">
          <p className="text-red-500 flex items-center justify-center gap-1 font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8c-1.657 0-3 1.343-3 3 0 1.31.84 2.417 2 2.83V17h2v-3.17c1.16-.413 2-1.52 2-2.83 0-1.657-1.343-3-3-3z"
              />
            </svg>
            Heart Rate
          </p>
          <p className="text-3xl font-bold">75</p>
          <p className="text-sm text-green-600">Normal</p>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg text-center">
          <p className="text-blue-500 flex items-center justify-center gap-1 font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 7v10c0 2.21 1.79 4 4 4h8c2.21 0 4-1.79 4-4V7M4 7h16M4 7l8-4 8 4"
              />
            </svg>
            Blood Pressure
          </p>
          <p className="text-3xl font-bold">118/78</p>
          <p className="text-sm text-green-600">Optimal</p>
        </div>
      </div>

      {/* Heart Rate Trend */}
      <div className="mb-6">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>Heart Rate Trend</span>
          <span>Today</span>
        </div>
        <div className="h-24">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={heartRateData}>
              <XAxis dataKey="time" hide />
              <YAxis hide />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#f87171"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Blood Pressure Trend */}
      <div className="mb-6">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>Blood Pressure</span>
          <span>Last 3 readings</span>
        </div>
        <div className="h-24">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={bloodPressureData}>
              <XAxis dataKey="time" hide />
              <YAxis hide />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#3b82f6"
                strokeWidth={2}
                dot={{ r: 3 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-3">
        <button className="flex-1 flex items-center justify-center gap-2 border border-red-400 text-red-500 py-2 px-4 rounded-lg hover:bg-red-50 transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4v16m8-8H4"
            />
          </svg>
          Log Reading
        </button>
        <button className="flex-1 flex items-center justify-center gap-2 border border-blue-400 text-blue-500 py-2 px-4 rounded-lg hover:bg-blue-50 transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 17v-6a2 2 0 012-2h2a2 2 0 012 2v6m-6 0h6"
            />
          </svg>
          View History
        </button>
      </div>
    </div>
  );
};

export default VitalMonitor;
