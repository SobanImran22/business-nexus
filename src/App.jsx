import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import InvestorDashboard from "./pages/dashboard/InvestorDashboard";
import EntrepreneurDashboard from "./pages/dashboard/EntrepreneurDashboard";
import EntrepreneurProfile from "./pages/profile/EntrepreneurProfile";
import InvestorProfile from "./pages/profile/InvestorProfile";
import Home from './HomePage';
import ChatPage from "./pages/ChatPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard/investor" element={<InvestorDashboard />} />
        <Route path="/dashboard/entrepreneur" element={<EntrepreneurDashboard />} />
        <Route path="/profile/entrepreneur/:id" element={<EntrepreneurProfile />} />
        <Route path="/profile/investor/:id" element={<InvestorProfile />} />
        <Route path="/chat/:userId" element={<ChatPage />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
