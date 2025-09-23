import { useState, useEffect, useRef } from "react";
import { Search, User, Settings, LogOut } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const timerRef = useRef(null);

  const handleLogout = async () => {
    const token = localStorage.getItem("token");
    try {
      await fetch("http://localhost:5000/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      });
    } catch (error) {
      console.error("Failed to logout on server:", error);
    }
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
    navigate("/login", { replace: true });
  };

  // Auto close dropdown after 5 seconds
  useEffect(() => {
    if (open) {
      timerRef.current = setTimeout(() => setOpen(false), 5000);
    }
    return () => clearTimeout(timerRef.current);
  }, [open]);

  // Close dropdown on any click inside it
  const handleDropdownClick = (callback) => {
    setOpen(false);
    if (typeof callback === "function") callback();
  };

  return (
    <nav className="w-full bg-white border-b-[1px]  h-[66px] px-6 py-3 flex items-center justify-between">
      {/** Search Box */}
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
      {/** Profile Dropdown */}
      <div className="relative">
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200"
        >
          <img src="/src/assets/profilepic.jpg" className="w-8 rounded-full object-cover h-8 text-gray-600" />
        </button>
        {open && (
          <div className="absolute right-0 mt-2 w-40 bg-white border-white rounded-xl shadow-lg ring-1 ring-black ring-opacity-5">
            <ul className="py-2">
              <li>
                <Link
                  to="profile"
                  onClick={() => handleDropdownClick()}
                  className="flex items-center hover:bg-blue-200 gap-2 px-4 py-2 text-gray-700 "
                >
                  <User size={16} /> Profile
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  onClick={() => handleDropdownClick()}
                  className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-blue-200"
                >
                  <Settings size={16} /> Settings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={() => {
                    handleDropdownClick(handleLogout);
                  }}
                  className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-blue-200"
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
