import { useParams, Link } from "react-router-dom";
import { entrepreneurs } from "../../data/dummyData";

export default function EntrepreneurProfile() {
  const { id } = useParams();
  const profile = entrepreneurs.find((e) => e.id === parseInt(id));

  if (!profile) return <div>Profile not found</div>;

  return (
    <div className="p-6 bg-white shadow rounded-lg max-w-xl mx-auto mt-6">
      <h1 className="text-2xl font-bold text-gray-800">{profile.name}</h1>
      <p className="text-gray-600 mb-2">{profile.bio}</p>
      <p><strong>Startup:</strong> {profile.startupName}</p>
      <p><strong>Funding Needed:</strong> {profile.fundingNeed}</p>
      <a
        href={profile.pitchDeck}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline block my-2"
      >
        View Pitch Deck
      </a>

      <Link to={`/chat/${profile.id}`}>
        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
          Message
        </button>
      </Link>
    </div>
  );
}
