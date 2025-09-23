import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Dashboard() {
  const location = useLocation();
  const hideFooterPaths = ["/mediBot","/AboutMed"];
  const [minimized, setMinimized] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <div className={`${minimized ? "w-16" : "w-64"} bg-white shadow-md fixed h-full transition-all duration-200`}>
        <Sidebar minimized={minimized} setMinimized={setMinimized} />
      </div>
      {/* Main content area */}
      <div className={`flex-1 flex flex-col transition-all duration-200 ${minimized ? "ml-16" : "ml-64"}`}>
        <div className="fixed top-0 left-0 right-0 z-10 bg-white" style={{ left: minimized ? "4rem" : "16rem" }}>
          <Navbar />
        </div>
        <div className="flex-1 mt-16 overflow-y-auto bg-gray-50">
          <Outlet />
          <button className="fixed bottom-6 right-6 bg-green-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-green-700">
            <Link to="MediBot">Consult with AI Doctor</Link>
          </button>
          {!hideFooterPaths.includes(location.pathname) && (
            <div className="p-6 bg-blue-50">
              <Footer />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
