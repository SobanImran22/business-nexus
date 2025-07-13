import { entrepreneurs } from "../../data/dummyData";
import ProfileCard from "../../components/ProfileCard";

export default function InvestorDashboard() {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
      {entrepreneurs.map((entrepreneur) => (
        <ProfileCard key={entrepreneur.id} entrepreneur={entrepreneur} />
      ))}
    </div>
  );
}
