import { 
  ShoppingCart, 
  Activity, 
  PieChart, 
  TrendingUp, 
  Clock, 
  Server, 
  ShieldCheck, 
  DollarSign 
} from "lucide-react";

export const CASE_STUDIES_DATA = {
  header: {
    badge: "Case Studies",
    title: "Proven",
    titleHighlight: "Results",
    description: "Real-world examples of how we've helped organizations transform their infrastructure and achieve measurable business outcomes."
  },
  cases: [
    {
      id: "ecommerce",
      navTitle: "E-commerce Migration",
      icon: ShoppingCart,
      client: "Multi-brand retail company with $200M annual online revenue",
      challenge: "Legacy on-premise infrastructure limiting scalability, costing $800K annually, experiencing frequent outages during peak sales.",
      solution: [
        "Migrated to AWS using microservices architecture",
        "Implemented auto-scaling for traffic spikes",
        "Moved from Oracle to Aurora PostgreSQL",
        "Deployed CloudFront CDN globally",
        "Implemented CI/CD pipelines"
      ],
      results: [
        { label: "Cost Reduction", value: "47%", desc: "$800K to $420K/yr" },
        { label: "Availability", value: "99.97%", desc: "Up from 99.2%" },
        { label: "Page Load", value: "0.8s", desc: "Reduced from 3.2s" },
        { label: "Scale Capacity", value: "10x", desc: "5K to 50K Users" }
      ]
    },
    {
      id: "healthcare",
      navTitle: "Healthcare SaaS",
      icon: Activity,
      client: "Healthcare technology startup building patient engagement platform",
      challenge: "Build scalable, HIPAA-compliant platform serving 500K+ patients across multiple healthcare systems.",
      solution: [
        "Built cloud-first architecture on AWS",
        "Serverless backend using Lambda and API Gateway",
        "DynamoDB for patient data with encryption",
        "Cognito for authentication with MFA",
        "Infrastructure as Code using Terraform"
      ],
      results: [
        { label: "Time to Market", value: "4 Mo", desc: "vs 12 Mo traditional" },
        { label: "Uptime", value: "99.99%", desc: "Maintained over 2 yrs" },
        { label: "Cost Efficiency", value: "$8K", desc: "vs $40K on-premise" },
        { label: "Compliance", value: "100%", desc: "HIPAA Certified" }
      ]
    },
    {
      id: "fintech",
      navTitle: "FinTech Cost Opt.",
      icon: PieChart,
      client: "Financial services firm with $2.5M annual cloud spending",
      challenge: "Rapid, uncontrolled cloud cost growth without visibility or optimization strategies.",
      solution: [
        "Comprehensive cloud cost audit",
        "Right-sizing recommendations implementation",
        "Reserved instance purchasing strategy",
        "Automated shutdown of dev/test environments",
        "Storage lifecycle policies"
      ],
      results: [
        { label: "Annual Savings", value: "$920K", desc: "37% Total Reduction" },
        { label: "Compute Save", value: "42%", desc: "Via Right-sizing" },
        { label: "Storage Save", value: "35%", desc: "Via Tiering" },
        { label: " ROI", value: "Immediate", desc: "Monthly Reviews" }
      ]
    }
  ]
};