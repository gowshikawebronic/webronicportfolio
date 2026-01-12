import { 
  Search, 
  Database, 
  Brain, 
  ClipboardCheck, 
  Rocket, 
  LineChart 
} from "lucide-react";

export const AI_PROCESS_PHASES = [
  {
    phase: "Phase 1",
    title: "Discovery & Assessment",
    duration: "2-4 weeks",
    icon: Search,
    color: "bg-[#2776ea]",
    objectives: [
      "Understand business requirements and success criteria",
      "Evaluate data availability and quality",
      "Assess technical infrastructure",
      "Define project scope and timeline"
    ],
    activities: [
      "Stakeholder interviews and workshops",
      "Data audit and exploratory analysis",
      "Technical feasibility assessment",
      "Risk identification and mitigation planning"
    ],
    deliverables: [
      "Project charter",
      "Data assessment report",
      "Technical architecture proposal",
      "Detailed project plan"
    ]
  },
  {
    phase: "Phase 2",
    title: "Data Preparation",
    duration: "3-6 weeks",
    icon: Database,
    color: "bg-[#76ea27]",
    objectives: [
      "Collect and consolidate data from multiple sources",
      "Clean and preprocess data",
      "Engineer relevant features",
      "Create training/validation/test datasets"
    ],
    activities: [
      "Data extraction and integration",
      "Data quality improvement",
      "Feature engineering and selection",
      "Data augmentation (when needed)",
      "Labeling and annotation"
    ],
    deliverables: [
      "Clean, processed datasets",
      "Feature engineering documentation",
      "Data pipeline code",
      "Data quality metrics"
    ]
  },
  {
    phase: "Phase 3",
    title: "Model Development",
    duration: "4-8 weeks",
    icon: Brain,
    color: "bg-[#2776ea]",
    objectives: [
      "Design and implement ML models",
      "Train models on prepared data",
      "Optimize for performance and efficiency",
      "Validate results"
    ],
    activities: [
      "Algorithm selection and baseline modeling",
      "Iterative model development",
      "Hyperparameter tuning",
      "Cross-validation and testing",
      "Model interpretability analysis"
    ],
    deliverables: [
      "Trained models",
      "Performance benchmarks",
      "Model documentation",
      "Training notebooks and code"
    ]
  },
  {
    phase: "Phase 4",
    title: "Evaluation & Testing",
    duration: "2-3 weeks",
    icon: ClipboardCheck,
    color: "bg-[#76ea27]",
    objectives: [
      "Validate model performance on unseen data",
      "Conduct bias and fairness testing",
      "Perform error analysis",
      "Get stakeholder approval"
    ],
    activities: [
      "Comprehensive testing on holdout data",
      "A/B testing preparation",
      "Bias detection and mitigation",
      "User acceptance testing",
      "Documentation review"
    ],
    deliverables: [
      "Test results and metrics",
      "Error analysis report",
      "Bias assessment",
      "Model card documentation"
    ]
  },
  {
    phase: "Phase 5",
    title: "Deployment",
    duration: "2-4 weeks",
    icon: Rocket,
    color: "bg-[#2776ea]",
    objectives: [
      "Deploy models to production environment",
      "Integrate with existing systems",
      "Implement monitoring and logging",
      "Conduct user training"
    ],
    activities: [
      "Production environment setup",
      "Model deployment and integration",
      "API development",
      "Monitoring configuration",
      "User training sessions"
    ],
    deliverables: [
      "Production deployment",
      "API documentation",
      "Monitoring dashboards",
      "User training materials"
    ]
  },
  {
    phase: "Phase 6",
    title: "Monitoring & Optimization",
    duration: "Ongoing",
    icon: LineChart,
    color: "bg-[#76ea27]",
    objectives: [
      "Monitor model performance in production",
      "Detect and address model drift",
      "Continuously improve accuracy",
      "Optimize for cost and efficiency"
    ],
    activities: [
      "Performance monitoring",
      "Data drift detection",
      "Model retraining scheduling",
      "A/B testing of improvements",
      "Cost optimization"
    ],
    deliverables: [
      "Monthly performance reports",
      "Model updates and improvements",
      "Optimization recommendations",
      "ROI tracking"
    ]
  }
];