// import React, { useState, useEffect } from "react";
// import { Input } from "@/components/ui/input";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";

// const MedicalHistoryPage = () => {
//   const [vitals, setVitals] = useState({});
//   const [conditions, setConditions] = useState([]);
//   const [medications, setMedications] = useState([]);
//   const [allergies, setAllergies] = useState([]);
//   const [familyHistory, setFamilyHistory] = useState([]);
//   const [medicalHistory, setMedicalHistory] = useState({});
//   const [labReports, setLabReports] = useState([]);
//   const [vaccinations, setVaccinations] = useState([]);
//   const [doctorNotes, setDoctorNotes] = useState([]);

//   // Example: Fetch data from backend (API integration can be added later)
//   useEffect(() => {
//     // Replace these with API calls in the future
//     setVitals({
//       heartRate: "78 bpm",
//       bloodPressure: "120/80",
//       oxygen: "98%",
//       temperature: "98.6°F",
//     });

//     setConditions(["Hypertension"]);
//     setMedications(["Metformin", "Aspirin"]);
//     setAllergies(["Penicillin", "Shellfish"]);

//     setFamilyHistory([
//       { relation: "Mother", issues: ["Hypertension", "Osteoporosis"] },
//       { relation: "Father", issues: ["Type 2 Diabetes", "Heart Disease"] },
//       { relation: "Grandmother", issues: ["Breast Cancer"] },
//     ]);

//     setMedicalHistory({
//       pastConditions: ["Asthma"],
//       surgicalHistory: ["Appendectomy"],
//       hospitalVisits: ["2021 - Chest Pain"]
//     });

//     setLabReports(["Blood Test", "Lipid Panel Test", "HbA1c Test"]);

//     setVaccinations(["Tetanus", "Covid Shield", "Influenza", "Hepatitis B"]);

//     setDoctorNotes([
//       { doctor: "Dr. Smith", note: "Patient shows good compliance with medication regimen." },
//       { doctor: "Dr. Johnson", note: "HbA1c levels improved from last visit." },
//     ]);
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-purple-100 to-purple-200 p-6">
//       {/* Navbar with Search */}
//       <div className="flex justify-between items-center mb-6">
//         <Input
//           type="text"
//           placeholder="Search medical records, medications, conditions..."
//           className="w-full max-w-xl shadow-md"
//         />
//       </div>

//       {/* Current Vitals */}
//       <Card className="mb-6">
//         <CardHeader>
//           <CardTitle>Current Vitals</CardTitle>
//         </CardHeader>
//         <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-4">
//           <div className="p-4 rounded-2xl shadow bg-white">Heart Rate: {vitals.heartRate}</div>
//           <div className="p-4 rounded-2xl shadow bg-white">Blood Pressure: {vitals.bloodPressure}</div>
//           <div className="p-4 rounded-2xl shadow bg-white">Oxygen Level: {vitals.oxygen}</div>
//           <div className="p-4 rounded-2xl shadow bg-white">Temperature: {vitals.temperature}</div>
//         </CardContent>
//       </Card>

//       {/* Current Health Overview */}
//       <Card className="mb-6">
//         <CardHeader>
//           <CardTitle>Current Health Overview</CardTitle>
//         </CardHeader>
//         <CardContent className="grid md:grid-cols-3 gap-4">
//           <div className="p-4 bg-white rounded-2xl shadow">
//             <strong>Active Conditions:</strong>
//             <ul>{conditions.map((c, i) => (<li key={i}>{c}</li>))}</ul>
//           </div>
//           <div className="p-4 bg-white rounded-2xl shadow">
//             <strong>Current Medications:</strong>
//             <ul>{medications.map((m, i) => (<li key={i}>{m}</li>))}</ul>
//           </div>
//           <div className="p-4 bg-white rounded-2xl shadow">
//             <strong>Allergies:</strong>
//             <ul>{allergies.map((a, i) => (<li key={i}>{a}</li>))}</ul>
//           </div>
//         </CardContent>
//       </Card>

//       {/* Family Medical History */}
//       <Card className="mb-6">
//         <CardHeader>
//           <CardTitle>Family Medical History</CardTitle>
//         </CardHeader>
//         <CardContent className="grid md:grid-cols-3 gap-4">
//           {familyHistory.map((f, i) => (
//             <div key={i} className="p-4 bg-white rounded-2xl shadow">
//               {f.relation}: {f.issues.join(", ")}
//             </div>
//           ))}
//         </CardContent>
//       </Card>

//       {/* Medical History */}
//       <Card className="mb-6">
//         <CardHeader>
//           <CardTitle>Medical History</CardTitle>
//         </CardHeader>
//         <CardContent className="space-y-4">
//           <div className="p-4 bg-white rounded-2xl shadow">
//             <strong>Past Conditions:</strong> {medicalHistory.pastConditions?.join(", ")}
//           </div>
//           <div className="p-4 bg-white rounded-2xl shadow">
//             <strong>Surgical History:</strong> {medicalHistory.surgicalHistory?.join(", ")}
//           </div>
//           <div className="p-4 bg-white rounded-2xl shadow">
//             <strong>Hospital Visits & Admissions:</strong> {medicalHistory.hospitalVisits?.join(", ")}
//           </div>
//         </CardContent>
//       </Card>

//       {/* Test Results & Lab Reports */}
//       <Card className="mb-6">
//         <CardHeader>
//           <CardTitle>Test Results & Lab Reports</CardTitle>
//         </CardHeader>
//         <CardContent className="space-y-4">
//           {labReports.map((r, i) => (
//             <div key={i} className="p-4 bg-white rounded-2xl shadow">{r}</div>
//           ))}
//         </CardContent>
//       </Card>

//       {/* Immunization & Vaccination Records */}
//       <Card className="mb-6">
//         <CardHeader>
//           <CardTitle>Immunization & Vaccination Records</CardTitle>
//         </CardHeader>
//         <CardContent className="grid md:grid-cols-4 gap-4">
//           {vaccinations.map((v, i) => (
//             <div key={i} className="p-4 bg-white rounded-2xl shadow">{v}</div>
//           ))}
//         </CardContent>
//       </Card>

//       {/* Doctor Notes */}
//       <Card className="mb-6">
//         <CardHeader>
//           <CardTitle>Doctor Notes</CardTitle>
//         </CardHeader>
//         <CardContent className="space-y-4">
//           {doctorNotes.map((n, i) => (
//             <div key={i} className="p-4 bg-white rounded-2xl shadow">
//               <strong>{n.doctor}:</strong> {n.note}
//             </div>
//           ))}
//         </CardContent>
//       </Card>

//       {/* Upload Document */}
//       <Card className="mb-6">
//         <CardHeader>
//           <CardTitle>Upload Document</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <input type="file" className="mb-4" />
//           <Button>Upload</Button>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default MedicalHistoryPage;
