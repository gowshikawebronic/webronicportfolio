export const FAQ_DATA = {
  header: {
    badge: "Support",
    title: "Frequently Asked",
    titleHighlight: "Questions",
    description: "Everything you need to know about our cloud services, migration process, and security protocols."
  },
  items: [
    {
      question: "How long does cloud migration take?",
      answer: "Timeline depends on the number and complexity of applications. Small migrations (10-20 applications) typically complete in 3-6 months. Large enterprise migrations can take 12-24 months. We use phased approaches to deliver value early."
    },
    {
      question: "Will migration cause downtime?",
      answer: "Most migrations can be executed with zero or minimal downtime using blue-green deployment strategies, data replication, and careful cutover planning. Critical applications typically experience <4 hours of downtime during final cutover."
    },
    {
      question: "How much will cloud migration cost?",
      answer: "Migration costs typically range from 10-20% of annual infrastructure spend. A company spending $500K annually on infrastructure might invest $50-100K in migration. However, post-migration savings usually recover this investment within 12-18 months."
    },
    {
      question: "Is cloud more secure than on-premise?",
      answer: "Cloud platforms offer enterprise-grade security capabilities often exceeding what organizations can implement on-premise. However, security is a shared responsibility. We implement comprehensive security controls to ensure cloud deployments are highly secure."
    },
    {
      question: "What happens to our data during migration?",
      answer: "We use secure data transfer methods including encrypted connections and physical data transfer appliances for large datasets. Data integrity is verified at every step with zero tolerance for data loss."
    },
    {
      question: "Can we migrate back to on-premise if needed?",
      answer: "Yes, though rare. We design architectures avoiding vendor lock-in where possible. However, cloud-native services may make reversing migration complex and expensive."
    },
    {
      question: "How do you handle compliance requirements?",
      answer: "Cloud platforms offer compliance certifications for most regulatory frameworks (HIPAA, PCI DSS, GDPR, SOC 2). We implement additional controls specific to your compliance requirements and assist with audits."
    },
    {
      question: "What about our legacy applications?",
      answer: "Legacy applications can be migrated using lift-and-shift approaches with minimal modification. Alternatively, we can modernize during migration or help you identify SaaS replacements."
    },
    {
      question: "How do you control cloud costs?",
      answer: "We implement comprehensive cost management including right-sizing, reserved instances, auto-scaling, monitoring, and monthly optimization reviews. Typical clients see 30-40% cost reductions through optimization."
    },
    {
      question: "Do you provide ongoing cloud management?",
      answer: "Yes, we offer managed cloud services including 24/7 monitoring, security management, cost optimization, performance tuning, and support."
    }
  ],
  cta: {
    text: "Still have questions regarding our services?",
    buttonText: "Contact Support"
  }
};