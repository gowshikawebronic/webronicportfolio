import { 
  Infinity, 
  ShieldAlert, 
  BarChart3, 
  BrainCircuit 
} from "lucide-react";

export const RELATED_SERVICES_DATA = {
  header: {
    badge: "Explore More",
    title: "Related",
    titleHighlight: "Services"
  },
  services: [
    {
      id: "devops",
      title: "DevOps & Site Reliability",
      description: "Streamline delivery pipelines and ensure system reliability.",
      icon: Infinity,
      link: "/services/devops"
    },
    {
      id: "security",
      title: "Cybersecurity Services",
      description: "Protect your digital assets with enterprise-grade security.",
      icon: ShieldAlert,
      link: "/services/cybersecurity"
    },
    {
      id: "analytics",
      title: "Data Analytics",
      description: "Turn raw data into actionable business intelligence.",
      icon: BarChart3,
      link: "/services/data-analytics"
    },
    {
      id: "ai",
      title: "AI & Machine Learning",
      description: "Innovate with predictive models and intelligent automation.",
      icon: BrainCircuit,
      link: "/services/ai-ml"
    }
  ]
};