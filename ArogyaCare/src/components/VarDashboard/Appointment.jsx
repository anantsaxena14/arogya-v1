import React from "react";

const Appointment = () => {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold flex items-center gap-2">
          <span className="text-blue-500">
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
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </span>
          Appointments
        </h2>
        <div className="flex items-center gap-2">
          <span className="bg-red-100 text-red-500 text-xs font-semibold px-2 py-1 rounded-full">
            2
          </span>
          <a href="#" className="text-sm text-blue-500 hover:underline">
            View All
          </a>
        </div>
      </div>

      {/* List */}
      <div className="space-y-4">
        {/* Item 1 */}
        <div className="flex items-center justify-between bg-green-50 p-3 rounded-lg">
          <div className="flex items-center gap-3">
            <span className="h-3 w-3 bg-green-500 rounded-full"></span>
            <div>
              <p className="font-medium text-gray-800">Bentley Howard</p>
              <p className="text-sm text-gray-500">Service Description</p>
            </div>
          </div>
          <span className="text-green-600 font-semibold">10:00</span>
        </div>

        {/* Item 2 */}
        <div className="flex items-center justify-between bg-blue-50 p-3 rounded-lg">
          <div className="flex items-center gap-3">
            <span className="h-3 w-3 bg-blue-500 rounded-full"></span>
            <div>
              <p className="font-medium text-gray-800">Robert Martin</p>
              <p className="text-sm text-gray-500">Contact Lens Fitting</p>
            </div>
          </div>
          <span className="text-blue-600 font-semibold">10:00</span>
        </div>

        {/* Item 3 */}
        <div className="flex items-center justify-between bg-yellow-50 p-3 rounded-lg">
          <div className="flex items-center gap-3">
            <span className="h-3 w-3 bg-yellow-500 rounded-full"></span>
            <div>
              <p className="font-medium text-gray-800">Bentley Howard</p>
              <p className="text-sm text-gray-500">Cancer Removal</p>
            </div>
          </div>
          <span className="text-yellow-600 font-semibold">10:00</span>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
