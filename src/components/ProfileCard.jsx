// src/components/ProfileCard.jsx
import { Link } from "react-router-dom";

export default function ProfileCard({ entrepreneur }) {
  return (
    <div className="border p-4 rounded shadow bg-white">
      <h2 className="text-xl font-bold">{entrepreneur.name}</h2>
      <p className="text-gray-600">{entrepreneur.startupName}</p>
      <p className="text-sm">{entrepreneur.pitchSummary}</p>
      <Link to={`/profile/entrepreneur/${entrepreneur.id}`}>
        <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded">
          View Full Profile
        </button>
      </Link>
    </div>
  );
}
