import { 
  Compass, 
  Workflow, 
  HeartHandshake, 
  Cpu, 
  Users2, 
  CloudCog 
} from "lucide-react";

export type ContentBlock = 
  | { type: 'heading'; text: string }
  | { type: 'subheading'; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'list'; title?: string; items: string[] } // title is optional for lists
  | { type: 'image_tag'; text: string };

export const CORE_SERVICES_DATA = [
  {
    id: "strategy",
    title: "Digital Strategy & Consulting",
    icon: Compass,
    content: [
      { type: 'heading', text: "Define Your Digital Future" },
      { type: 'paragraph', text: "Successful transformation starts with a clear strategy. We help you articulate your digital vision, identify transformation priorities, and create actionable roadmaps that align technology investments with business objectives." },
      
      { type: 'heading', text: "Digital Maturity Assessment" },
      { type: 'paragraph', text: "Understand your current state across key dimensions:" },
      { type: 'image_tag', text: "" },
      { type: 'list', title: "Technology Maturity:", items: ["Legacy system landscape analysis", "Cloud adoption assessment", "Data and analytics capabilities", "Cybersecurity posture", "Infrastructure modernization needs", "Integration architecture review"] },
      { type: 'list', title: "Process Maturity:", items: ["Process automation level", "Workflow efficiency analysis", "Manual vs automated activities", "Process standardization assessment", "Bottleneck identification"] },
      { type: 'list', title: "Customer Experience Maturity:", items: ["Digital touchpoint analysis", "Omnichannel capability assessment", "Personalization sophistication", "Customer journey mapping", "Digital engagement metrics"] },
      { type: 'list', title: "Organizational Maturity:", items: ["Digital skills assessment", "Agile adoption level", "Innovation culture evaluation", "Change readiness analysis", "Leadership digital literacy"] },
      { type: 'list', title: "People & Culture:", items: ["Digital skills gap analysis", "Change readiness assessment", "Innovation capability", "Collaboration effectiveness"] },
      { type: 'list', title: "Data & Analytics:", items: ["Data quality and accessibility", "Analytics maturity", "Decision-making processes", "AI/ML readiness"] },
      { type: 'subheading', text: "Assessment Deliverable:" },
      { type: 'paragraph', text: "Comprehensive report with maturity scores across all dimensions, peer benchmarking, and prioritized improvement opportunities." },

      { type: 'heading', text: "Digital Vision Development" },
      { type: 'paragraph', text: "Define where you want to be:" },
      { type: 'list', title: "Vision Workshop spanning 2-3 days:", items: ["Executive stakeholder interviews", "Industry trends and best practices review", "Competitive landscape analysis", "Technology opportunity exploration", "Vision statement development", "Success metrics definition"] },
      { type: 'list', title: "Vision Components:", items: ["3-5 year digital ambition", "Target customer experience", "Desired operating model", "Technology architecture principles", "Cultural transformation goals", "Innovation approach"] },

      { type: 'heading', text: "Transformation Roadmap" },
      { type: 'paragraph', text: "Create your path forward with our Roadmap Development Process:" },
      { type: 'list', title: "Phase 1: Initiative Identification", items: ["Catalog all potential initiatives", "Process automation opportunities", "System modernization needs", "Customer experience improvements", "New digital capabilities", "Data and analytics enhancements", "Infrastructure upgrades"] },
      { type: 'list', title: "Phase 2: Prioritization", items: ["Evaluate initiatives across:", "Business value including revenue impact, cost savings, and customer satisfaction", "Strategic alignment that supports vision and objectives", "Implementation complexity such as technical difficulty and resource requirements", "Dependencies that determine what must happen first", "Risk level covering execution risk and technology risk"] },
      { type: 'list', title: "Phase 3: Sequencing", items: ["Organize initiatives into transformation waves:", "Wave 1 during Months 1-6: Quick wins and foundational capabilities", "Wave 2 during Months 7-12: Core transformation initiatives", "Wave 3 during Months 13-24: Advanced capabilities and optimization", "Wave 4 during Months 25-36: Innovation and differentiation"] },
      { type: 'list', title: "Phase 4: Resource Planning", items: ["Define requirements:", "Budget by initiative and wave", "Internal resource allocation", "External partner requirements", "Technology investments", "Training and change management"] },
      { type: 'image_tag', text: "" },
      { type: 'list', title: "Roadmap Deliverables:", items: ["Visual timeline showing all initiatives", "Detailed initiative descriptions", "Business case for each initiative", "Resource and budget requirements", "Risk assessment and mitigation", "Governance structure"] },

      { type: 'heading', text: "Digital Strategy Workshop" },
      { type: 'paragraph', text: "Intensive 3-5 day engagement delivering complete transformation strategy:" },
      { type: 'list', title: "Day 1 focused on Assessment and Alignment", items: ["Current state review", "Stakeholder interviews", "Vision alignment workshop"] },
      { type: 'list', title: "Day 2 focused on Opportunity Exploration", items: ["Industry best practices", "Technology capabilities review", "Use case ideation", "Customer journey mapping"] },
      { type: 'list', title: "Day 3 focused on Prioritization", items: ["Initiative evaluation", "Business case development", "Quick wins identification"] },
      { type: 'list', title: "Day 4 focused on Roadmap Development", items: ["Initiative sequencing", "Dependency mapping", "Resource planning", "Risk assessment"] },
      { type: 'list', title: "Day 5 focused on Presentation and Refinement", items: ["Executive presentation", "Feedback incorporation", "Final roadmap approval"] },
      { type: 'list', title: "Workshop Outcomes:", items: ["Digital transformation vision", "Prioritized initiative list", "3-year transformation roadmap", "First-year implementation plan", "Business case and ROI model", "Governance framework"] },
    ]
  },
  {
    id: "process",
    title: "Business Process Transformation",
    icon: Workflow,
    content: [
      { type: 'heading', text: "Reimagine How Work Gets Done" },
      { type: 'paragraph', text: "Digital transformation requires rethinking business processes from the ground up. We help you redesign processes to be faster, more efficient, more customer-centric, and more automated." },
      
      { type: 'heading', text: "Process Discovery & Analysis" },
      { type: 'list', title: "Current State Mapping:", items: ["Document existing processes from end to end", "Identify all process participants and handoffs", "Measure current performance including cycle time, cost, and quality", "Capture pain points and inefficiencies", "Map supporting systems and data flows"] },
      { type: 'list', title: "Analysis Techniques:", items: ["Process mining to analyze system logs and discover actual process flows", "Time and motion studies", "Value stream mapping", "Root cause analysis of bottlenecks", "Benchmarking against industry standards"] },

      { type: 'heading', text: "Process Redesign" },
      { type: 'subheading', text: "Redesign Principles:" },
      { type: 'list', title: "Customer-Centric:", items: ["Start with customer needs", "Eliminate customer friction points", "Reduce customer effort", "Improve responsiveness"] },
      { type: 'list', title: "Lean & Efficient:", items: ["Eliminate non-value-added steps", "Reduce handoffs and waiting time", "Simplify complex processes", "Standardize where appropriate"] },
      { type: 'list', title: "Automated:", items: ["Automate repetitive tasks", "Use RPA for manual data entry", "Implement workflow automation", "Enable straight-through processing"] },
      { type: 'list', title: "Data Driven:", items: ["Capture process data automatically", "Enable real time monitoring", "Support analytics and optimization", "Facilitate continuous improvement"] },
      { type: 'list', title: "Agile & Flexible:", items: ["Design for adaptability", "Enable exception handling", "Support multiple paths to outcome", "Quick reconfiguration"] },
      { type: 'image_tag', text: "" },
      { type: 'list', title: "Redesign Approach:", items: ["Brainstorm future state unconstrained by current limitations", "Incorporate best practices from industry leaders", "Apply automation opportunities including RPA, workflow, and AI", "Simplify and streamline by removing unnecessary steps", "Design supporting technology such as systems, integrations, and data", "Validate with stakeholders to ensure the solution is practical and adoptable"] },

      { type: 'heading', text: "Process Automation" },
      { type: 'subheading', text: "Robotic Process Automation (RPA):" },
      { type: 'list', title: "Automate repetitive, rules-based tasks:", items: ["Data entry across multiple systems", "Report generation and distribution", "Invoice processing", "Customer onboarding", "Compliance checking", "Email response automation"] },
      { type: 'list', title: "RPA Benefits:", items: ["50-70% cost reduction for automated tasks", "99.9%+ accuracy by eliminating human errors", "24/7 operation without breaks", "Instant scalability during peak periods", "Fast implementation within weeks rather than months"] },
      
      { type: 'subheading', text: "Workflow Automation:" },
      { type: 'list', title: "Orchestrate multi-step processes:", items: ["Approval workflows for purchase orders, expense reports, and hiring", "Customer service case routing", "Order-to-cash processes", "Procure-to-pay workflows", "Employee onboarding"] },
      { type: 'list', title: "Workflow Tools:", items: ["Platforms: ServiceNow, Pega, Appian, Microsoft Power Automate", "Custom workflow engines", "Integration with existing systems"] },

      { type: 'subheading', text: "Intelligent Automation:" },
      { type: 'list', title: "Combine RPA with AI for complex tasks:", items: ["Document understanding for invoices, contracts, and forms", "Email classification and routing", "Customer inquiry responses", "Fraud detection", "Claims processing"] },

      { type: 'heading', text: "Process Implementation" },
      { type: 'subheading', text: "Phased Rollout:" },
      { type: 'list', title: "Phase 1: Pilot spanning 4-6 weeks", items: ["Select low-risk process for initial rollout", "Implement redesigned process", "Train pilot users", "Monitor performance closely", "Gather feedback and refine"] },
      { type: 'list', title: "Phase 2: Expand spanning 2-3 months", items: ["Roll out to additional teams/locations", "Refine based on pilot learnings", "Scale automation infrastructure", "Broaden training"] },
      { type: 'list', title: "Phase 3: Full Deployment spanning 3-6 months", items: ["Organization-wide rollout", "Decommission old processes", "Transition support to operations", "Establish continuous improvement"] },
      { type: 'list', title: "Process Governance:", items: ["Process owners assigned", "Performance metrics defined and monitored", "Regular process reviews", "Continuous improvement framework"] },
    ]
  },
  {
    id: "cx",
    title: "Customer Experience Redesign",
    icon: HeartHandshake,
    content: [
      { type: 'heading', text: "Put Customers at the Center" },
      { type: 'paragraph', text: "Transform customer experiences across all touchpoints, from awareness through purchase, usage, and support, creating seamless, personalized journeys that build loyalty." },
      
      { type: 'heading', text: "Customer Journey Mapping" },
      { type: 'image_tag', text: "[Image of customer journey map example]" },
      { type: 'subheading', text: "Journey Mapping Process:" },
      { type: 'list', title: "Define Customer Personas", items: ["Demographics and psychographics", "Goals and motivations", "Pain points and frustrations", "Technology preferences"] },
      { type: 'list', title: "Map Current Journey", items: ["All touchpoints including website, mobile app, store, call center, and email", "Actions at each stage", "Emotions and satisfaction levels", "Pain points and friction", "Systems and data involved"] },
      { type: 'list', title: "Identify Opportunities", items: ["Moments that matter at critical touchpoints", "Pain points requiring resolution", "Opportunities for delight", "Gaps in current experience"] },
      { type: 'list', title: "Design Future Journey", items: ["Ideal experience at each touchpoint", "Omnichannel consistency", "Personalization opportunities", "Proactive vs reactive interactions"] },

      { type: 'heading', text: "Omnichannel Experience" },
      { type: 'subheading', text: "Channel Integration:" },
      { type: 'list', title: "Create consistent experience across:", items: ["Web: Responsive website with personalization", "Mobile: Native apps for iOS and Android", "Physical: Retail stores, branch offices", "Call Center: Phone and chat support", "Email: Automated and personalized campaigns", "Social Media: Engagement and customer service", "IoT Devices: Connected products and services"] },
      { type: 'list', title: "Channel Consistency:", items: ["Unified customer data across channels", "Consistent branding and messaging", "Seamless transitions between channels", "Shared cart/preferences/history", "Single view of customer interactions"] },
      { type: 'list', title: "Channel-Specific Optimization:", items: ["Mobile-first design for on-the-go access", "Self-service for simple transactions", "Human touch for complex issues", "Proactive notifications and alerts"] },

      { type: 'heading', text: "Personalization" },
      { type: 'subheading', text: "Personalization Capabilities:" },
      { type: 'list', title: "Content Personalization:", items: ["Product recommendations based on browsing/purchase history", "Personalized homepage and category pages", "Targeted promotions and offers", "Dynamic email content"] },
      { type: 'list', title: "Experience Personalization:", items: ["Customized user interface", "Preferred communication channels", "Saved preferences and settings", "Personalized search results"] },
      { type: 'list', title: "Predictive Personalization:", items: ["Next-best action recommendations", "Churn risk identification and retention offers", "Cross-sell and upsell opportunities", "Optimal timing for engagement"] },
      { type: 'list', title: "Personalization Technologies:", items: ["Customer Data Platforms (CDPs)", "Recommendation engines", "A/B testing platforms", "Marketing automation"] },

      { type: 'heading', text: "Digital Touchpoint Enhancement" },
      { type: 'list', title: "Website Optimization:", items: ["User experience redesign", "Conversion rate optimization", "Page speed improvement", "Mobile responsiveness", "Accessibility compliance with WCAG standards", "SEO optimization"] },
      { type: 'list', title: "Mobile App Development:", items: ["Native iOS and Android apps", "Progressive Web Apps (PWAs)", "App store optimization", "Push notification strategy", "In-app personalization"] },
      { type: 'list', title: "Self-Service Portals:", items: ["Customer account management", "Order tracking and history", "Support ticket submission and tracking", "Knowledge base and FAQs", "Community forums"] },
      { type: 'list', title: "Chatbots & Virtual Assistants:", items: ["AI driven customer service chatbots", "Natural language understanding", "Intent recognition and routing", "Seamless handoff to human agents", "Multilingual support"] },
    ]
  },
  {
    id: "operating-model",
    title: "Digital Operating Model Design",
    icon: Cpu,
    content: [
      { type: 'heading', text: "Transform How You Work" },
      { type: 'paragraph', text: "Evolve organizational structures, ways of working, and cultural norms to support digital excellence and continuous innovation." },

      { type: 'heading', text: "Agile Transformation" },
      { type: 'subheading', text: "Transition to Agile:" },
      { type: 'paragraph', text: "Move from traditional waterfall to agile methodologies:" },
      { type: 'list', title: "Agile Frameworks:", items: ["Scrum: For product development teams", "Kanban: For operational and support teams", "SAFe: For large-scale enterprise agile", "DevOps: For development and operations integration"] },
      { type: 'list', title: "Agile Practices:", items: ["Sprint planning and execution using 2-week sprints", "Daily standups", "Sprint reviews and retrospectives", "Backlog management and prioritization", "Cross-functional teams", "Iterative delivery"] },
      { type: 'list', title: "Benefits:", items: ["Faster time to market with 50-70% reduction", "Increased flexibility to changing requirements", "Higher quality through continuous testing", "Improved team collaboration", "Greater transparency and visibility"] },
      
      { type: 'heading', text: "DevOps Adoption" },
      { type: 'subheading', text: "DevOps Transformation:" },
      { type: 'paragraph', text: "Break down silos between development and operations:" },
      { type: 'image_tag', text: "[Image of DevOps cycle diagram]" },
      { type: 'list', title: "DevOps Principles:", items: ["Continuous integration and delivery using CI/CD", "Infrastructure as code", "Automated testing", "Continuous monitoring", "Collaborative culture", "Shared responsibility"] },
      { type: 'list', title: "DevOps Toolchain:", items: ["Version control using Git, GitHub, and GitLab", "CI/CD pipelines with Jenkins, GitLab CI, and GitHub Actions", "Configuration management through Ansible and Terraform", "Container orchestration using Kubernetes and Docker", "Monitoring with Prometheus, Grafana, and Datadog"] },
      { type: 'list', title: "Outcomes:", items: ["Daily or hourly deployments vs monthly", "60-90% reduction in deployment failures", "90% faster mean time to recovery", "50% less time on unplanned work"] },

      { type: 'heading', text: "Organizational Design" },
      { type: 'subheading', text: "New Structures:" },
      { type: 'list', title: "Product-Centric Teams:", items: ["Organize around products, not projects", "Cross-functional teams with end to end ownership", "Autonomous decision-making", "Direct customer feedback loops"] },
      { type: 'image_tag', text: "[Image of agile product team structure]" },
      { type: 'list', title: "Digital Centers of Excellence:", items: ["Data analytics CoE", "Cloud CoE", "Automation CoE", "AI/ML CoE", "Cybersecurity CoE"] },
      { type: 'list', title: "Innovation Labs:", items: ["Dedicated team for experimentation", "Rapid prototyping and MVP development", "Fail-fast culture", "Technology scouting"] },

      { type: 'heading', text: "Culture Transformation" },
      { type: 'subheading', text: "Digital Culture Attributes:" },
      { type: 'list', title: "Innovation-Driven:", items: ["Encourage experimentation", "Accept failure as learning", "Dedicate time for innovation (such as 20% time)", "Recognize and reward innovation"] },
      { type: 'list', title: "Customer-Obsessed:", items: ["Customer feedback loops", "Customer metrics in all decisions", "Empower employees to serve customers", "Remove internal silos blocking customer value"] },
      { type: 'list', title: "Data Driven:", items: ["Measure everything", "Use data for decisions, not gut feel", "Democratize data access", "Build data literacy"] },
      { type: 'list', title: "Collaborative:", items: ["Break down silos", "Cross-functional teams", "Knowledge sharing", "Transparent communication"] },
      { type: 'list', title: "Continuous Learning:", items: ["Growth mindset", "Regular training and development", "Learning from failures", "Knowledge management"] },
    ]
  },
  {
    id: "change-management",
    title: "Change Management",
    icon: Users2,
    content: [
      { type: 'heading', text: "Ensure Transformation Sticks" },
      { type: 'paragraph', text: "Technology changes are more straightforward compared to people changes. Our change management approach ensures stakeholder buy-in, smooth adoption, and sustained transformation." },
      
      { type: 'heading', text: "Stakeholder Engagement" },
      { type: 'list', title: "Stakeholder Mapping:", items: ["Identify all affected stakeholders", "Assess influence and impact", "Understand concerns and motivations", "Develop engagement strategy"] },
      
      { type: 'heading', text: "Communication Plan" },
      { type: 'list', title: "Targeted Communication:", items: ["Executive communications covering vision and progress", "Manager communications about implementation details and role expectations", "Employee communications explaining what's changing and how to prepare", "External communications for customers and partners"] },
      { type: 'list', title: "Communication Channels:", items: ["Town halls and all-hands meetings", "Email newsletters", "Intranet and collaboration platforms", "Training sessions", "One-on-one conversations"] },
      { type: 'list', title: "Communication Cadence:", items: ["Weekly updates during active transformation", "Monthly progress reports", "Quarterly leadership reviews", "Ad-hoc for critical updates"] },

      { type: 'heading', text: "Training & Enablement" },
      { type: 'subheading', text: "Training Strategy:" },
      { type: 'list', title: "Role-Based Training:", items: ["Executive: Strategic vision, sponsorship role", "Managers: Change leadership, team support", "End-users: New systems, processes, ways of working", "IT/Support: Technical implementation, troubleshooting"] },
      { type: 'list', title: "Training Formats:", items: ["Instructor-led workshops", "Online self-paced courses", "Video tutorials", "Quick reference guides", "Hands-on labs", "Train-the-trainer programs"] },
      { type: 'list', title: "Enablement Support:", items: ["Help desk and support channels", "Super-users as peer support", "Office hours for questions", "Documentation and knowledge base"] },

      { type: 'heading', text: "Resistance Management" },
      { type: 'subheading', text: "Addressing Resistance:" },
      { type: 'list', title: "Common sources of resistance:", items: ["Fear of job loss or role changes", "Comfort with status quo", "Lack of understanding", "Insufficient skills/confidence", "Distrust of leadership", "Previous change fatigue"] },
      { type: 'image_tag', text: "" },
      { type: 'list', title: "Mitigation Strategies:", items: ["Early involvement of resistors", "Address concerns transparently", "Provide extra support and training", "Celebrate early wins", "Share success stories", "Recognize and reward adoption"] },

      { type: 'heading', text: "Adoption Metrics" },
      { type: 'subheading', text: "Measure Success:" },
      { type: 'list', title: "Track adoption across:", items: ["Usage Metrics: System logins, feature usage, transaction volumes", "Proficiency Metrics: Time to complete tasks, error rates, support tickets", "Satisfaction Metrics: User surveys, Net Promoter Score, feedback", "Business Metrics: Productivity gains, cost savings, quality improvements"] },
      { type: 'list', title: "Continuous Improvement:", items: ["Regular adoption reviews", "User feedback collection", "Issue resolution", "Enhancement prioritization", "Reinforcement training"] },
    ]
  },
  {
    id: "tech-modernization",
    title: "Technology Modernization",
    icon: CloudCog,
    content: [
      { type: 'heading', text: "Modernize Your Technology Foundation" },
      { type: 'paragraph', text: "Transform legacy technology landscapes into modern, cloud-native, API-driven architectures that enable agility, scalability, and innovation." },

      { type: 'heading', text: "Legacy System Assessment" },
      { type: 'list', title: "Evaluate existing systems:", items: ["Technology stack inventory", "Business criticality assessment", "Technical debt quantification", "Integration complexity", "Maintenance cost analysis", "Risk assessment"] },

      { type: 'heading', text: "Modernization Strategies" },
      { type: 'image_tag', text: "" },
      { type: 'list', title: "Rehost using Lift-and-Shift:", items: ["Migrate to cloud with minimal changes", "Fastest approach", "30-40% cost savings", "Limited innovation benefit"] },
      { type: 'list', title: "Replatform:", items: ["Minor optimizations during migration", "Adopt managed services", "40-50% cost savings", "Moderate innovation"] },
      { type: 'list', title: "Refactor:", items: ["Redesign for cloud native", "Microservices architecture", "50-70% cost savings", "High innovation potential"] },
      { type: 'list', title: "Rebuild:", items: ["Complete rewrite", "Modern technology stack", "Maximum long-term benefit", "Highest initial investment"] },
      { type: 'list', title: "Replace:", items: ["Transition to SaaS", "Often most cost-effective", "Fast implementation", "Limited customization"] },

      { type: 'heading', text: "Cloud Migration" },
      { type: 'list', title: "Our comprehensive cloud migration services:", items: ["Multi-cloud strategy for AWS, Azure, and Google Cloud", "Application migration planning and execution", "Data migration with zero data loss", "Network and security design", "Performance optimization", "Cost management"] },
      { type: 'paragraph', text: "See Cloud Services for additional details." },

      { type: 'heading', text: "API & Integration" },
      { type: 'list', title: "API Strategy:", items: ["Design API-first architecture", "RESTful and GraphQL APIs", "API gateway implementation", "Developer portal", "API monetization when applicable"] },
      { type: 'list', title: "Integration Platform:", items: ["Enterprise Service Bus or iPaaS", "Connect legacy and modern systems", "Real-time and batch integration", "Data synchronization", "Event-driven architecture"] },
    ]
  }
];