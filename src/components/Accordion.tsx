"use client";

import { useState } from "react";

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="border-t border-stone/20">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="border-b border-stone/20 group"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between py-6 lg:py-8 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink"
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${index}`}
              id={`faq-question-${index}`}
            >
              <h3 className="font-serif text-xl lg:text-2xl text-ink pr-8 transition-colors group-hover:text-bronze">
                {item.question}
              </h3>
              <span className="flex-shrink-0 ml-4 relative w-6 h-6 flex items-center justify-center">
                <span className="absolute w-full h-[1px] bg-ink transition-transform duration-300" />
                <span
                  className={`absolute w-full h-[1px] bg-ink transition-transform duration-300 ${
                    isOpen ? "rotate-0" : "rotate-90"
                  }`}
                />
              </span>
            </button>
            <div
              id={`faq-answer-${index}`}
              role="region"
              aria-labelledby={`faq-question-${index}`}
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                isOpen ? "max-h-96 opacity-100 mb-8" : "max-h-0 opacity-0"
              }`}
            >
              <p className="pr-12 font-sans text-[15px] leading-[1.8] text-body">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
