
import React from 'react';
import { Github, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-security-900 text-white py-8">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-security-300">
              © {currentYear} Scott Thornton
            </p>
            <p className="text-sm text-security-400 mt-1">
              Based on the OWASP Top 10 for Large Language Model Applications
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            <a href="#" className="text-security-300 hover:text-white transition-colors">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="#" className="text-security-300 hover:text-white transition-colors">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="#" className="text-security-300 hover:text-white transition-colors">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-security-800 text-sm text-security-400 text-center md:text-left">
          <p>
            This information is provided for educational purposes only. Always consult with security professionals 
            when implementing security controls for your specific use cases.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
