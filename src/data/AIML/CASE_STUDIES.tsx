import { 
  Factory, 
  FlaskConical, 
  ShieldCheck 
} from "lucide-react";

export const CASE_STUDIES = [
  {
    id: 1,
    category: "Manufacturing AI",
    client: "Global Electronics Manufacturer",
    title: "Computer Vision Quality Inspection",
    icon: Factory,
    color: "text-[#2776ea]",
    challenge: "Manual quality inspection missing 3-5% of defects, leading to costly warranty claims and brand damage.",
    solution: "Deployed computer vision system using custom-trained CNN models to inspect circuit boards for 47 different defect types. [Image of computer vision defect detection system architecture]",
    implementation: [
      "Collected and labeled 500,000 training images",
      "Trained custom ResNet-based architecture",
      "Integrated with production line cameras",
      "Real time inference at 15 images/second",
      "Deployed across 120 inspection stations"
    ],
    results: [
      { label: "Defect Detection", value: "99.2%" },
      { label: "Defects Missed", value: "0.3%" }, // Reduced from 4.2%
      { label: "Inspection Speed", value: "400%" }, // Increase
      { label: "ROI", value: "$8.5M" }, // Annual savings
      { label: "Payback Period", value: "7 Mo" }
    ],
    // Simplified metrics for the 3-column grid layout (picking top 3 high impact ones)
    highlightResults: [
       { label: "Defect Detection", value: "99.2%" },
       { label: "Inspection Speed", value: "4x Faster" },
       { label: "Annual Savings", value: "$8.5M" }
    ],
    quote: "The computer vision system has transformed our quality control. We’re catching defects we never saw before and doing it 4x faster.",
    author: "Director of Manufacturing Operations",
  },
  {
    id: 2,
    category: "Predictive Maintenance",
    client: "Chemical Processing Plant",
    title: "Predictive Maintenance for Chemical Plant",
    icon: FlaskConical,
    color: "text-[#76ea27]",
    challenge: "Unplanned equipment failures causing average 120 hours downtime yearly, costing $2.5M in lost production.",
    solution: "Implemented ML-powered predictive maintenance system using IoT sensor data. [Image of IoT predictive maintenance system architecture]",
    implementation: [
      "Installed 250 IoT sensors on critical equipment",
      "Collected 18 months of operational data",
      "Developed ensemble models (XGBoost + LSTM)",
      "Created maintenance scheduling optimization",
      "Integrated with CMMS system"
    ],
    results: [
      { label: "Prediction Accuracy", value: "87%" },
      { label: "Unplanned Downtime", value: "-72%" },
      { label: "Maintenance Costs", value: "-28%" },
      { label: "Production Inc.", value: "+4%" },
      { label: "Annual Savings", value: "$2.1M" }
    ],
    highlightResults: [
      { label: "Downtime Reduced", value: "72%" },
      { label: "Maintenance Cost", value: "-28%" },
      { label: "Annual Savings", value: "$2.1M" }
    ],
    quote: "We now fix equipment before it breaks. The system paid for itself in the first year through reduced downtime alone.",
    author: "Plant Operations Manager",
  },
  {
    id: 3,
    category: "Conversational AI",
    client: "Insurance Provider",
    title: "NLP-Powered Customer Service",
    icon: ShieldCheck,
    color: "text-[#2776ea]",
    challenge: "Customer service center receiving 50,000 monthly inquiries with 45-minute average response time.",
    solution: "Built AI chatbot using GPT-4 and custom NLP models. [Image of generative AI chatbot architecture]",
    implementation: [
      "Fine-tuned GPT-4 on insurance knowledge base",
      "Integrated with policy management system",
      "Implemented sentiment analysis",
      "Created escalation logic for complex cases",
      "Deployed across web, mobile, and messaging channels"
    ],
    results: [
      { label: "Automation Rate", value: "73%" },
      { label: "Response Time", value: "<2 Min" },
      { label: "CSAT Score", value: "4.1/5" },
      { label: "Cost Savings", value: "$3.2M" },
      { label: "Agent Productivity", value: "+40%" }
    ],
    highlightResults: [
      { label: "Automation Rate", value: "73%" },
      { label: "Response Time", value: "<2 Min" },
      { label: "Cost Savings", value: "$3.2M" }
    ],
    quote: "Our AI assistant handles routine questions instantly while our agents focus on complex cases that need human expertise.",
    author: "VP of Customer Experience",
  },
];