import React from "react";

const doctors = [
  {
    name: "Dr. Sarahansh Gupta",
    specialty: "Cardiologist",
    distance: "0.5 km away",
    rating: 4.9,
    buttonColor: "bg-blue-400",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzNwP8s3f19ypBUFTN4s1kwrCtC8flPoYR4Q&s", // replace with real images
  },
  {
    name: "Dr. Michael joseph",
    specialty: "General Physician",
    distance: "1.2 km away",
    rating: 4.7,
    buttonColor: "bg-teal-400",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCSUVxx7ur3mvvOEbpKfNqOii4Lh-vDcIhyQ&s",
  },
  {
    name: "Dr. Anil  Rodriguez",
    specialty: "Dermatologist",
    distance: "2.1 km away",
    rating: 4.8,
    buttonColor: "bg-purple-400",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMkgRViPySeCYbX0CG7Ii3LWS5bp4EBuCAqQ&s",
  },
];

export default function NearbyDoctors() {
  return (
    <div className="bg-white rounded-xl shadow-md  mt-5 p-5">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold flex items-center gap-2">
          👩‍⚕️ Nearby Doctors
        </h2>
        <a href="#" className="text-blue-500 hover:underline text-sm">
          View All
        </a>
      </div>

      {/* Doctor Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {doctors.map((doc, index) => (
          <div
            key={index}
            className="p-4 rounded-xl bg-blue-50 shadow-sm flex flex-col items-center text-center"
          >
            <img
              src={doc.img}
              alt={doc.name}
              className="w-16 h-16 rounded-full mb-3"
            />
            <h3 className="font-bold text-gray-800">{doc.name}</h3>
            <p className="text-sm text-gray-500">{doc.specialty}</p>
            <p className="text-sm text-gray-400">{doc.distance}</p>
            <p className="text-yellow-500 font-medium mt-1">⭐ {doc.rating}</p>
            <button
              className={`${doc.buttonColor} text-white px-4 py-2 rounded-lg mt-3 hover:opacity-90`}
            >
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
