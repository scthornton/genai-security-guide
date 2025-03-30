
import React from 'react';
import { ChevronDown, ChevronUp, Shield, AlertTriangle, Eye, Activity, Check } from 'lucide-react';
import { Threat } from '../data/owasp-llm-threats';
import { Badge } from '@/components/ui/badge';
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ThreatCardProps {
  threat: Threat;
}

const ThreatCard: React.FC<ThreatCardProps> = ({ threat }) => {
  const [expanded, setExpanded] = React.useState(false);
  const [showMitigation, setShowMitigation] = React.useState(false);

  const getRiskBadgeColor = (level: Threat['riskLevel']) => {
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

  // Risk metrics based on the risk level
  const getRiskMetrics = (level: Threat['riskLevel']) => {
    switch (level) {
      case 'critical':
        return { impact: 5, likelihood: 5, detectability: 2 };
      case 'high':
        return { impact: 4, likelihood: 4, detectability: 3 };
      case 'medium':
        return { impact: 3, likelihood: 3, detectability: 3 };
      case 'low':
        return { impact: 2, likelihood: 2, detectability: 4 };
      default:
        return { impact: 1, likelihood: 1, detectability: 5 };
    }
  };

  const metrics = getRiskMetrics(threat.riskLevel);

  // Render dots for metrics visualization (1-5 scale)
  const renderMetricDots = (value: number, color: string) => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((dot) => (
          <div
            key={dot}
            className={`h-2 w-2 rounded-full ${
              dot <= value ? color : 'bg-gray-200'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div id={threat.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 animate-fade-in transition-all duration-300 hover:shadow-lg">
      <div className="p-5 bg-security-50">
        <div className="flex items-start justify-between mb-2">
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-security-700" />
            <h3 className="text-xl font-bold text-security-900">{threat.id}: {threat.title}</h3>
          </div>
          <Badge className={getRiskBadgeColor(threat.riskLevel)}>
            {threat.riskLevel.charAt(0).toUpperCase() + threat.riskLevel.slice(1)} Risk
          </Badge>
        </div>
        <p className="text-gray-700">{threat.description}</p>
        
        <div className="mt-4 pt-3 border-t border-gray-100">
          <div className="flex flex-wrap gap-6">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-threat-high" />
                    <span className="text-xs font-medium">Impact:</span>
                    {renderMetricDots(metrics.impact, 'bg-threat-high')}
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Potential damage if exploited</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex items-center gap-2">
                    <Activity className="h-4 w-4 text-threat-medium" />
                    <span className="text-xs font-medium">Likelihood:</span>
                    {renderMetricDots(metrics.likelihood, 'bg-threat-medium')}
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Probability of being exploited</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex items-center gap-2">
                    <Eye className="h-4 w-4 text-security-600" />
                    <span className="text-xs font-medium">Detectability:</span>
                    {renderMetricDots(metrics.detectability, 'bg-security-600')}
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Ease of detecting the threat (higher is easier)</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-200">
        <div className="p-4 flex justify-between items-center">
          <div className="flex space-x-4">
            <button 
              onClick={() => {
                setShowMitigation(false);
                setExpanded(!expanded);
              }}
              className={`px-3 py-1 rounded-md font-medium text-sm transition-colors ${
                !showMitigation ? 'bg-security-100 text-security-800' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Examples
            </button>
            <button 
              onClick={() => {
                setExpanded(false);
                setShowMitigation(!showMitigation);
              }}
              className={`px-3 py-1 rounded-md font-medium text-sm transition-colors ${
                showMitigation ? 'bg-security-100 text-security-800' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Mitigation Strategies
            </button>
          </div>
          <button 
            onClick={() => {
              if (showMitigation) {
                setShowMitigation(!showMitigation);
              } else {
                setExpanded(!expanded);
              }
            }}
            className="text-gray-500 hover:text-security-700 transition-colors"
            aria-label={expanded || showMitigation ? "Show less" : "Show more"}
          >
            {expanded || showMitigation ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </button>
        </div>

        {/* Examples Section */}
        {!showMitigation && (
          <div className="p-5 pt-0">
            <ul className="space-y-3">
              {(expanded ? threat.examples : threat.examples.slice(0, 2)).map((example) => (
                <li key={example.id} className="bg-gray-50 p-3 rounded-md">
                  <h5 className="font-medium text-security-700">{example.title}</h5>
                  <p className="text-sm text-gray-600 mt-1">{example.description}</p>
                </li>
              ))}
            </ul>
            
            {!expanded && threat.examples.length > 2 && (
              <button 
                onClick={() => setExpanded(true)}
                className="mt-3 text-sm font-medium text-security-600 hover:text-security-800 transition-colors"
              >
                Show {threat.examples.length - 2} more example{threat.examples.length - 2 > 1 ? 's' : ''}
              </button>
            )}
          </div>
        )}

        {/* Mitigation Section */}
        {showMitigation && (
          <div className="p-5 pt-0">
            <ul className="space-y-3">
              {threat.mitigation.map((strategy, index) => (
                <li key={index} className="bg-security-50 p-3 rounded-md flex">
                  <Check className="h-5 w-5 text-security-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">{strategy}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ThreatCard;
