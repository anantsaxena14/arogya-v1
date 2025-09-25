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
    <div className="min-h-screen bg-gradient-to-b bg-blue-50 p-6">
      {/* Navbar with Search */}
      <div className="flex justify-between items-center mb-6">
        <input
          type="text"
          placeholder="Search medical records, medications, conditions..."
          className="w-full max-w-xl shadow-md px-4 py-2 bg-white rounded-lg border 
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:shadow-lg 
          transition duration-300"
        />
      </div>

      {/* Section Wrapper */}
      {[
        {
          title: "Current Vitals",
          content: (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
              <div className="p-4 rounded-2xl shadow bg-gradient-to-r from-purple-100 to-purple-200 hover:scale-105 hover:shadow-xl transition">
                ❤️ Heart Rate: {vitals.heartRate}
              </div>
              <div className="p-4 rounded-2xl shadow bg-gradient-to-r from-pink-100 to-pink-200 hover:scale-105 hover:shadow-xl transition">
                💓 Blood Pressure: {vitals.bloodPressure}
              </div>
              <div className="p-4 rounded-2xl shadow bg-gradient-to-r from-blue-100 to-blue-200 hover:scale-105 hover:shadow-xl transition">
                🌬 Oxygen Level: {vitals.oxygen}
              </div>
              <div className="p-4 rounded-2xl shadow bg-gradient-to-r from-yellow-100 to-yellow-200 hover:scale-105 hover:shadow-xl transition">
                🌡 Temperature: {vitals.temperature}
              </div>
            </div>
          ),
        },
        {
          title: "Current Health Overview",
          content: (
            <div className="grid md:grid-cols-3 gap-4 p-4">
              <div className="p-4 bg-white rounded-2xl shadow hover:bg-purple-50 hover:shadow-lg transition">
                <strong>Active Conditions:</strong>
                <ul>
                  {conditions.map((c, i) => (
                    <li key={i}>• {c}</li>
                  ))}
                </ul>
              </div>
              <div className="p-4 bg-white rounded-2xl shadow hover:bg-purple-50 hover:shadow-lg transition">
                <strong>Current Medications:</strong>
                <ul>
                  {medications.map((m, i) => (
                    <li key={i}>• {m}</li>
                  ))}
                </ul>
              </div>
              <div className="p-4 bg-white rounded-2xl shadow hover:bg-purple-50 hover:shadow-lg transition">
                <strong>Allergies:</strong>
                <ul>
                  {allergies.map((a, i) => (
                    <li key={i}>• {a}</li>
                  ))}
                </ul>
              </div>
            </div>
          ),
        },
        {
          title: "Family Medical History",
          content: (
            <div className="grid md:grid-cols-3 gap-4 p-4">
              {familyHistory.map((f, i) => (
                <div
                  key={i}
                  className="p-4 bg-white rounded-2xl shadow hover:shadow-lg hover:bg-pink-50 transition"
                >
                  👪 {f.relation}: {f.issues.join(", ")}
                </div>
              ))}
            </div>
          ),
        },
        {
          title: "Medical History",
          content: (
            <div className="space-y-4 p-4">
              <div className="p-4 bg-white rounded-2xl shadow hover:shadow-lg hover:bg-purple-50 transition">
                <strong>Past Conditions:</strong>{" "}
                {medicalHistory.pastConditions?.join(", ")}
              </div>
              <div className="p-4 bg-white rounded-2xl shadow hover:shadow-lg hover:bg-purple-50 transition">
                <strong>Surgical History:</strong>{" "}
                {medicalHistory.surgicalHistory?.join(", ")}
              </div>
              <div className="p-4 bg-white rounded-2xl shadow hover:shadow-lg hover:bg-purple-50 transition">
                <strong>Hospital Visits & Admissions:</strong>{" "}
                {medicalHistory.hospitalVisits?.join(", ")}
              </div>
            </div>
          ),
        },
        {
          title: "Test Results & Lab Reports",
          content: (
            <div className="space-y-4 p-4">
              {labReports.map((r, i) => (
                <div
                  key={i}
                  className="p-4 bg-gradient-to-r from-green-100 to-green-200 rounded-2xl shadow hover:scale-105 hover:shadow-lg transition"
                >
                  🧪 {r}
                </div>
              ))}
            </div>
          ),
        },
        {
          title: "Immunization & Vaccination Records",
          content: (
            <div className="grid md:grid-cols-4 gap-4 p-4">
              {vaccinations.map((v, i) => (
                <div
                  key={i}
                  className="p-4 bg-gradient-to-r from-yellow-100 to-yellow-200 rounded-2xl shadow hover:scale-105 hover:shadow-lg transition"
                >
                  💉 {v}
                </div>
              ))}
            </div>
          ),
        },
        {
          title: "Doctor Notes",
          content: (
            <div className="space-y-4 p-4">
              {doctorNotes.map((n, i) => (
                <div
                  key={i}
                  className="p-4 bg-white rounded-2xl shadow hover:bg-blue-50 hover:shadow-lg transition"
                >
                  <strong>👨‍⚕️ {n.doctor}:</strong> {n.note}
                </div>
              ))}
            </div>
          ),
        },
        {
          title: "Upload Document",
          content: (
            <div className="p-4">
              <input
                type="file"
                className="mb-4 block w-full text-sm text-gray-600 border rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              />
              <button className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg shadow hover:scale-105 hover:shadow-lg transition">
                Upload
              </button>
            </div>
          ),
        },
      ].map((section, index) => (
        <div
          key={index}
          className="bg-white/90 backdrop-blur-md rounded-xl shadow-md mb-6 hover:shadow-lg transition"
        >
          <div className="border-b px-4 py-3 bg-gradient-to-r from-purple-200 to-purple-300 rounded-t-xl">
            <h2 className="text-lg font-semibold text-gray-800">
              {section.title}
            </h2>
          </div>
          {section.content}
        </div>
      ))}
    </div>
  );
};

export default MedicalHistoryPage;
