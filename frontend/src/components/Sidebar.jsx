import { Bot, List, Pill, Calendar, FileText, FlaskConical } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Sidebar() {
  const [active, setActive] = useState("");

  const menuItems = [
    { name: "MediBot", icon: <Bot size={20} />, link: "mediBot" },
    { name: "Doctors List", icon: <List size={20} />, link: "doctors" },
    { name: "Medicine", icon: <Pill size={20} />, link: "medicine" },
    { name: "Appointments", icon: <Calendar size={20} />, link: "" },
    { name: "Medical History", icon: <FileText size={20} />, link: "mediBot" },
    { name: "Lab Tests", icon: <FlaskConical size={20} />, link: "labtests" }, // lowercase
  ];

  return (
    <div className="h-screen w-64 bg-white shadow-sm flex flex-col">
      {/* Logo */}
      <div className="flex items-center p-8 pt-4 pb-[9.5px] shadow space-x-2">
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <img src={logo} alt="Logo" className="w-full h-full object-cover" />
        </div>

        <span className="font-semibold text-lg">
          <Link to="/" className="text-blue-500 text-2xl">Arogya</Link>
          <Link to="/" className="text-green-500 text-2xl">Care</Link>
        </span>
      </div>

      {/* Menu Items */}
      <ul className="flex-1 mt-4">
        {menuItems.map((item) => (
          <li key={item.name}>
            <Link
              to={item.link}
              onClick={() => setActive(item.name)}
              className={`flex items-center gap-3 w-full px-6 py-3 text-gray-600 hover:bg-blue-50 hover:text-blue-600 ${
                active === item.name
                  ? "bg-blue-50 text-blue-600 font-medium border-r-4 border-blue-600"
                  : ""
              }`}
            >
              {item.icon}
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
