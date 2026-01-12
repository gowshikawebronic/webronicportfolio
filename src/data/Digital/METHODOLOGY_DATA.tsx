import { 
  Telescope, 
  Map, 
  PenTool, 
  Hammer, 
  Rocket, 
  LineChart 
} from "lucide-react";

export const METHODOLOGY_DATA = [
  {
    phase: "Phase 1",
    title: "Envision",
    duration: "Weeks 1-4",
    icon: Telescope,
    activities: [
      "Digital maturity assessment",
      "Vision development workshops",
      "Stakeholder alignment",
      "Success metrics definition"
    ],
    deliverables: [
      "Maturity assessment report",
      "Digital vision statement",
      "High-level transformation goals"
    ]
  },
  {
    phase: "Phase 2",
    title: "Strategy",
    duration: "Weeks 5-10",
    icon: Map,
    activities: [
      "Initiative identification",
      "Business case development",
      "Prioritization and roadmapping",
      "Governance design"
    ],
    deliverables: [
      "Transformation roadmap",
      "Business cases",
      "Governance charter",
      "Change management strategy"
    ]
  },
  {
    phase: "Phase 3",
    title: "Design",
    duration: "Months 3-5",
    icon: PenTool,
    activities: [
      "Process redesign",
      "Technology architecture",
      "Customer experience design",
      "Organizational design"
    ],
    deliverables: [
      "Process documentation",
      "Architecture blueprints",
      "Experience prototypes",
      "Operating model design"
    ]
  },
  {
    phase: "Phase 4",
    title: "Build",
    duration: "Months 6-12",
    icon: Hammer,
    activities: [
      "Technology implementation",
      "Process automation development",
      "Integration and data migration",
      "Training content development"
    ],
    deliverables: [
      "Working systems",
      "Automated processes",
      "Integrated architecture",
      "Training materials"
    ]
  },
  {
    phase: "Phase 5",
    title: "Deploy",
    duration: "Months 13-18",
    icon: Rocket,
    activities: [
      "Pilot deployments",
      "Change management execution",
      "Training delivery",
      "Full-scale rollout"
    ],
    deliverables: [
      "Production systems",
      "Trained users",
      "Support processes",
      "Adoption metrics"
    ]
  },
  {
    phase: "Phase 6",
    title: "Optimize",
    duration: "Ongoing Process",
    icon: LineChart,
    activities: [
      "Performance monitoring",
      "Continuous improvement",
      "User feedback incorporation",
      "Innovation pipeline"
    ],
    deliverables: [
      "Optimization recommendations",
      "Enhancement releases",
      "Innovation roadmap"
    ]
  }
];