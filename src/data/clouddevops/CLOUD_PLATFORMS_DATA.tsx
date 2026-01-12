import { 
  Cloud, 
  Server, 
  Database, 
  Cpu, 
  ShieldCheck, 
  Globe,
  Zap,
  Box,
  Award
} from "lucide-react";

export const CLOUD_PLATFORMS_DATA = {
  header: {
    badge: "Technical Stack",
    title: "Multi-Cloud",
    titleHighlight: "Expertise",
    description: "Our engineers are certified and experienced across the top three public cloud providers, enabling us to deliver truly agnostic and optimized cloud solutions."
  },
  platforms: [
    {
      id: "aws",
      name: "Amazon Web Services",
      shortName: "AWS",
      description: "The world's most comprehensive and broadly adopted cloud platform.",
      color: "from-[#FF9900] to-[#FFC46D]", // AWS Orange-ish gradient adaptation
      stats: "200+ Services",
      coreServices: [
        "EC2 (Elastic Compute Cloud)",
        "S3 (Simple Storage Service)",
        "RDS, Aurora, DynamoDB",
        "Lambda (Serverless)",
        "ECS, EKS (Container Services)",
        "CloudFront (CDN)",
        "Route 53 (DNS)",
        "VPC (Networking)"
      ],
      advancedServices: [
        "SageMaker (Machine Learning)",
        "Kinesis (Streaming)",
        "Redshift (Data Warehouse)",
        "EMR (Big Data Processing)",
        "Glue (ETL)",
        "Step Functions (Workflows)"
      ],
      certifications: [
        "AWS Solutions Architect Professional",
        "AWS DevOps Engineer Professional",
        "AWS Security Specialty",
        "AWS Advanced Networking"
      ]
    },
    {
      id: "azure",
      name: "Microsoft Azure",
      shortName: "Azure",
      description: "Open and flexible cloud computing platform tailored for enterprise.",
      color: "from-[#0078D4] to-[#5EA0EE]", // Azure Blue gradient adaptation
      stats: "Enterprise Ready",
      coreServices: [
        "Virtual Machines",
        "Azure Storage, Blob Storage",
        "Azure SQL Database, Cosmos DB",
        "Azure Functions (Serverless)",
        "Azure Kubernetes Service (AKS)",
        "Azure CDN",
        "Azure DNS",
        "Virtual Networks"
      ],
      advancedServices: [
        "Azure Machine Learning",
        "Azure Synapse Analytics",
        "Azure Data Factory",
        "Azure Databricks",
        "Azure Stream Analytics",
        "Logic Apps"
      ],
      certifications: [
        "Azure Solutions Architect Expert",
        "Azure DevOps Engineer Expert",
        "Azure Security Engineer",
        "Azure Data Engineer"
      ]
    },
    {
      id: "gcp",
      name: "Google Cloud Platform",
      shortName: "GCP",
      description: "High-performance infrastructure for data analytics and machine learning.",
      color: "from-[#4285F4] to-[#34A853]", // Google Blue/Green gradient adaptation
      stats: "Data & AI Leader",
      coreServices: [
        "Compute Engine",
        "Cloud Storage",
        "Cloud SQL, Cloud Spanner, Firestore",
        "Cloud Functions (Serverless)",
        "Google Kubernetes Engine (GKE)",
        "Cloud CDN",
        "Cloud DNS",
        "VPC"
      ],
      advancedServices: [
        "Vertex AI (Machine Learning)",
        "BigQuery (Analytics)",
        "Dataflow (Stream Processing)",
        "Pub/Sub (Messaging)",
        "Cloud Composer (Workflows)"
      ],
      certifications: [
        "Google Cloud Professional Architect",
        "Google Cloud Professional DevOps Engineer",
        "Google Cloud Professional Data Engineer"
      ]
    }
  ]
};