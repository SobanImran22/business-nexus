import { useParams } from "react-router-dom";
import { entrepreneurs } from "../../data/dummyData";

export default function EntrepreneurProfile() {
  const { id } = useParams();
  const profile = entrepreneurs.find((e) => e.id === parseInt(id));

  if (!profile) return <div>Profile not found</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{profile.name}</h1>
      <p>{profile.bio}</p>
      <p><strong>Startup:</strong> {profile.startupName}</p>
      <p><strong>Funding Needed:</strong> {profile.fundingNeed}</p>
      <a href={profile.pitchDeck} className="text-blue-600 underline">View Pitch Deck</a>
    </div>
  );
}
