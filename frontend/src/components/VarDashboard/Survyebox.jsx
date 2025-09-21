import React from "react";

const Surveybox = () => {
  return (
    <div className="max-w-4xl shadow rounded-2xl bg-white mt-4 mx-auto p-6">
      {/* Header */}
      <h2 className="text-xl font-semibold flex items-center gap-2 mb-6">
        <span className="text-teal-500">
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
              d="M9 12h6m-6 4h6m-7-8h8m2-4H7a2 2 0 00-2 2v14l4-4h10a2 2 0 002-2V6a2 2 0 00-2-2z"
            />
          </svg>
        </span>
        Available Surveys
      </h2>

      {/* Survey Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Mental Health Assessment */}
        <div className="rounded-lg bg-blue-50 p-6 shadow-sm border border-blue-100">
          <h3 className="font-semibold text-lg text-gray-800">
            Mental Health Assessment
          </h3>
          <p className="text-sm text-gray-600 mt-2">
            Quick 5-minute survey about your mental wellbeing
          </p>
          <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition">
            Take Survey
          </button>
        </div>

        {/* Sleep Quality Check */}
        <div className="rounded-lg bg-teal-50 p-6 shadow-sm border border-teal-100">
          <h3 className="font-semibold text-lg text-gray-800">
            Sleep Quality Check
          </h3>
          <p className="text-sm text-gray-600 mt-2">
            Evaluate your sleep patterns and quality
          </p>
          <button className="mt-4 bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 px-4 rounded-lg transition">
            Take Survey
          </button>
        </div>
      </div>
    </div>
  );
};

export default Surveybox;
