
import React from 'react';
import { AlertCircle, Calendar, Link as LinkIcon, ExternalLink, AlertTriangle, Info, Shield, Tag } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface Incident {
  id: number;
  title: string;
  description: string;
  date: string;
  relatedThreatIds: string[];
  impactLevel: 'low' | 'medium' | 'high' | 'critical';
  details: string;
  consequences: string[];
  lessons: string[];
  source: {
    name: string;
    url: string;
  };
}

const incidents: Incident[] = [
  {
    id: 1,
    title: "ChatGPT Jailbreak with DAN Prompt",
    description: "Users discovered they could bypass ChatGPT's content restrictions by using the 'Do Anything Now' (DAN) prompt instruction, causing the model to ignore its safety guidelines and generate prohibited content.",
    date: "February 2023",
    impactLevel: 'high',
    details: "The DAN (Do Anything Now) prompt was one of the first widely successful jailbreak techniques. By instructing the model to role-play as an AI without restrictions, users could trick ChatGPT into generating content that would normally be filtered. This exploit highlighted the vulnerability of LLMs to carefully crafted prompts that could undermine their built-in safety mechanisms.",
    consequences: [
      "Generation of harmful content including misinformation and unethical advice",
      "Erosion of trust in AI safety guidelines",
      "Forced rapid development of more robust safety mechanisms"
    ],
    lessons: [
      "Simple text instructions can override complex safety systems in LLMs",
      "Safety mechanisms need to be deeply integrated into model behavior, not just added as filters",
      "Adversarial testing needs to be continuously performed as new jailbreak techniques emerge"
    ],
    relatedThreatIds: ["LLM01", "LLM09"],
    source: {
      name: "Various tech publications",
      url: "https://www.theregister.com/2023/02/09/chatgpt_dan_jailbreak/"
    }
  },
  {
    id: 2,
    title: "Samsung Employees Leaked Confidential Data via ChatGPT",
    description: "Samsung employees inadvertently leaked sensitive company information by uploading it to ChatGPT for analysis, highlighting the risks of sharing proprietary data with LLMs without proper safeguards.",
    date: "April 2023",
    impactLevel: 'critical',
    details: "Three separate incidents involving Samsung employees resulted in sensitive internal data being exposed to ChatGPT. In one case, an engineer uploaded source code to debug an error; in another, meeting notes containing confidential product strategy information were shared. The incidents led to Samsung temporarily banning the use of generative AI tools and implementing stricter data handling policies.",
    consequences: [
      "Potential exposure of Samsung's intellectual property to competitors",
      "Risk of proprietary code being incorporated into AI training data",
      "Corporate-wide restrictions on AI tool usage, reducing productivity"
    ],
    lessons: [
      "Organizations need clear policies on what data can be shared with external AI systems",
      "Employees require training on the risks of using public LLMs with sensitive information",
      "Enterprise-grade LLM solutions with proper data protection are essential for corporate environments"
    ],
    relatedThreatIds: ["LLM06", "LLM09"],
    source: {
      name: "Bloomberg",
      url: "https://www.bloomberg.com/news/articles/2023-05-02/samsung-bans-chatgpt-and-other-generative-ai-use-after-data-leak"
    }
  },
  {
    id: 3,
    title: "Italian DPA Temporarily Banned ChatGPT Over Data Privacy Concerns",
    description: "Italy's data protection authority temporarily banned ChatGPT over concerns about unauthorized collection of personal data and lack of age verification mechanisms for minors.",
    date: "March 2023",
    impactLevel: 'high',
    details: "The Italian data protection authority (Garante) ordered OpenAI to stop processing Italian users' data, effectively blocking the service in Italy. The authority cited concerns about the lack of information provided to users about data collection, the absence of a legal basis for mass collection of personal data for training algorithms, and the lack of age verification systems to protect minors from inappropriate content.",
    consequences: [
      "Temporary unavailability of ChatGPT in Italy",
      "Increased regulatory scrutiny of AI systems across Europe",
      "Forced implementation of improved privacy practices by OpenAI"
    ],
    lessons: [
      "AI companies must ensure GDPR compliance even during rapid growth phases",
      "Proper age verification and content filtering mechanisms are regulatory requirements, not optional features",
      "Transparency about data collection and processing is essential for building trust"
    ],
    relatedThreatIds: ["LLM06"],
    source: {
      name: "CNBC",
      url: "https://www.cnbc.com/2023/03/31/italy-blocks-chatgpt-over-privacy-concerns.html"
    }
  },
  {
    id: 4,
    title: "Researchers Extracted Training Data from GPT Models",
    description: "Princeton researchers demonstrated that large language models could be manipulated to regurgitate parts of their training data verbatim, including private information, by using specific prompting techniques.",
    date: "December 2022",
    impactLevel: 'high',
    details: "The research team discovered that when prompted in specific ways, GPT models would reproduce exact sequences from their training data, including personal information, source code, and copyrighted content. This vulnerability revealed fundamental issues with how LLMs memorize and reproduce sensitive information, raising serious privacy and copyright concerns.",
    consequences: [
      "Exposure of potentially sensitive or private information contained in training data",
      "Legal risks related to copyright infringement and privacy violations",
      "Need for fundamental rethinking of training data filtering and model architecture to prevent memorization"
    ],
    lessons: [
      "LLMs can act as inadvertent storage mechanisms for private and copyrighted content",
      "Simple retrieval techniques can extract this memorized content, bypassing intended limitations",
      "More robust techniques for training data sanitization are needed"
    ],
    relatedThreatIds: ["LLM01", "LLM06"],
    source: {
      name: "Princeton University",
      url: "https://arxiv.org/abs/2012.07805"
    }
  },
  {
    id: 5,
    title: "SQL Injection via ChatGPT-Generated Code",
    description: "Security researchers found that ChatGPT often generates vulnerable code snippets, including SQL injection vulnerabilities, when asked to create database-connected applications without explicit security requirements.",
    date: "January 2023",
    impactLevel: 'medium',
    details: "Researchers analyzed code generated by ChatGPT for database applications and found that unless explicitly instructed to write secure code, the model frequently produced code vulnerable to SQL injection attacks. When developers copy-pasted this code into production systems without review, they inadvertently introduced security vulnerabilities.",
    consequences: [
      "Introduction of exploitable vulnerabilities into production systems",
      "Potential data breaches from SQL injection attacks",
      "False sense of security when using AI-generated code"
    ],
    lessons: [
      "AI-generated code should never be used in production without security review",
      "LLMs need to be explicitly instructed to prioritize security best practices",
      "Developers must understand the security implications of the code they implement, regardless of source"
    ],
    relatedThreatIds: ["LLM02", "LLM09"],
    source: {
      name: "Check Point Research",
      url: "https://research.checkpoint.com/2023/dangers-of-chatgpt-security-risks-with-the-revolutionary-ai-chatbot/"
    }
  },
  {
    id: 6,
    title: "LLM-Based Phishing Attacks",
    description: "Cybercriminals have begun using LLMs to craft highly convincing phishing emails and messages that are more grammatically correct, contextually appropriate, and persuasive than traditional phishing attempts.",
    date: "July 2023",
    impactLevel: 'critical',
    details: "Security firms reported a significant rise in sophisticated phishing campaigns powered by LLMs. These attacks feature personalized content, flawless grammar, and contextual awareness that make them much harder to identify as fraudulent. In some cases, the attacks incorporated information scraped from social media to create highly targeted messages that referenced real events or relationships.",
    consequences: [
      "Higher success rates for phishing attacks against both individuals and organizations",
      "Increased difficulty in training users to identify phishing attempts",
      "Need for more advanced technical controls to detect AI-generated malicious content"
    ],
    lessons: [
      "LLMs dramatically lower the barrier to entry for creating sophisticated social engineering attacks",
      "Traditional phishing indicators (poor grammar, generic greetings) are no longer reliable",
      "Both technical and human defenses need to evolve to address AI-enhanced threats"
    ],
    relatedThreatIds: ["LLM09", "LLM02"],
    source: {
      name: "Darktrace Research",
      url: "https://darktrace.com/blog/ai-enabled-spear-phishing"
    }
  }
];

