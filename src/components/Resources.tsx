
import React from 'react';
import { ExternalLink, Book, FileText, Globe } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// Define the Shield component before using it
const Shield = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const resources = [
  {
    title: "OWASP LLM Top 10",
    description: "The official OWASP documentation on the Top 10 LLM security vulnerabilities.",
    link: "https://owasp.org/www-project-top-10-for-large-language-model-applications/",
    icon: <Globe className="h-5 w-5" />
  },
  {
    title: "AI Security Alliance",
    description: "Resources and guidelines for securing AI systems from the AI Security Alliance.",
    link: "https://www.aisa.org/",
    icon: <Shield className="h-5 w-5" />
  },
  {
    title: "NIST AI Risk Management Framework",
    description: "National Institute of Standards and Technology framework for AI risk management.",
    link: "https://www.nist.gov/itl/ai-risk-management-framework",
    icon: <FileText className="h-5 w-5" />
  },
  {
    title: "Microsoft AI Security Best Practices",
    description: "Security best practices for AI systems from Microsoft.",
    link: "https://learn.microsoft.com/en-us/security/ai-security/",
    icon: <Book className="h-5 w-5" />
  }
];

const Resources: React.FC = () => {
  return (
    <section id="resources" className="py-12 md:py-16 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-10 text-security-900">Additional Resources</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource, index) => (
            <Card key={index} className="h-full flex flex-col">
              <CardHeader>
                <div className="mb-2 text-security-500">
                  {resource.icon}
                </div>
                <CardTitle className="text-security-800">{resource.title}</CardTitle>
                <CardDescription>{resource.description}</CardDescription>
              </CardHeader>
              <CardFooter className="mt-auto pt-4">
                <Button 
                  variant="outline" 
                  className="w-full text-security-700 border-security-200 hover:bg-security-50"
                  asChild
                >
                  <a href={resource.link} target="_blank" rel="noopener noreferrer">
                    Visit Resource <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;
