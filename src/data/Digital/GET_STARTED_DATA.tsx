import { 
  ClipboardCheck, 
  Rocket, 
  Mail, 
  Phone, 
  Clock,
  CheckCircle2
} from "lucide-react";

export const GET_STARTED_DATA = {
  header: {
    badge: "Get Started",
    title: "Start Your Transformation",
    subtitle: "Choose the path that fits your current needs, from initial assessment to full-scale strategy development."
  },
  assessment: {
    title: "Free Digital Maturity Assessment",
    badge: "Complimentary",
    description: "Understand your current standing and identify high-priority opportunities.",
    icon: ClipboardCheck,
    features: [
      "Current state evaluation across 6 dimensions",
      "Maturity scoring and benchmarking",
      "Priority opportunity identification",
      "High-level transformation roadmap"
    ],
    buttonText: "Request Assessment"
  },
  workshop: {
    title: "Digital Transformation Workshop",
    price: "$25,000",
    priceSubtext: "Investment",
    description: "Intensive engagement spanning 3-5 days delivering a complete execution strategy.",
    icon: Rocket,
    features: [
      "Digital vision and strategy",
      "Transformation roadmap",
      "Business cases and ROI models",
      "Implementation plan"
    ],
    buttonText: "Schedule Workshop"
  },
  contact: {
    title: "Contact Our Transformation Team",
    info: [
      { 
        icon: Mail, 
        label: "Email", 
        value: "transformation@webronic.com",
        href: "mailto:transformation@webronic.com"
      },
      { 
        icon: Phone, 
        label: "Phone", 
        value: "+91 72000 88500",
        href: "tel:+917200088500"
      },
      { 
        icon: Clock, 
        label: "Hours", 
        value: "Monday-Friday, 9 AM - 6 PM IST",
        href: null
      }
    ]
  }
};