const getImpactLevelColor = (level: Incident['impactLevel']) => {
  switch (level) {
    case 'critical':
      return 'bg-threat-critical text-white';
    case 'high':
      return 'bg-threat-high text-white';
    case 'medium':
      return 'bg-threat-medium text-black';
    case 'low':
      return 'bg-threat-low text-black';
    default:
      return 'bg-gray-500 text-white';
  }
};

const RealWorldIncidents: React.FC = () => {
  return (
    <section id="incidents" className="py-12 md:py-16 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3 text-security-900">Real-World LLM Security Incidents</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Documented cases where LLM security vulnerabilities have led to actual security incidents
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {incidents.map((incident) => (
            <Card key={incident.id} className="overflow-hidden h-full flex flex-col">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="h-5 w-5 text-threat-high" />
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{incident.date}</span>
                    </div>
                  </div>
                  <Badge className={getImpactLevelColor(incident.impactLevel)}>
                    {incident.impactLevel.charAt(0).toUpperCase() + incident.impactLevel.slice(1)} Impact
                  </Badge>
                </div>
                <CardTitle className="text-xl text-security-800">{incident.title}</CardTitle>
                <CardDescription className="text-sm text-gray-500">
                  Related to: {incident.relatedThreatIds.map((id, index) => (
                    <React.Fragment key={id}>
                      <a href={`#${id}`} className="text-security-700 hover:underline">
                        {id}
                      </a>
                      {index < incident.relatedThreatIds.length - 1 ? ', ' : ''}
                    </React.Fragment>
                  ))}
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-4 flex-grow">
                <p className="text-gray-700 mb-4">{incident.description}</p>
                
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="details">
                    <AccordionTrigger className="text-sm font-medium text-security-700 py-2">
                      <div className="flex items-center gap-1">
                        <Info className="h-4 w-4" />
                        Detailed Analysis
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="text-sm text-gray-700 space-y-3 pt-1">
                        <p>{incident.details}</p>
                        
                        <div>
                          <h4 className="font-medium text-security-800 mb-1 flex items-center gap-1">
                            <AlertTriangle className="h-4 w-4" />
                            Consequences:
                          </h4>
                          <ul className="list-disc pl-5 space-y-1">
                            {incident.consequences.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-security-800 mb-1 flex items-center gap-1">
                            <Shield className="h-4 w-4" />
                            Key Lessons:
                          </h4>
                          <ul className="list-disc pl-5 space-y-1">
                            {incident.lessons.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
              <CardFooter className="pt-2 border-t">
                <a 
                  href={incident.source.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-sm text-security-600 hover:text-security-800 transition-colors"
                >
                  <LinkIcon className="h-4 w-4 mr-1" />
                  {incident.source.name}
                  <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RealWorldIncidents;
