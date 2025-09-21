import { useState } from "react";
import { Search, User, Settings, LogOut } from "lucide-react";
import {Link} from "react-router-dom";

// npm install lucide-react

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-sm px-6 py-3 flex items-center justify-between">
      {/* Logo */}
     

      {/* Search Box (slightly right side with margin) */}
      <div className="flex-1 max-w-lg ml-12">
        <div className="relative">
          <input
            type="text"
            placeholder="Search doctors, medicines, or clinics..."
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
        </div>
      </div>

      {/* Profile Dropdown */}
      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200"
        >
          <User src="" className="w-5 h-5 text-gray-600" />
        </button>

        {open && (
          <div className="absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-lg ring-1 ring-black ring-opacity-5">
            <ul className="py-2">
              <li>
                <Link
                  to="login"
                  className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  <User size={16} /> Profile
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  <Settings size={16} /> Settings
                </a>
              </li>
              <li>
                <Link
                  to="/Verify"
                  className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  <Settings size={16} /> Verify
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  <LogOut size={16} /> Logout
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
