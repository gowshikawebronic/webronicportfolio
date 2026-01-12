import { HelpCircle } from "lucide-react";

export const FAQ_DATA = [
  {
    id: "q2",
    question: "How long does digital transformation take?",
    answer: {
      text: "Transformation timelines vary based on scope and organizational readiness. We use phased approaches delivering value throughout the journey, not just at the end."
    }
  },
  {
    id: "q3-cost",
    question: "What does digital transformation cost?",
    answer: {
      text: "Investment depends on organization size and scope. We provide detailed cost estimates after initial assessment."
    }
  },
  {
    id: "q3-replace",
    question: "Do we need to replace all our systems?",
    imageTag: "",
    answer: {
      text: "Not necessarily. Our approach:",
      list: [
        "Keep systems providing value",
        "Integrate legacy systems via APIs",
        "Replace only when necessary",
        "Gradual migration, not “rip and replace”"
      ]
    }
  },
  {
    id: "q4",
    question: "How do you ensure employee adoption?",
    answer: {
      text: "Change management is embedded throughout:",
      list: [
        "Early stakeholder involvement",
        "Comprehensive training programs",
        "Super-user network",
        "Continuous support",
        "Celebrate wins and recognize adopters"
      ]
    }
  },
  {
    id: "q5",
    question: "Can we transform incrementally?",
    answer: {
      text: "Yes. We recommend phased transformation:",
      list: [
        "Start with high-value, lower-risk initiatives",
        "Build momentum with quick wins",
        "Gradually expand scope",
        "Learn and adjust as you go"
      ]
    }
  },
  {
    id: "q6",
    question: "What if we don’t know where to start?",
    answer: {
      text: "Our Digital Strategy Workshop spanning 3-5 days provides:",
      list: [
        "Current state assessment",
        "Vision development",
        "Prioritized roadmap",
        "Clear starting point"
      ]
    }
  },
  {
    id: "q7",
    question: "How do you measure transformation success?",
    imageTag: "",
    answer: {
      text: "We track metrics across:",
      list: [
        "Business: Revenue growth, cost savings, market share",
        "Customer: Satisfaction, retention, lifetime value",
        "Operational: Productivity, quality, cycle time",
        "Financial: ROI, payback period, NPV"
      ]
    }
  },
  {
    id: "q8",
    question: "What’s your role vs our team’s role?",
    answer: {
      text: "Partnership model:",
      list: [
        "We provide: Strategy, expertise, implementation, best practices",
        "You provide: Business knowledge, decision-making, resources",
        "Together: Execute transformation, manage change, achieve outcomes"
      ]
    }
  },
  {
    id: "q9",
    question: "Can transformation work with our legacy constraints?",
    answer: {
      text: "Yes. We specialize in transforming organizations with:",
      list: [
        "Legacy systems over 20 years old",
        "Manual production tracking",
        "Regulatory constraints",
        "Budget limitations",
        "Risk-averse cultures"
      ],
      outro: "Our methodology accommodates real-world constraints."
    }
  },
  {
    id: "q10",
    question: "What happens after transformation completes?",
    // FIXED: The string below is now on a single line.
    imageTag: "[Image of continuous improvement cycle diagram]", 
    answer: {
      text: "Transformation is continuous:",
      list: [
        "Ongoing optimization",
        "Innovation pipeline",
        "Emerging technology adoption",
        "Continuous improvement culture"
      ],
      outro: "We offer ongoing partnership or transition to your team."
    }
  }
];