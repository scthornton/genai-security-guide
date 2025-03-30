
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { threats } from '@/data/owasp-llm-threats';
import { 
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem
} from "@/components/ui/command";
import { useNavigate } from 'react-router-dom';

const SearchThreat: React.FC = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const handleSelect = (threatId: string) => {
    setOpen(false);
    navigate(`/#${threatId}`);
    
    // Scroll to the element and add a highlight effect
    setTimeout(() => {
      const element = document.getElementById(threatId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        element.classList.add('highlight-pulse');
        setTimeout(() => {
          element.classList.remove('highlight-pulse');
        }, 2000);
      }
    }, 100);
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 px-3 py-1.5 text-sm bg-white rounded-md border border-gray-200 shadow-sm hover:bg-gray-50 transition-colors"
      >
        <Search className="h-4 w-4" />
        <span>Search threats...</span>
        <kbd className="hidden md:inline-flex h-5 select-none items-center gap-1 rounded border bg-gray-100 px-1.5 font-mono text-xs font-medium opacity-100">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search LLM threats..." />
        <CommandList>
          <CommandEmpty>No threats found.</CommandEmpty>
          <CommandGroup heading="Threats">
            {threats.map((threat) => (
              <CommandItem 
                key={threat.id}
                value={`${threat.id} ${threat.title}`}
                onSelect={() => handleSelect(threat.id)}
              >
                <span className="font-medium">{threat.id}:</span> {threat.title}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default SearchThreat;
