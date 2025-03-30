
import React from 'react';
import { Shield } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="py-6 border-b bg-security-700 text-white">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Shield className="h-8 w-8" />
          <h1 className="text-2xl font-bold md:text-3xl">GenAI Security Guide</h1>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#overview" className="hover:text-security-200 transition-colors">Overview</a>
          <a href="#threats" className="hover:text-security-200 transition-colors">OWASP Top 10</a>
          <a href="#resources" className="hover:text-security-200 transition-colors">Resources</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
