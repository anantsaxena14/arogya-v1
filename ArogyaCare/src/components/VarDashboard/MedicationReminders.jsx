import React, { useState } from "react";

export default function MedicationReminders() {
  // Toggle states for switches
  const [reminders, setReminders] = useState({
    morning: true,
    bpCheck: false,
    evening: true,
  });

  const toggleReminder = (key) => {
    setReminders({ ...reminders, [key]: !reminders[key] });
  };

  return (
    <div className="bg-white rounded-xl shadow-md  p-5">
      {/* Header */}
      <h2 className="text-lg font-semibold mb-4">
        Medication & Health Reminders
      </h2>

      {/* Reminder List */}
      <div className="space-y-4">
        {/* Morning Medication */}
        <div className="flex justify-between items-center">
          <div className ="">
            <p className="font-medium text-gray-800">Morning Medication</p>
            <p className="text-sm text-gray-500">8:00 AM</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={reminders.morning}
              onChange={() => toggleReminder("morning")}
            />
            <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-blue-500"></div>
            <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-all peer-checked:translate-x-5"></div>
          </label>
        </div>

        {/* Blood Pressure Check */}
        <div className="flex justify-between items-center">
          <div>
            <p className="font-medium text-gray-800">Blood Pressure Check</p>
            <p className="text-sm text-gray-500">2:00 PM</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={reminders.bpCheck}
              onChange={() => toggleReminder("bpCheck")}
            />
            <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-blue-500"></div>
            <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-all peer-checked:translate-x-5"></div>
          </label>
        </div>

        {/* Evening Vitamins */}
        <div className="flex justify-between items-center">
          <div>
            <p className="font-medium text-gray-800">Evening Vitamins</p>
            <p className="text-sm text-gray-500">7:00 PM</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={reminders.evening}
              onChange={() => toggleReminder("evening")}
            />
            <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-blue-500"></div>
            <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-all peer-checked:translate-x-5"></div>
          </label>
        </div>
      </div>

      {/* Prescription Box */}
      <div className="bg-[#dff2f6] text-gray p-4 rounded-xl mt-6">
        <p className="font-semibold">Psyclobin X</p>
        <p className="text-sm">250mg · 2x Pills</p>
        <p className="text-xs text-gray-500">Before Eating</p>
        <div className="flex justify-between text-xs text-gray-400 mt-3">
          <span>10:00 AM</span>
          <span>11:00 AM</span>
        </div>
      </div>

      {/* Add New Reminder */}
      <button className="w-full border border-gray-300 rounded-lg py-2 mt-4 text-sm text-gray-600 hover:bg-gray-100">
        + Add New Reminder
      </button>
    </div>
  );
}
