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
        <Route path="Doctors List" element={<Doctors />} />
        <Route path="Medicine" element={<Medmain />} />
        <Route path="AboutMed" element={<MedicinePage />} />
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
