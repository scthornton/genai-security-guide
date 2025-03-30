
import React from 'react';
import { AlertTriangle, Lightbulb, TrendingUp, BellRing } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface EmergingThreat {
  id: string;
  title: string;
  description: string;
  impactAreas: string[];
  researchLink?: {
    title: string;
    url: string;
  };
}

const emergingThreats: EmergingThreat[] = [
  {
    id: "ELLM01",
    title: "Adversarial Attacks on LLM Perception",
    description: "As LLMs integrate with vision and audio capabilities, they become vulnerable to adversarial examples that can manipulate their understanding of the world. These attacks can cause misinterpretation of images, audio, or other sensory inputs, leading to potentially harmful outputs or actions.",
    impactAreas: [
      "Image recognition systems", 
      "Multimodal AI assistants", 
      "Content moderation systems"
    ],
    researchLink: {
      title: "Adversarial Attacks on Vision-Language Models",
      url: "https://arxiv.org/abs/2306.09265"
    }
  },
  {
    id: "ELLM02",
    title: "LLM-to-LLM Manipulation",
    description: "As LLMs increasingly interact with other LLMs in automated systems, there's a risk of one model manipulating another through carefully crafted outputs. This could lead to escalation of privileges, bypassing of safety mechanisms, or automated misinformation campaigns.",
    impactAreas: [
      "AI agent ecosystems", 
      "Automated negotiation systems", 
      "LLM orchestration frameworks"
    ]
  },
  {
    id: "ELLM03",
    title: "Advanced Persistent Prompting",
    description: "Similar to Advanced Persistent Threats in traditional cybersecurity, these are sophisticated, stealthy, and continuous prompt injection attempts that evolve over time to bypass security measures. They may use multi-session strategies and learn from previous interactions to gradually achieve their goals.",
    impactAreas: [
      "Long-running AI assistants", 
      "Enterprise LLM deployments", 
      "Strategic LLM-powered services"
    ],
    researchLink: {
      title: "Evolution of Jailbreaking Techniques",
      url: "https://arxiv.org/abs/2307.01255"
    }
  },
  {
    id: "ELLM04",
    title: "Chain-of-Systems Vulnerabilities",
    description: "Vulnerabilities that exploit the interaction between LLMs and other systems in a workflow. An attacker might craft inputs that appear harmless to each individual system but cause problematic behavior when processed through the entire chain of systems.",
    impactAreas: [
      "LLM-integrated workflows", 
      "Multi-agent systems", 
      "Complex decision pipelines"
    ]
  },
  {
    id: "ELLM05",
    title: "Synthetic Identity Exploits",
    description: "LLMs can be used to generate extremely convincing synthetic personas that are increasingly difficult to distinguish from real humans. These can be deployed at scale for sophisticated social engineering, reputation attacks, or to influence public opinion.",
    impactAreas: [
      "Identity verification systems", 
      "Social media platforms", 
      "Public discourse forums"
    ],
    researchLink: {
      title: "Synthetic Identities in the Age of LLMs",
      url: "https://arxiv.org/abs/2306.08153"
    }
  }
];

const EmergingThreats: React.FC = () => {
  return (
    <section id="emerging-threats" className="py-12 md:py-16 bg-security-100">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-start justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="h-6 w-6 text-security-700" />
              <h2 className="text-3xl font-bold text-security-900">Emerging LLM Threats - Updated</h2>
            </div>
            <p className="text-gray-600 max-w-2xl">
              Beyond the OWASP Top 10, researchers and security experts are identifying new threat vectors as 
              LLM technologies evolve. These emerging threats may become part of future frameworks.
            </p>
          </div>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {emergingThreats.map((threat) => (
            <Card key={threat.id} className="overflow-hidden h-full flex flex-col border-l-4 border-l-security-600 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2 mb-1">
                  <AlertTriangle className="h-5 w-5 text-security-700" />
                  <CardTitle className="text-xl text-security-800">
                    {threat.title}
                  </CardTitle>
                </div>
                <CardDescription className="text-sm text-gray-500">
                  ID: {threat.id} - Emerging Threat Vector
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-gray-700 mb-4">{threat.description}</p>
                
                <div className="mt-3">
                  <h4 className="text-sm font-medium flex items-center gap-1 mb-2 text-security-800">
                    <BellRing className="h-4 w-4" />
                    Potential Impact Areas:
                  </h4>
                  <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                    {threat.impactAreas.map((area, index) => (
                      <li key={index}>{area}</li>
                    ))}
                  </ul>
                </div>
                
                {threat.researchLink && (
                  <div className="mt-4 pt-3 border-t border-gray-100">
                    <a 
                      href={threat.researchLink.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-security-600 hover:text-security-800 transition-colors"
                    >
                      <Lightbulb className="h-4 w-4 mr-1" />
                      {threat.researchLink.title}
                    </a>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmergingThreats;
