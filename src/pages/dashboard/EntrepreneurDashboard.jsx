import { investors, collaborationRequests } from "../../data/dummyData";

export default function EntrepreneurDashboard() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Collaboration Requests</h1>
      <ul className="space-y-4">
        {collaborationRequests.map((req) => {
          const investor = investors.find(i => i.id === req.investorId);
          return (
            <li key={req.id} className="p-4 bg-white shadow rounded">
              <p><strong>Investor:</strong> {investor.name}</p>
              <p><strong>Status:</strong> {req.status}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
