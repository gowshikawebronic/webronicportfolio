import { 
  ClipboardList, 
  Map, 
  FlaskConical, 
  Rocket, 
  TrendingUp 
} from "lucide-react";

export const CLOUD_MIGRATION_DATA = {
  header: {
    badge: "Our Methodology",
    title: "Webronic Cloud",
    titleHighlight: "Transformation Framework",
    description: "A structured, low-risk approach to migrating your mission-critical workloads to the cloud, ensuring business continuity and immediate value realization."
  },
  phases: [
    {
      phaseNum: "01",
      name: "Assess",
      duration: "Weeks 1-4",
      icon: ClipboardList,
      description: "We analyze your current estate to build a data-driven business case for migration.",
      activities: [
        "Application discovery and inventory",
        "Dependency mapping",
        "Performance baselining",
        "Cost analysis",
        "Risk assessment"
      ]
    },
    {
      phaseNum: "02",
      name: "Plan",
      duration: "Weeks 5-10",
      icon: Map,
      description: "We design the target architecture and create a detailed roadmap for execution.",
      activities: [
        "Migration strategy definition",
        "Wave planning",
        "Architecture design",
        "Test strategy",
        "Cutover planning"
      ]
    },
    {
      phaseNum: "03",
      name: "Pilot",
      duration: "Weeks 11-18",
      icon: FlaskConical,
      description: "We migrate a representative subset of apps to validate our assumptions and processes.",
      activities: [
        "Pilot application migration",
        "Process validation",
        "Performance testing",
        "Cost validation",
        "Team training"
      ]
    },
    {
      phaseNum: "04",
      name: "Migrate",
      duration: "Months 5-12",
      icon: Rocket,
      description: "We execute the migration in waves, ensuring stability and minimal disruption.",
      activities: [
        "Wave-based migration execution",
        "Testing and validation",
        "Performance optimization",
        "Documentation"
      ]
    },
    {
      phaseNum: "05",
      name: "Optimize",
      duration: "Ongoing",
      icon: TrendingUp,
      description: "We continuously refine your environment for cost, security, and performance.",
      activities: [
        "Cost optimization",
        "Performance tuning",
        "Security hardening",
        "Continuous improvement"
      ]
    }
  ]
};