
import React from 'react';
import { AlertTriangle, ShieldCheck, Brain } from 'lucide-react';

const Introduction: React.FC = () => {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-10 text-security-900">Understanding LLM Security Risks</h2>
        
        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="lead mb-6">
            As generative AI and Large Language Models (LLMs) rapidly transform our digital landscape, 
            they introduce unique security challenges that traditional application security approaches 
            may not fully address.
          </p>
          
          <p className="mb-6">
            The Open Worldwide Application Security Project (OWASP) has developed the Top 10 LLM Threats list 
            to help organizations identify and mitigate the most critical security risks associated with LLM applications. 
            This comprehensive framework addresses vulnerabilities specific to generative AI systems, from prompt 
            injection attacks to data poisoning.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 my-10">
            <div className="bg-security-50 p-6 rounded-lg border border-security-100 flex flex-col items-center text-center">
              <AlertTriangle className="h-10 w-10 text-threat-high mb-3" />
              <h3 className="text-lg font-semibold mb-2">Emerging Threats</h3>
              <p className="text-sm">New attack vectors that specifically target the unique architecture and capabilities of LLMs</p>
            </div>
            
            <div className="bg-security-50 p-6 rounded-lg border border-security-100 flex flex-col items-center text-center">
              <ShieldCheck className="h-10 w-10 text-security-600 mb-3" />
              <h3 className="text-lg font-semibold mb-2">Security Practices</h3>
              <p className="text-sm">Evolving best practices and controls to protect LLM applications and their users</p>
            </div>
            
            <div className="bg-security-50 p-6 rounded-lg border border-security-100 flex flex-col items-center text-center">
              <Brain className="h-10 w-10 text-security-500 mb-3" />
              <h3 className="text-lg font-semibold mb-2">Practical Examples</h3>
              <p className="text-sm">Real-world scenarios demonstrating how these threats manifest and impact AI systems</p>
            </div>
          </div>
          
          <p>
            This guide presents each of the OWASP Top 10 LLM threats with detailed explanations, three practical 
            examples per threat, and effective mitigation strategies. Whether you're developing, deploying, or 
            securing LLM applications, understanding these risks is essential for building robust AI systems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
