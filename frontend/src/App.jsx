import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  Navigate,
} from "react-router-dom";

import Dashboard from "./components/Dashboard";
import Frontpage from "./components/Frontpage";
import Medibot from "./components/Medibot";
import Doctors from "./components/VarDoctors/Doctors";
import LoginPage from "./components/LoginPage/LoginPage";
import SignupPage from "./components/Signup/Signup";
import VerifyPage from "./components/LoginPage/VerifyPage";
import Medmain from "./components/Medicine/Medmain";
import MedicinePage from "./components/Medicine/MedicinePage";
import ProtectedRoute from "./components/ProtectedRoute";
import ProfilePage from "./components/Profile/ProfileInfo";
import LabTestDashboard from "./components/Labtest/LabTestDashboard";
import ReportCard from "./components/Labtest/LabReports";
import VitalOrgansDashboard from "./components/Labtest/VitalOrganDashboard";
import WomenCare from "./components/Labtest/WomenCare";
import RecentTests from "./components/Labtest/RecentTests";
import MedicalHistoryPage from "./components/MedicalHisotry/MedicalHistoryPage";




const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Public routes */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/verify/:slug" element={<VerifyPage />} /> {/* ✅ fixed */}

      {/* Protected dashboard */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      >
        <Route index element={<Frontpage />} />
        <Route path="mediBot" element={<Medibot />} />
        <Route path="doctors" element={<Doctors />} />
        <Route path="medicine" element={<Medmain />} />
        <Route path="aboutmed" element={<MedicinePage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="labtests" element={<LabTestDashboard />}/>
        <Route path="labreport" element={<ReportCard />} />
        <Route path="VitalOrganDashboard" element={<VitalOrgansDashboard/>}/>
        <Route path="WomenCare" element={<WomenCare/>}/>
        <Route path="RecentTests" element={<RecentTests/>}/>
        <Route path="medicalhistory" element = {<MedicalHistoryPage/>}/>
      </Route>

      {/* Redirect unknown paths to login */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </>
  )
);


function App() {
  return <RouterProvider router={router} />;
}

export default App;
