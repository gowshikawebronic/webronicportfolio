import { 
  Rocket, 
  Users, 
  Mail, 
  Phone, 
  Clock 
} from "lucide-react";

export const GET_STARTED_DATA = {
  header: {
    badge: "Take the Next Step",
    titleLines: ["Ready to start your", "AI Journey?"],
    description: "Whether you're exploring possibilities or ready to build, we have the right engagement model for you."
  },
  cards: [
    {
      id: "assessment",
      title: "Free AI Readiness Assessment",
      description: "Not sure where to start with AI? Our complimentary assessment helps you:",
      icon: Rocket,
      theme: "light", // White card
      list: [
        "Identify high-value AI use cases",
        "Evaluate your data readiness",
        "Understand technical requirements",
        "Estimate potential ROI",
        "Create an implementation roadmap"
      ],
      cta: {
        text: "Request Your Free Assessment",
        link: "#assessment"
      }
    },
    {
      id: "workshop",
      title: "AI Strategy Workshop",
      description: "Join our AI solution architects for a half-day workshop to:",
      icon: Users,
      theme: "dark", // Dark card
      list: [
        "Explore AI applications in your industry",
        "Review your specific challenges",
        "Brainstorm potential solutions",
        "Develop preliminary business cases",
        "Outline next steps"
      ],
      cta: {
        text: "Schedule Workshop",
        link: "#workshop"
      }
    }
  ],
  contact: {
    title: "Contact Our AI Team",
    subtitle: "Direct access to experts",
    methods: [
      {
        label: "Email Us",
        value: "ai@webronic.com",
        link: "mailto:ai@webronic.com",
        icon: Mail,
        iconColor: "text-[#2776ea]",
        hoverColor: "group-hover:text-[#2776ea]"
      },
      {
        label: "Call Us",
        value: "+91 72000 88500",
        link: "tel:+917200088500",
        icon: Phone,
        iconColor: "text-[#76ea27]",
        hoverColor: "group-hover:text-[#76ea27]"
      },
      {
        label: "Office Hours",
        value: "Monday-Friday, 9 AM - 6 PM IST",
        link: null, // Non-clickable
        icon: Clock,
        iconColor: "text-slate-400",
        hoverColor: ""
      }
    ]
  }
};