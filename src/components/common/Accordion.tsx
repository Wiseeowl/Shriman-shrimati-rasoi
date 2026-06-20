import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from './LiquidGlassPanel';

interface AccordionItem {
  id: string;
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
}

export default function Accordion({ items, allowMultiple = false }: AccordionProps) {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        if (!allowMultiple) {
          next.clear();
        }
        next.add(id);
      }
      return next;
    });
  };

  return (
    <div className="w-full border-t border-gray-200">
      {items.map((item) => {
        const isOpen = openIds.has(item.id);
        
        return (
          <div key={item.id} className="border-b border-gray-200">
            <button
              onClick={() => toggle(item.id)}
              className="flex w-full items-center justify-between py-5 text-left transition-colors hover:text-brand-orange focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2"
              aria-expanded={isOpen}
            >
              <span className="font-poppins font-medium text-lg text-gray-800 pr-8">{item.title}</span>
              <span className={cn(
                "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-orange/10 text-brand-orange transition-transform duration-300",
                isOpen && "rotate-180"
              )}>
                <ChevronDown size={20} />
              </span>
            </button>
            <div
              className={cn(
                "overflow-hidden transition-all duration-300 ease-in-out",
                isOpen ? "max-h-96 opacity-100 pb-5" : "max-h-0 opacity-0"
              )}
            >
              <p className="text-gray-600 leading-relaxed pr-12">{item.content}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
