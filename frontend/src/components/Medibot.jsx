import React, { useState, useEffect, useRef } from "react";

const HealthAssistant = () => {
  const [chat, setChat] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chat]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      text: inputValue.trim(),
      id: chat.length,
      sender: "user",
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setChat((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    setTimeout(() => {
      const botMessage = {
        text: "I understand your concern. Let me help you with that. Based on what you've described, I'd recommend consulting with a healthcare professional for proper diagnosis.",
        id: chat.length + 1,
        sender: "bot",
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setChat((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 2000);
  };

  const handleButtonClick = (action) => {
    setInputValue(action);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col relative w-full">
      {/* Welcome Section */}
      {chat.length === 0 && (
        <div className="flex flex-col items-center text-center flex-1 p-8">
          {/* Circle Logo */}
          <div className="bg-blue-200 rounded-full w-20 h-20 flex items-center justify-center mb-6">
            <img className = "rounded-full" src="data:image/jpeg;base64,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"/>
          </div>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4 font-sans">
            Welcome to Your Health Assistant
          </h2>

          <p className="text-sm text-gray-600 max-w-md leading-relaxed mb-12">
            I'm here to help with your health questions, symptoms, and medical
            guidance. How can I assist you today?
          </p>

          {/* Quick Action Buttons */}
          <div className="flex gap-6 flex-wrap justify-center">
            {[
              { icon: "🩺", text: "Describe Symptoms", action: "I have symptoms: " },
              { icon: "💊", text: "Ask About Dosage", action: "What is the dosage for " },
            ].map((btn, index) => (
              <button
                key={index}
                onClick={() => handleButtonClick(btn.action)}
                className="bg-white border-2 border-gray-200 rounded-xl px-8 py-5 text-gray-700 text-base font-medium cursor-pointer min-w-[200px] flex items-center gap-3 shadow-sm transition duration-200 hover:border-blue-500 hover:bg-gray-100 hover:-translate-y-0.5 hover:shadow-lg"
              >
                <span className="text-xl">{btn.icon}</span>
                {btn.text}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Chat Section */}
      {chat.length > 0 && (
        <div className="flex-1 overflow-y-auto p-8 mb-[100px] max-w-3xl mx-auto w-full">
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
            {chat.map(({ text, id, sender, timestamp }) => (
              <div
                key={id}
                className={`flex mb-6 ${
                  sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`rounded-xl px-5 py-3 max-w-[75%] shadow-md text-sm leading-relaxed ${
                    sender === "user"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  <div>{text}</div>
                  <div className="text-xs opacity-70 mt-1 text-right">
                    {timestamp}
                  </div>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start mb-6">
                <div className="bg-gray-100 rounded-xl px-5 py-3 text-gray-500 text-sm">
                  AI is thinking...
                </div>
              </div>
            )}

            <div ref={chatEndRef} />
          </div>
        </div>
      )}

      {/* Input Section */}
      <div className="fixed bottom-0 left-0 right-0 ml-64 bg-white border-t border-gray-200 px-8 py-5 flex justify-center items-center gap-4 z-50 shadow-md">
        <input
          type="text"
          placeholder="Type your health question..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          className="flex-1 max-w-2xl px-5 py-3 rounded-full border-2 border-gray-200 text-base outline-none text-gray-700 bg-gray-100 focus:border-blue-500 focus:bg-white transition duration-200"
        />
        <button
          onClick={handleSend}
          className="bg-blue-500 hover:bg-blue-600 rounded-full w-11 h-11 flex items-center justify-center text-white text-lg shadow-md hover:scale-105 transition duration-200"
          aria-label="Send"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default HealthAssistant;
