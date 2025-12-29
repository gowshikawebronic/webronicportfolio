export type Job = {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  responsibilities: string[];
};

export const openPositions: Job[] = [
  { 
    id: "1", 
    title: "Senior Full-Stack Engineer", 
    department: "Engineering", 
    location: "Chennai / Remote", 
    type: "Full-time",
    description: "Lead the development of scalable web applications using React and Node.js.",
    responsibilities: ["Lead design of core features", "Architect robust backend APIs", "Maintain high code quality standards"]
  },
  { 
    id: "2", 
    title: "Interface Designer (UI/UX)", 
    department: "Design", 
    location: "Chennai", 
    type: "Full-time",
    description: "Create user-centric interfaces for our specialized software ecosystem.",
    responsibilities: ["Develop high-fidelity prototypes", "Conduct user research", "Build scalable design systems"]
  },
  { 
    id: "3", 
    title: "Android Architect", 
    department: "Mobile", 
    location: "Remote", 
    type: "Contract",
    description: "Design high-performance native Android applications.",
    responsibilities: ["Optimize app performance", "Implement clean architecture", "Integrate IoT protocols"]
  },
  { 
    id: "4", 
    title: "Technical Project Manager", 
    department: "Operations", 
    location: "Chennai", 
    type: "Full-time",
    description: "Bridge the gap between business requirements and technical execution.",
    responsibilities: ["Manage agile sprints", "Define technical roadmaps", "Coordinate cross-functional teams"]
  },
];