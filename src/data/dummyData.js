

export const entrepreneurs = [
  {
    id: 1,
    name: "Ali Raza",
    startupName: "TechNova",
    pitchSummary: "A smart energy management system.",
    bio: "Tech enthusiast from Lahore.",
    fundingNeed: "$50,000",
    pitchDeck: "link/to/pitchdeck.pdf"
  },
  {
    id: 2,
    name: "Sara Khan",
    startupName: "EduBoost",
    pitchSummary: "An AI-based learning platform.",
    bio: "Ex-teacher turned entrepreneur.",
    fundingNeed: "$100,000",
    pitchDeck: "link/to/pitchdeck.pdf"
  }
];

export const investors = [
  {
    id: 101,
    name: "Ahmed Malik",
    interests: "AI, EdTech, SaaS",
    portfolio: ["Startup A", "Startup B"],
    bio: "Serial investor and mentor."
  }
];

export const collaborationRequests = [
  {
    id: 1,
    entrepreneurId: 1,
    investorId: 101,
    status: "Pending"
  },
  {
    id: 2,
    entrepreneurId: 2,
    investorId: 101,
    status: "Accepted"
  }
];
