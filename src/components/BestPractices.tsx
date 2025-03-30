
import React from 'react';
import { Check, Zap, Shield, Lock, Eye, Server, Users, Command, Database, FileCode } from 'lucide-react';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface BestPractice {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  recommendations: string[];
}

const bestPractices: BestPractice[] = [
  {
    id: "prompt-engineering",
    title: "Secure Prompt Engineering",
    description: "Design and implement prompts that minimize the risk of injection attacks and unintended behaviors.",
    icon: <Command className="h-5 w-5" />,
    recommendations: [
      "Use system prompts to establish clear boundaries and constraints",
      "Implement separate prompts for user input validation and task execution",
      "Include explicit instructions against executing malicious commands",
      "Avoid patterns that encourage the model to ignore its safety guidelines",
      "Test prompts extensively with adversarial inputs before deployment"
    ]
  },
  {
    id: "input-validation",
    title: "Input Validation and Sanitization",
    description: "Implement robust validation of all inputs before they reach your LLM to prevent injection attacks.",
    icon: <Shield className="h-5 w-5" />,
    recommendations: [
      "Apply length limits to prevent token stuffing attacks",
      "Use allowlists for permitted characters and patterns",
      "Implement content filtering to detect known attack patterns",
      "Strip or escape special characters that could be used for prompt injection",
      "Rate-limit API requests to prevent brute-force attacks"
    ]
  },
  {
    id: "output-handling",
    title: "Output Processing and Validation",
    description: "Never trust LLM outputs directly, especially when they influence system operations.",
    icon: <FileCode className="h-5 w-5" />,
    recommendations: [
      "Sanitize all LLM outputs before displaying them to users",
      "Use content security policies to prevent XSS attacks",
      "Implement format validation for structured outputs (JSON, XML, etc.)",
      "Apply parameterized queries when using LLM outputs in database operations",
      "Verify that outputs meet expected formats before using them in critical operations"
    ]
  },
  {
    id: "monitoring",
    title: "Monitoring and Logging",
    description: "Implement comprehensive monitoring to detect and respond to security incidents.",
    icon: <Eye className="h-5 w-5" />,
    recommendations: [
      "Log all prompt-response pairs for security-sensitive operations",
      "Implement automated detection for unusual patterns or toxic outputs",
      "Set up alerts for suspected prompt injection attempts",
      "Use semantic analysis to identify potential data leakage in outputs",
      "Regularly audit logs to identify emerging attack patterns"
    ]
  },
  {
    id: "data-protection",
    title: "Data Protection Strategies",
    description: "Protect sensitive data from being exposed through or to LLM systems.",
    icon: <Database className="h-5 w-5" />,
    recommendations: [
      "Implement data minimization principles in system design",
      "Use differential privacy techniques for sensitive training data",
      "Employ strong authentication and authorization for LLM access",
      "Implement PII detection and redaction in all inputs to LLMs",
      "Use secure channels for all communications with LLM services"
    ]
  },
  {
    id: "deployment",
    title: "Secure Deployment Architecture",
    description: "Design your deployment architecture with security as a primary consideration.",
    icon: <Server className="h-5 w-5" />,
    recommendations: [
      "Implement defense in depth with multiple security layers",
      "Use separate environments for development, testing, and production",
      "Employ least privilege principles for all system components",
      "Implement secure API gateways for all LLM service calls",
      "Use containerization and isolation to limit potential damage from breaches"
    ]
  },
  {
    id: "human-oversight",
    title: "Human Oversight and Governance",
    description: "Maintain appropriate human supervision for LLM systems, especially for high-risk operations.",
    icon: <Users className="h-5 w-5" />,
    recommendations: [
      "Implement human-in-the-loop verification for critical operations",
      "Establish clear escalation paths for suspected security issues",
      "Conduct regular security reviews of LLM system operations",
      "Train staff to recognize and respond to LLM-specific security risks",
      "Document decision-making processes for LLM system design and operation"
    ]
  }
];

const BestPractices: React.FC = () => {
  return (
    <section id="best-practices" className="py-12 md:py-16 bg-security-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3 text-security-900">LLM Security Best Practices</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Essential security practices for building and maintaining secure LLM applications
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {bestPractices.map((practice) => (
              <AccordionItem key={practice.id} value={practice.id} className="bg-white mb-4 rounded-lg border border-gray-200 overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                  <div className="flex items-center text-left">
                    <div className="bg-security-100 p-2 rounded-full mr-4">
                      <div className="text-security-700">
                        {practice.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-security-800">{practice.title}</h3>
                      <p className="text-sm text-gray-600">{practice.description}</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <ul className="space-y-2 mt-2">
                    {practice.recommendations.map((recommendation, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-security-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{recommendation}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default BestPractices;
