import { FileSearch, Users } from "lucide-react";

export const GET_STARTED_DATA = {
  header: {
    badge: "Get Started",
    title: "Start Your Cloud",
    titleHighlight: "Transformation",
    description: "Choose the path that fits your current needs. Whether you're ready to migrate or just exploring options, we're here to help."
  },
  cards: [
    {
      id: "assessment",
      theme: "blue", // Primary Brand Color
      icon: FileSearch,
      title: "Free Cloud Assessment",
      subTitle: "Receive complimentary analysis including:",
      features: [
        "Current infrastructure cost analysis",
        "Cloud cost projections",
        "Migration complexity assessment",
        "Recommended approach",
        "Preliminary roadmap"
      ],
      cta: "Request Assessment",
      link: "/contact/assessment"
    },
    {
      id: "workshop",
      theme: "green", // Secondary Brand Color
      icon: Users,
      title: "Cloud Readiness Workshop",
      subTitle: "Half-day workshop covering:",
      features: [
        "Cloud platform comparison",
        "Migration strategies",
        "Architecture best practices",
        "Q&A with cloud architects"
      ],
      cta: "Schedule Workshop",
      link: "/contact/workshop"
    }
  ]
};