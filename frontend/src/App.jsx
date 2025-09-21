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
import ProfilePage from "./components/Profile/ProfilePage";
import LabTestDashboard from "./components/Labtest/LabTestDashboard";
import ReportCard from "./components/Labtest/LabReports";

// Later you can add components for doctor-checks, top-tests, etc.
// import DoctorChecks from "./components/Labtest/DoctorChecks";
// import TopTests from "./components/Labtest/TopTests";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Public routes */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/verify" element={<VerifyPage />} />

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
        <Route path="labreport" element={<ReportCard />} />
        <Route path="labtests" element={<LabTestDashboard />}/>

        
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
