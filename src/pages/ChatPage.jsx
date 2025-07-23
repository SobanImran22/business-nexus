import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { entrepreneurs, investors } from "../data/dummyData";

export default function ChatPage() {
  const { userId } = useParams();
  const [messages, setMessages] = useState([
    { from: "them", text: "Hi, I saw your pitch!" },
    { from: "me", text: "Thanks! Happy to answer any questions." },
  ]);
  const [input, setInput] = useState("");

  const user =
    entrepreneurs.find((e) => e.id === parseInt(userId)) ||
    investors.find((i) => i.id === parseInt(userId));

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { from: "me", text: input }]);
    setInput("");
  };

  return (
    <div className="max-w-3xl mx-auto p-4 mt-6 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Chat with {user?.name}</h2>

      <div className="h-64 overflow-y-auto border p-3 rounded bg-gray-50">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`mb-2 flex ${
              msg.from === "me" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`px-4 py-2 rounded-lg max-w-xs ${
                msg.from === "me"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-300 text-black"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 px-4 py-2 border rounded"
          placeholder="Type your message..."
        />
        <button
          onClick={handleSend}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Send
        </button>
      </div>
    </div>
  );
}
