import { 
  Brain, 
  Plane, 
  Cpu, 
  Globe, 
  Coins, 
  Shield 
} from "lucide-react";

export const CORE_SERVICES_DATA = {
  header: {
    badge: "Core Expertise",
    title: "Comprehensive",
    titleHighlight: "Cloud Services"
  },
  services: [
    {
      id: "strategy",
      icon: Brain,
      title: "Cloud Strategy & Consulting",
      intro: "Successful cloud adoption requires strategic planning that aligns technology decisions with business objectives. Our cloud consulting services help you navigate the complex cloud landscape and make informed decisions.",
      contentBlocks: [
        {
          heading: "Cloud Readiness Assessment",
          text: "Evaluate your applications, infrastructure, and organization to determine cloud readiness. We analyze technical dependencies, data requirements, compliance needs, and team capabilities to create a comprehensive readiness report."
        },
        {
          heading: "Cloud Strategy Development",
          text: "Define your cloud vision, objectives, and roadmap. We help you choose between public, private, or hybrid cloud models, select optimal cloud providers, and establish governance frameworks."
        },
        {
          heading: "Application Portfolio Analysis",
          text: "Assess each application to determine the best migration strategy: rehost (lift-and-shift), replatform, refactor, or rebuild. We prioritize applications based on business value, technical complexity, and cloud suitability."
        },
        {
          heading: "Total Cost of Ownership (TCO) Analysis",
          text: "Compare current infrastructure costs with projected cloud costs. Our TCO models account for compute, storage, networking, licensing, management, and hidden costs to provide accurate financial projections."
        },
        {
          heading: "Cloud Architecture Design",
          text: "Design scalable, secure, resilient cloud architectures aligned with your requirements. We create reference architectures, select appropriate services, and establish design principles."
        },
        {
          heading: "Migration Planning",
          text: "Develop detailed migration plans including timelines, resource requirements, risk mitigation strategies, and rollback procedures. Our plans minimize business disruption while accelerating time-to-value."
        }
      ],
      listType: "Deliverables",
      listItems: [
        "Cloud strategy document",
        "Application migration roadmap",
        "TCO and ROI models",
        "Reference architectures",
        "Risk assessment and mitigation plans"
      ]
    },
    {
      id: "migration",
      icon: Plane,
      title: "Cloud Migration Services",
      intro: "Migrating to the cloud requires careful planning and flawless execution. Our proven migration methodology ensures seamless transitions with minimal risk and disruption.",
      contentBlocks: [
        {
          heading: "Migration Strategies",
          isGroupHeader: true,
          subItems: [
            { title: "Rehost (Lift-and-Shift)", desc: "Migrate applications to the cloud with minimal modifications. This is the fastest migration approach, typically delivering 30-40% cost savings immediately. Ideal for applications requiring quick migration or with limited documentation." },
            { title: "Replatform", desc: "Make targeted optimizations during migration to leverage cloud capabilities. This requires moderate effort with 40-50% cost savings and improved performance. Common replatforming includes moving to managed databases or containerization." },
            { title: "Refactor/Re-architect", desc: "Redesign applications to be cloud-native, leveraging services like serverless, containers, and managed services. This approach delivers the highest long-term value with 50-70% cost savings and significant scalability improvements." },
            { title: "Rebuild", desc: "Completely rewrite applications using cloud-native architectures and services. This delivers maximum cloud benefits but requires the highest initial investment. Recommended when existing applications are outdated or don't meet current needs." },
            { title: "Replace", desc: "Transition to SaaS alternatives instead of migrating existing applications. Often the most cost effective option for common business functions." }
          ]
        },
        {
          heading: "Migration Process",
          isGroupHeader: true,
          subItems: [
            { title: "Phase 1: Discovery & Assessment (2-4 weeks)", desc: "Application inventory and dependencies mapping, Performance baseline establishment, Data volume and complexity analysis, Compliance and security requirements review" },
            { title: "Phase 2: Migration Planning (3-6 weeks)", desc: "Detailed migration approach for each application, Migration wave planning and sequencing, Resource allocation and timeline development, Test and validation strategy" },
            { title: "Phase 3: Proof of Concept (4-8 weeks)", desc: "Pilot migration of representative applications, Performance and cost validation, Process refinement, Stakeholder training" },
            { title: "Phase 4: Migration Execution (3-12 months)", desc: "Application migration in planned waves, Data synchronization and cutover, Testing and validation, Rollback capability maintenance" },
            { title: "Phase 5: Optimization (Ongoing)", desc: "Performance tuning, Cost optimization, Security hardening, Continuous improvement" }
          ]
        }
      ],
      listType: "Migration Success Metrics",
      listItems: [
        "99.9%+ successful migrations",
        "<4 hours average downtime per application",
        "35-50% cost reduction post-migration",
        "Zero data loss"
      ]
    },
    {
      id: "native",
      icon: Cpu,
      title: "Cloud Native Development",
      intro: "Build applications designed specifically for cloud environments, leveraging cloud services for maximum scalability, resilience, and agility.",
      contentBlocks: [
        {
          heading: "Cloud Native Architecture Principles",
          isGroupHeader: true,
          subItems: [
            { title: "Microservices Architecture", desc: "Decompose applications into small, independent services that can be developed, deployed, and scaled independently. Each microservice owns its data and communicates via APIs." },
            { title: "Containerization", desc: "Package applications with all dependencies using Docker containers. Deploy containers on orchestration platforms like Kubernetes, AWS ECS, or Azure Container Instances." },
            { title: "Serverless Computing", desc: "Build event-driven applications using serverless functions (AWS Lambda, Azure Functions, Google Cloud Functions). Pay only for actual execution time with automatic scaling." },
            { title: "API-First Design", desc: "Design APIs before implementation, ensuring clean interfaces between services. Use API gateways for security, throttling, and monitoring." },
            { title: "DevOps Integration", desc: "Implement CI/CD pipelines for automated testing and deployment. Infrastructure as Code for reproducible, version-controlled infrastructure." }
          ]
        },
        {
          heading: "Cloud Native Technologies",
          isGroupHeader: true,
          subItems: [
            { title: "Container Orchestration", desc: "Kubernetes (EKS, AKS, GKE), Docker Swarm, AWS ECS/Fargate, Azure Container Instances" },
            { title: "Serverless Platforms", desc: "AWS Lambda with API Gateway, Azure Functions with Logic Apps, Google Cloud Functions with Cloud Run, Event-driven architectures" },
            { title: "Managed Databases", desc: "Amazon RDS, Aurora, DynamoDB; Azure SQL Database, Cosmos DB; Google Cloud SQL, Firestore, Spanner" },
            { title: "Message Queues & Event Streaming", desc: "Amazon SQS, SNS, Kinesis; Azure Service Bus, Event Hub; Google Pub/Sub, Dataflow; Apache Kafka on cloud" }
          ]
        }
      ],
      listType: "Application Benefits",
      listItems: [
        "10x faster deployment frequency",
        "90% reduction in deployment failures",
        "Automatic scaling from 1 to 1000s of users",
        "99.99% availability"
      ]
    },
    {
      id: "multicloud",
      icon: Globe,
      title: "Multi-Cloud & Hybrid Cloud",
      intro: "Avoid vendor lock-in and optimize workload placement across multiple cloud providers while integrating with on-premises infrastructure.",
      contentBlocks: [
        {
          heading: "Multi-Cloud Strategy",
          isGroupHeader: true,
          subItems: [
            { title: "Workload Optimization", desc: "Place workloads on the optimal cloud platform based on cost, performance, compliance, and feature requirements. AWS for compute-intensive workloads, Azure for Microsoft integration, GCP for data analytics." },
            { title: "Cloud Management Platform", desc: "Unified management across cloud providers using tools like: HashiCorp Terraform for infrastructure as code, CloudHealth or CloudCheckr for cost management, Datadog or New Relic for monitoring, Custom portals for governance" },
            { title: "Disaster Recovery & Business Continuity", desc: "Implement cross-cloud backup and failover. Primary workloads on one cloud with automated failover to another provider ensuring business continuity." }
          ]
        },
        {
          heading: "Hybrid Cloud Integration",
          isGroupHeader: true,
          subItems: [
            { title: "On-Premise to Cloud Connectivity", desc: "Secure, high-bandwidth connections using AWS Direct Connect, Azure ExpressRoute, or Google Cloud Interconnect. VPN solutions for smaller requirements." },
            { title: "Hybrid Application Architecture", desc: "Applications spanning on-premise and cloud environments with seamless data synchronization and service integration." },
            { title: "Edge Computing", desc: "Process data at edge locations with synchronization to central cloud. AWS Outposts, Azure Stack, Google Anthos for consistent cloud experience on-premise." },
            { title: "Data Synchronization", desc: "Real-time or batch data replication between on-premises and cloud using AWS DataSync, Azure Data Factory, or custom ETL pipelines." }
          ]
        }
      ]
    },
    {
      id: "cost",
      icon: Coins,
      title: "Cloud Cost Optimization",
      intro: "Reduce cloud spending by 30-50% while maintaining or improving performance through systematic optimization.",
      contentBlocks: [
        {
          heading: "Cost Optimization Strategies",
          isGroupHeader: true,
          subItems: [
            { title: "Right-Sizing Resources", desc: "Analyze actual usage patterns and resize instances to match requirements. Identify over-provisioned resources and downsize appropriately. Average savings: 20-30%." },
            { title: "Reserved Instances & Savings Plans", desc: "Commit to 1-3 year terms for predictable workloads, achieving 40-70% discounts compared to on-demand pricing." },
            { title: "Spot Instances", desc: "Use spot instances for fault-tolerant workloads like batch processing, data analysis, and development environments, saving 70-90% compared to on-demand." },
            { title: "Auto-Scaling Implementation", desc: "Automatically scale resources based on actual demand. Scale down during off-peak hours, weekends, and holidays." },
            { title: "Storage Optimization", desc: "Move infrequently accessed data to cheaper storage tiers. Implement lifecycle policies for automated tiering. Delete unused snapshots and volumes." },
            { title: "Network Cost Reduction", desc: "Optimize data transfer patterns, implement caching, and use CDN services to reduce expensive cross-region and internet transfer costs." },
            { title: "Unused Resource Cleanup", desc: "Identify and eliminate orphaned resources: unattached EBS volumes, unused elastic IPs, old snapshots, abandoned load balancers." },
            { title: "Cost Monitoring & Alerting", desc: "Real-time cost tracking with automated alerts for anomalies. Monthly cost reviews and optimization recommendations." }
          ]
        }
      ],
      listType: "Typical Cost Savings",
      listItems: [
        "30-40% overall cloud cost reduction",
        "50-60% savings on compute through right-sizing",
        "40-50% savings on storage through tiering",
        "20-30% savings on network through optimization"
      ]
    },
    {
      id: "security",
      icon: Shield,
      title: "Cloud Security & Compliance",
      intro: "Protect cloud workloads with enterprise-grade security controls and maintain compliance with industry regulations.",
      contentBlocks: [
        {
          heading: "Cloud Security Services",
          isGroupHeader: true,
          subItems: [
            { title: "Identity & Access Management", desc: "Implement principle of least privilege with role-based access control. Multi-factor authentication, single sign-on, and automated access reviews." },
            { title: "Network Security", desc: "Virtual private clouds, security groups, network ACLs, and web application firewalls. Micro-segmentation isolating workloads and preventing lateral movement." },
            { title: "Data Encryption", desc: "Encryption at rest and in transit using cloud first services. Key management with AWS KMS, Azure Key Vault, or Google Cloud KMS. Automated encryption policies." },
            { title: "Security Monitoring", desc: "Continuous monitoring using cloud first tools (AWS GuardDuty, Azure Security Center, Google Security Command Center) plus third-party SIEM integration." },
            { title: "Vulnerability Management", desc: "Automated vulnerability scanning, patch management, and security assessment. Container image scanning and infrastructure as code security analysis." }
          ]
        },
        {
          heading: "Compliance Management",
          text: "Maintain compliance with regulations including: GDPR, HIPAA, PCI DSS, SOC 2 Type II, ISO 27001, FedRAMP."
        }
      ],
      listType: "Security Best Practices",
      listItems: [
        "Zero-trust architecture",
        "Security by design",
        "Automated security controls",
        "Regular security assessments",
        "Incident response planning"
      ],
      secondaryListType: "Compliance Frameworks",
      secondaryListItems: [
        "Automated compliance monitoring",
        "Audit trail maintenance",
        "Policy enforcement",
        "Regular compliance reporting",
        "Third-party audit support"
      ]
    }
  ]
};