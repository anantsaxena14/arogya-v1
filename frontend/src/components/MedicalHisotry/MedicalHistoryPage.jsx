import React, { useState, useEffect } from "react";

const MedicalHistoryPage = () => {
  const [vitals, setVitals] = useState({});
  const [conditions, setConditions] = useState([]);
  const [medications, setMedications] = useState([]);
  const [allergies, setAllergies] = useState([]);
  const [familyHistory, setFamilyHistory] = useState([]);
  const [medicalHistory, setMedicalHistory] = useState({});
  const [labReports, setLabReports] = useState([]);
  const [vaccinations, setVaccinations] = useState([]);
  const [doctorNotes, setDoctorNotes] = useState([]);

  // Example: Fetch data from backend (API integration can be added later)
  useEffect(() => {
    setVitals({
      heartRate: "78 bpm",
      bloodPressure: "120/80",
      oxygen: "98%",
      temperature: "98.6°F",
    });

    setConditions(["Hypertension"]);
    setMedications(["Metformin", "Aspirin"]);
    setAllergies(["Penicillin", "Shellfish"]);

    setFamilyHistory([
      { relation: "Mother", issues: ["Hypertension", "Osteoporosis"] },
      { relation: "Father", issues: ["Type 2 Diabetes", "Heart Disease"] },
      { relation: "Grandmother", issues: ["Breast Cancer"] },
    ]);

    setMedicalHistory({
      pastConditions: ["Asthma"],
      surgicalHistory: ["Appendectomy"],
      hospitalVisits: ["2021 - Chest Pain"],
    });

    setLabReports(["Blood Test", "Lipid Panel Test", "HbA1c Test"]);

    setVaccinations(["Tetanus", "Covid Shield", "Influenza", "Hepatitis B"]);

    setDoctorNotes([
      {
        doctor: "Dr. Smith",
        note: "Patient shows good compliance with medication regimen.",
      },
      {
        doctor: "Dr. Johnson",
        note: "HbA1c levels improved from last visit.",
      },
    ]);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-purple-200 p-6">
      {/* Navbar with Search */}
      <div className="flex justify-between items-center mb-6">
        <input
          type="text"
          placeholder="Search medical records, medications, conditions..."
          className="w-full max-w-xl shadow-md px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
      </div>

      {/* Current Vitals */}
      <div className="bg-white rounded-xl shadow-md mb-6">
        <div className="border-b px-4 py-3">
          <h2 className="text-lg font-semibold">Current Vitals</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
          <div className="p-4 rounded-2xl shadow bg-white">
            Heart Rate: {vitals.heartRate}
          </div>
          <div className="p-4 rounded-2xl shadow bg-white">
            Blood Pressure: {vitals.bloodPressure}
          </div>
          <div className="p-4 rounded-2xl shadow bg-white">
            Oxygen Level: {vitals.oxygen}
          </div>
          <div className="p-4 rounded-2xl shadow bg-white">
            Temperature: {vitals.temperature}
          </div>
        </div>
      </div>

      {/* Current Health Overview */}
      <div className="bg-white rounded-xl shadow-md mb-6">
        <div className="border-b px-4 py-3">
          <h2 className="text-lg font-semibold">Current Health Overview</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-4 p-4">
          <div className="p-4 bg-white rounded-2xl shadow">
            <strong>Active Conditions:</strong>
            <ul>
              {conditions.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </div>
          <div className="p-4 bg-white rounded-2xl shadow">
            <strong>Current Medications:</strong>
            <ul>
              {medications.map((m, i) => (
                <li key={i}>{m}</li>
              ))}
            </ul>
          </div>
          <div className="p-4 bg-white rounded-2xl shadow">
            <strong>Allergies:</strong>
            <ul>
              {allergies.map((a, i) => (
                <li key={i}>{a}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Family Medical History */}
      <div className="bg-white rounded-xl shadow-md mb-6">
        <div className="border-b px-4 py-3">
          <h2 className="text-lg font-semibold">Family Medical History</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-4 p-4">
          {familyHistory.map((f, i) => (
            <div key={i} className="p-4 bg-white rounded-2xl shadow">
              {f.relation}: {f.issues.join(", ")}
            </div>
          ))}
        </div>
      </div>

      {/* Medical History */}
      <div className="bg-white rounded-xl shadow-md mb-6">
        <div className="border-b px-4 py-3">
          <h2 className="text-lg font-semibold">Medical History</h2>
        </div>
        <div className="space-y-4 p-4">
          <div className="p-4 bg-white rounded-2xl shadow">
            <strong>Past Conditions:</strong>{" "}
            {medicalHistory.pastConditions?.join(", ")}
          </div>
          <div className="p-4 bg-white rounded-2xl shadow">
            <strong>Surgical History:</strong>{" "}
            {medicalHistory.surgicalHistory?.join(", ")}
          </div>
          <div className="p-4 bg-white rounded-2xl shadow">
            <strong>Hospital Visits & Admissions:</strong>{" "}
            {medicalHistory.hospitalVisits?.join(", ")}
          </div>
        </div>
      </div>

      {/* Test Results & Lab Reports */}
      <div className="bg-white rounded-xl shadow-md mb-6">
        <div className="border-b px-4 py-3">
          <h2 className="text-lg font-semibold">Test Results & Lab Reports</h2>
        </div>
        <div className="space-y-4 p-4">
          {labReports.map((r, i) => (
            <div key={i} className="p-4 bg-white rounded-2xl shadow">
              {r}
            </div>
          ))}
        </div>
      </div>

      {/* Immunization & Vaccination Records */}
      <div className="bg-white rounded-xl shadow-md mb-6">
        <div className="border-b px-4 py-3">
          <h2 className="text-lg font-semibold">
            Immunization & Vaccination Records
          </h2>
        </div>
        <div className="grid md:grid-cols-4 gap-4 p-4">
          {vaccinations.map((v, i) => (
            <div key={i} className="p-4 bg-white rounded-2xl shadow">
              {v}
            </div>
          ))}
        </div>
      </div>

      {/* Doctor Notes */}
      <div className="bg-white rounded-xl shadow-md mb-6">
        <div className="border-b px-4 py-3">
          <h2 className="text-lg font-semibold">Doctor Notes</h2>
        </div>
        <div className="space-y-4 p-4">
          {doctorNotes.map((n, i) => (
            <div key={i} className="p-4 bg-white rounded-2xl shadow">
              <strong>{n.doctor}:</strong> {n.note}
            </div>
          ))}
        </div>
      </div>

      {/* Upload Document */}
      <div className="bg-white rounded-xl shadow-md mb-6">
        <div className="border-b px-4 py-3">
          <h2 className="text-lg font-semibold">Upload Document</h2>
        </div>
        <div className="p-4">
          <input
            type="file"
            className="mb-4 block w-full text-sm text-gray-600 border rounded-lg cursor-pointer focus:outline-none"
          />
          <button className="px-6 py-2 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700 transition">
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default MedicalHistoryPage;
