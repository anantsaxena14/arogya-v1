// src/pages/MedicationReminders.jsx
import React, { useEffect, useState } from "react";

export default function MedicationReminders() {
  const [medReminders, setMedReminders] = useState([]);
  const [healthReminders, setHealthReminders] = useState([]);
  const [loading, setLoading] = useState(true);

  // Modal states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newReminder, setNewReminder] = useState({
    med: "",
    time: "",
    dosage: "",
    notes: "",
    Schedule: "",
  });

  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("user_id");

  useEffect(() => {
    if (!token || !userId) return;

    fetch("http://localhost:5000/reminders", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-Auth-Token": token,
        "X-User-Id": userId,
      },
    })
      .then((res) => {
        if (res.status === 401) {
          localStorage.removeItem("token");
          localStorage.removeItem("user_id");
          window.location.href = "/login";
        }
        return res.json();
      })
      .then((data) => {
        setMedReminders(data.medication_reminders || []);
        setHealthReminders(data.health_reminders || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch reminders:", err);
        setLoading(false);
      });
  }, [token, userId]);

  const toggleHealthReminder = (sno) => {
    setHealthReminders((prev) =>
      prev.map((hr) =>
        hr.sno === sno ? { ...hr, switch: hr.switch === "yes" ? "no" : "yes" } : hr
      )
    );
    // TODO: Call backend to save the toggle change
  };

  const handleAddReminder = () => {
    if (!newReminder.med || !newReminder.time) return;

    // Update frontend state
    setMedReminders((prev) => [
      ...prev,
      {
        sno: Date.now(),
        ...newReminder,
      },
    ]);

    // TODO: Call backend to save reminder
    /*
    fetch("http://localhost:5000/add-reminder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Auth-Token": token,
        "X-User-Id": userId,
      },
      body: JSON.stringify(newReminder),
    });
    */

    setNewReminder({ med: "", time: "", dosage: "", notes: "", Schedule: "" });
    setIsModalOpen(false);
  };

  if (loading) {
    return <div>Loading reminders...</div>;
  }

  return (
    <div className="bg-white rounded-xl shadow-md p-5 mt-5 relative">
      <h2 className="text-lg font-semibold mb-4">Medication & Health Reminders</h2>

      {/* Medication Reminders */}
      <div className="space-y-4">
        {medReminders.map((med) => (
          <div key={med.sno} className="flex justify-between items-center">
            <div>
              <p className="font-medium text-gray-800">{med.med}</p>
              <p className="text-sm text-gray-500">{med.time}</p>
              {med.dosage && (
                <p className="text-xs text-gray-400">
                  {med.dosage} {med.notes && `· ${med.notes}`}
                </p>
              )}
              {med.Schedule && (
                <p className="text-xs text-gray-500">{med.Schedule}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Health Reminders */}
      <div className="space-y-4 mt-6">
        {healthReminders.map((hr) => (
          <div key={hr.sno} className="flex justify-between items-center">
            <div>
              <p className="font-medium text-gray-800">{hr.title}</p>
              <p className="text-sm text-gray-500">{hr.time}</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={hr.switch === "yes"}
                onChange={() => toggleHealthReminder(hr.sno)}
              />
              <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-blue-500"></div>
              <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-all peer-checked:translate-x-5"></div>
            </label>
          </div>
        ))}
      </div>

      {/* Add New Reminder Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="w-full border border-gray-300 rounded-lg py-2 mt-4 text-sm text-gray-600 hover:bg-gray-100"
      >
        + Add New Reminder
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center  bg-opacity-40 z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 w-96">
            <h3 className="text-lg font-semibold mb-4">Add New Reminder</h3>

            <div className="space-y-3">
              <input
                type="text"
                placeholder="Medication Name"
                value={newReminder.med}
                onChange={(e) =>
                  setNewReminder({ ...newReminder, med: e.target.value })
                }
                className="w-full border p-2 rounded-lg text-sm"
              />
              <input
                type="time"
                value={newReminder.time}
                onChange={(e) =>
                  setNewReminder({ ...newReminder, time: e.target.value })
                }
                className="w-full border p-2 rounded-lg text-sm"
              />
              <input
                type="text"
                placeholder="Dosage (e.g., 250mg, 2 pills)"
                value={newReminder.dosage}
                onChange={(e) =>
                  setNewReminder({ ...newReminder, dosage: e.target.value })
                }
                className="w-full border p-2 rounded-lg text-sm"
              />
              <input
                type="text"
                placeholder="Notes (e.g., before eating)"
                value={newReminder.notes}
                onChange={(e) =>
                  setNewReminder({ ...newReminder, notes: e.target.value })
                }
                className="w-full border p-2 rounded-lg text-sm"
              />
              <input
                type="text"
                placeholder="Schedule (e.g., Daily, Weekly)"
                value={newReminder.Schedule}
                onChange={(e) =>
                  setNewReminder({ ...newReminder, Schedule: e.target.value })
                }
                className="w-full border p-2 rounded-lg text-sm"
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-end space-x-2 mt-5">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 text-sm rounded-lg border border-gray-300 hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={handleAddReminder}
                className="px-4 py-2 text-sm rounded-lg bg-blue-500 text-white hover:bg-blue-600"
              >
                Save Reminder
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
