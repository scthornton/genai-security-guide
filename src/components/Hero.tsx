
import React from 'react';
import { ShieldAlert, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  const scrollToThreats = () => {
    const threatSection = document.getElementById("threats");
    if (threatSection) {
      threatSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="overview" className="py-16 md:py-24 bg-gradient-to-b from-security-800 to-security-900 text-white">
      <div className="container text-center max-w-4xl">
        <div className="flex justify-center mb-6">
          <ShieldAlert className="h-16 w-16 text-security-300" />
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Securing Generative AI Applications
        </h1>
        <p className="text-xl md:text-2xl text-security-200 mb-8">
          A comprehensive guide to understanding and mitigating the OWASP Top 10 LLM Threats
        </p>
        <Button 
          variant="outline" 
          size="lg" 
          className="bg-transparent border-white text-white hover:bg-white hover:text-security-900"
          onClick={scrollToThreats}
        >
          Explore Threats <ArrowDown className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
