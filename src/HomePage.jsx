// src/pages/Home.jsx
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-muted text-center p-8">
      <h1 className="text-4xl font-bold mb-4 text-primary">Business Nexus</h1>
      <p className="text-lg text-gray-600 max-w-md mb-8">
        Empowering startups by connecting entrepreneurs and investors in one powerful platform.
      </p>

      <div className="space-x-4">
        <Link to="/login">
          <button className="bg-primary text-white px-6 py-3 rounded-xl hover:bg-blue-700 shadow-lg transition">
            Login
          </button>
        </Link>
        <Link to="/register">
          <button className="bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded-xl shadow-md hover:bg-blue-50 hover:scale-105 transition-transform duration-200">
  Register
</button>
        </Link>
      </div>

      <div className="mt-10 space-y-2">
        <p><Link to="/dashboard/investor" className="text-blue-500 hover:underline">Investor Dashboard</Link></p>
        <p><Link to="/dashboard/entrepreneur" className="text-blue-500 hover:underline">Entrepreneur Dashboard</Link></p>
      </div>
    </div>
  );
}
