import React from "react";
import NearbyDoctors from "./VarDashboard/NearbyDoctors";
import MedicationReminders from "./VarDashboard/MedicationReminders";
import Surveybox from "./VarDashboard/Survyebox";
import Appointment from "./VarDashboard/Appointment";
import RecentOrder from "./VarDashboard/RecentOrder";
import TopwrittenText from "./VarDashboard/TopwrittenText";
import VitalMonitor from "./VarDashboard/VitalMonitor"; // <-- import new component

function Frontpage() {
  return (
    <div className="bg-blue-50 min-h-screen">
      <div className="p-6">
        {/* Top Greeting */}
        <TopwrittenText />

        {/* Main Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start mb-8">
          {/* Nearby Doctors (take 2/3 width) */}
          <div className="lg:col-span-2">
            <NearbyDoctors />
          </div>

          {/* Medication & Health Reminders (take 1/3 width) */}
          <div>
            <MedicationReminders />
          </div>
        </div>

        {/* ✅ Surveys + Vital Monitor Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Surveybox />
          <VitalMonitor />
        </div>

        {/* ✅ Appointments & Orders Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          <Appointment />
          <RecentOrder />
        </div>
      </div>
    </div>
  );
}

export default Frontpage;
