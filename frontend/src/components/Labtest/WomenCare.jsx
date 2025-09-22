import React, { useState } from "react";

// Dummy data (replace with API later)
const categories = ["All", "Reproductive Health", "Pregnancy", "Hormonal", "Preventive Care"];

const tests = [
  {
    id: 1,
    title: "Complete Women's Health Package",
    description: "Comprehensive health screening including hormonal, reproductive, and general health markers.",
    rating: 4.9,
    reviews: 1847,
    duration: "4-6 hours",
    includes: ["CBC", "Lipid Profile", "Thyroid Function"],
    price: 1900,
    discountPrice: 1299,
    discount: "33% OFF",
    tag: "Popular",
    color: "from-pink-500 to-red-400",
  },
  {
    id: 2,
    title: "Pregnancy Care Package",
    description: "Essential tests for expecting mothers including prenatal screening and nutritional assessment.",
    rating: 4.8,
    reviews: 923,
    duration: "3-4 hours",
    includes: ["HCG", "Complete Blood Count", "Glucose Tolerance"],
    price: 1800,
    discountPrice: 1225,
    discount: "32% OFF",
    tag: "Popular",
    color: "from-blue-500 to-cyan-400",
  },
  {
    id: 3,
    title: "Hormonal Balance Panel",
    description: "Comprehensive hormonal assessment including reproductive and thyroid hormones.",
    rating: 4.7,
    reviews: 1156,
    duration: "2-3 hours",
    includes: ["FSH", "LH", "Estradiol"],
    price: 1800,
    discountPrice: 1199,
    discount: "33% OFF",
    tag: "",
    color: "from-purple-500 to-pink-400",
  },
  {
    id: 4,
    title: "PCOS Screening Package",
    description: "Specialized screening for Polycystic Ovary Syndrome including hormonal and metabolic markers.",
    rating: 4.8,
    reviews: 756,
    duration: "3-4 hours",
    includes: ["Testosterone", "Insulin", "Glucose"],
    price: 1900,
    discountPrice: 1299,
    discount: "32% OFF",
    tag: "Popular",
    color: "from-green-500 to-emerald-400",
  },
  {
    id: 5,
    title: "Menopause Health Panel",
    description: "Comprehensive assessment for menopausal and post-menopausal women.",
    rating: 4.6,
    reviews: 456,
    duration: "2-3 hours",
    includes: ["FSH", "Estradiol", "Bone Density"],
    price: 1800,
    discountPrice: 1199,
    discount: "33% OFF",
    tag: "",
    color: "from-orange-500 to-pink-400",
  },
];

const tips = [
  { id: 1, title: "Maintain Regular Exercise", text: "Aim for at least 150 minutes of moderate aerobic activity weekly.", color: "green" },
  { id: 2, title: "Balanced Nutrition", text: "Include calcium, iron, and folic acid rich foods in your diet.", color: "pink" },
  { id: 3, title: "Regular Health Screenings", text: "Schedule annual check-ups and age-appropriate screenings.", color: "blue" },
  { id: 4, title: "Stress Management", text: "Practice mindfulness, yoga, or meditation for mental well-being.", color: "purple" },
];

const faqs = [
  "How often should I get a Pap smear?",
  "What tests are important during pregnancy?",
  "When should I start mammography screening?",
  "What are the signs of hormonal imbalance?",
  "How can I prepare for women's health tests?",
];

const WomenCare = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredTests =
    selectedCategory === "All"
      ? tests
      : tests.filter((t) => t.title.includes(selectedCategory));

  return (
    <div className="p-6 space-y-10">
      {/* Banner */}
      <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white p-6 rounded-2xl shadow-md">
        <h1 className="text-2xl font-bold">Your Health, Our Priority</h1>
        <p className="mt-2 text-sm">
          Comprehensive healthcare solutions designed for women’s unique needs. From reproductive health to preventive care, we’re here to support you.
        </p>
        <button className="mt-4 bg-white text-pink-600 px-4 py-2 rounded-lg shadow">
          Book Appointment
        </button>
      </div>

      {/* Categories */}
      <div>
        <h2 className="text-lg font-semibold mb-3">Test Categories</h2>
        <div className="flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-4 py-1 rounded-full text-sm ${
                selectedCategory === cat
                  ? "bg-pink-600 text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Tests */}
      <div>
        <h2 className="text-lg font-semibold mb-3">Specialized Tests</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6">
          {filteredTests.map((test) => (
            <div
              key={test.id}
              className="bg-white shadow-md rounded-xl p-5 pt-8 relative"
            >
              <div
                className={`absolute top-3 right-3 text-xs px-2 py-1 rounded-md text-white bg-gradient-to-r ${test.color}`}
              >
                {test.discount}
              </div>
              {test.tag && (
                <span className="absolute top-3 left-3 text-xs bg-red-500 text-white px-2 py-1 rounded-md">
                  {test.tag}
                </span>
              )}
              <h3 className="text-lg font-semibold">{test.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{test.description}</p>
              <div className="flex items-center gap-2 mt-2 text-yellow-500">
                ⭐ {test.rating} ({test.reviews})
              </div>
              <p className="text-xs text-gray-500">{test.duration}</p>
              <div className="mt-2 text-xs flex gap-2 flex-wrap">
                {test.includes.map((inc, i) => (
                  <span
                    key={i}
                    className="bg-gray-100 px-2 py-1 rounded-md text-gray-700"
                  >
                    {inc}
                  </span>
                ))}
              </div>
              <div className="mt-3 flex justify-between items-center">
                <span className="text-lg font-bold text-pink-600">
                  ₹{test.discountPrice}
                </span>
                <span className="text-sm line-through text-gray-400">
                  ₹{test.price}
                </span>
              </div>
              <div className="mt-4 flex gap-3">
                <button className="bg-pink-600 text-white px-4 py-2 rounded-lg">
                  Book Now
                </button>
                <button className="border px-4 py-2 rounded-lg">Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tips & FAQs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Health Tips */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Health Tips for Women</h2>
          <div className="space-y-3">
            {tips.map((tip) => (
              <div
                key={tip.id}
                className="flex items-start gap-3 bg-white p-4 rounded-lg shadow"
              >
                <span
                  className={`w-10 h-10 flex items-center justify-center rounded-full text-white bg-${tip.color}-500`}
                >
                  💡
                </span>
                <div>
                  <h4 className="font-semibold">{tip.title}</h4>
                  <p className="text-sm text-gray-600">{tip.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Frequently Asked Questions</h2>
          <div className="space-y-2">
            {faqs.map((q, i) => (
              <details
                key={i}
                className="bg-white shadow rounded-lg p-3 cursor-pointer"
              >
                <summary className="font-medium">{q}</summary>
                <p className="text-sm text-gray-600 mt-2">
                  Answer will go here. (Can come from backend later)
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>

      {/* Personalized Care */}
      <div className="bg-purple-100 text-center p-6 rounded-xl shadow">
        <h2 className="text-lg font-bold">Need Personalized Care?</h2>
        <p className="text-sm text-gray-700 mt-2">
          Our women’s health specialists provide personalized guidance. Book a consultation to discuss your needs.
        </p>
        <div className="mt-4 flex justify-center gap-3">
          <button className="bg-pink-600 text-white px-4 py-2 rounded-lg">
            Consult Gynecologist
          </button>
          <button className="border px-4 py-2 rounded-lg">Health Resources</button>
        </div>
      </div>
    </div>
  );
};

export default WomenCare;
