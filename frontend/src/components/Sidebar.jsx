import { Bot, List, Pill, Calendar, FileText, FlaskConical, ChevronsLeft, ChevronsRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Sidebar({ minimized, setMinimized }) {
  const [active, setActive] = useState("");

  const menuItems = [
    { name: "MediBot", icon: <Bot size={20} />, link: "mediBot" },
    { name: "Doctors List", icon: <List size={20} />, link: "doctors" },
    { name: "Medicine", icon: <Pill size={20} />, link: "medicine" },
    { name: "Medical History", icon: <FileText size={20} />, link: "medicalhistory"},
    { name: "Lab Tests", icon: <FlaskConical size={20} />, link: "labtests" },
  ];

  return (
    <div className={`h-screen ${minimized ? "w-16" : "w-64"} bg-white shadow-sm flex flex-col transition-all duration-200`}>
      {/* Top Section with Logo */}
      <div className={`flex items-center border-b-[1px] h-[66px] justify-center p-4`}>
        <div className="w-10 h-10   rounded-full overflow-hidden">
          <Link to = "/"> <img src={logo} alt="Logo" className="w-full h-full object-cover" /></Link>
        </div>
        {!minimized && (
          <span className="font-semibold text-lg ml-2">
            <Link to="/" className="text-blue-500 text-2xl">Arogya</Link>
            <Link to="/" className="text-green-500 text-2xl">Care</Link>
          </span>
        
        )}
         
      </div>

        
    
     

      {/* Menu Items */}
      <ul className="flex-1 pl-2  mt-4">
        {menuItems.map((item) => (
          <li key={item.name}>
            <Link
              to={item.link}
              onClick={() => setActive(item.name)}
              className={`flex items-center gap-3 w-full px-2 py-3 text-gray-600 hover:bg-blue-50 hover:text-blue-600 
                ${active === item.name && !minimized ? "bg-blue-50 text-blue-600 font-medium border-r-4 border-blue-600" : ""}
                ${minimized ? "justify-center" : ""}
              `}
              title={item.name}
              status={minimized}
            >
              {item.icon}
              {!minimized && item.name}
            </Link>
          </li>
        ))}
      </ul>
      
      {/* Toggle Button at Bottom */}
      <div className="flex justify-right items-center  py-4">
        <button
          onClick={() => setMinimized((val) => !val)}
          className="focus:outline-none px-5"
        >
          {minimized ? <ChevronsRight size={24} /> : <ChevronsLeft size={24} />}
        </button>
      </div>
    </div>
  );
}
