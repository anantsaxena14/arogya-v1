import React from "react";

const RecentOrder = () => {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold flex items-center gap-2">
          <span className="text-purple-500">
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
                d="M20 13V7a2 2 0 00-2-2h-4V3H10v2H6a2 2 0 00-2 2v6m16 0a9 9 0 11-18 0m18 0H2"
              />
            </svg>
          </span>
          Recent Orders
        </h2>
        <a href="#" className="text-sm text-blue-500 hover:underline">
          View All
        </a>
      </div>

      {/* List */}
      <div className="space-y-4">
        {/* Order 1 */}
        <div className="flex items-center justify-between bg-yellow-50 p-3 rounded-lg">
          <div>
            <p className="font-medium text-gray-800">Blood Test Kit</p>
            <p className="text-sm text-gray-500">Order #12345</p>
          </div>
          <span className="bg-yellow-200 text-yellow-700 text-xs font-semibold px-3 py-1 rounded-full">
            Pending
          </span>
        </div>

        {/* Order 2 */}
        <div className="flex items-center justify-between bg-blue-50 p-3 rounded-lg">
          <div>
            <p className="font-medium text-gray-800">Prescription Refill</p>
            <p className="text-sm text-gray-500">Order #12344</p>
          </div>
          <span className="bg-blue-200 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
            Shipped
          </span>
        </div>

        {/* Order 3 */}
        <div className="flex items-center justify-between bg-green-50 p-3 rounded-lg">
          <div>
            <p className="font-medium text-gray-800">Vitamins Package</p>
            <p className="text-sm text-gray-500">Order #12343</p>
          </div>
          <span className="bg-green-200 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
            Completed
          </span>
        </div>
      </div>
    </div>
  );
};

export default RecentOrder;
