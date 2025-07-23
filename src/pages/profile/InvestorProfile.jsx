import { useParams } from "react-router-dom";
import { investors } from "../../data/dummyData";
import { Link } from "react-router-dom";

export default function InvestorProfile() {
  const { id } = useParams();
  const investor = investors.find((i) => i.id === parseInt(id));

  if (!investor) return <div>Investor not found</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{investor.name}</h1>
      <p>{investor.bio}</p>
      <p><strong>Interests:</strong> {investor.interests}</p>
      <p><strong>Portfolio:</strong> {investor.portfolio.join(", ")}</p>

      <Link to={`/chat/${user.id}`}>
  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
    Message
  </button>
</Link>


    </div>
  );
}
