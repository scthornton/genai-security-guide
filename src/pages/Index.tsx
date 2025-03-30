
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Introduction from '@/components/Introduction';
import ThreatCard from '@/components/ThreatCard';
import Resources from '@/components/Resources';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import SearchThreat from '@/components/SearchThreat';
import RealWorldIncidents from '@/components/RealWorldIncidents';
import BestPractices from '@/components/BestPractices';
import EmergingThreats from '@/components/EmergingThreats';
import { threats } from '@/data/owasp-llm-threats';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <Introduction />
      
      <section id="threats" className="py-12 md:py-16">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-3 text-security-900">OWASP Top 10 LLM Threats</h2>
              <p className="text-gray-600 max-w-2xl">
                Detailed breakdown of each threat category with examples and mitigation strategies
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <SearchThreat />
            </div>
          </div>
          
          <div className="grid gap-8">
            {threats.map((threat) => (
              <ThreatCard key={threat.id} threat={threat} />
            ))}
          </div>
        </div>
      </section>
      
      <EmergingThreats />
      <RealWorldIncidents />
      <BestPractices />
      <Resources />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
