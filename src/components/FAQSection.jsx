import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Reveal from "./Reveal.jsx";
import { faqs } from "../data/siteContent.js";

export default function FAQSection() {
  const [openItems, setOpenItems] = useState([2, 3, 4]);

  const toggleItem = (index) => {
    setOpenItems((items) => (items.includes(index) ? items.filter((item) => item !== index) : [...items, index]));
  };

  return (
    <section className="bg-surface py-section-gap" id="faq">
      <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 gap-gutter md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <h2 className="font-headline-lg text-headline-lg text-primary">Common Concerns</h2>
            <p className="mt-4 font-body-md text-body-md text-on-surface-variant">
              Transparent answers for your wellness journey.
            </p>
          </Reveal>

          <Reveal className="space-y-4 md:col-span-8">
            {faqs.map((faq, index) => {
              const isOpen = openItems.includes(index);
              const answerId = `faq-answer-${index}`;

              return (
                <div className="border-b border-outline-variant py-6" key={faq.question}>
                  <button
                    className="flex w-full cursor-pointer items-center justify-between gap-6 text-left"
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    onClick={() => toggleItem(index)}
                  >
                    <h3 className="font-body-lg text-body-lg text-primary">{faq.question}</h3>
                    <ChevronDown
                      className={`shrink-0 text-secondary transition-transform ${isOpen ? "rotate-180" : ""}`}
                      size={24}
                      strokeWidth={1.5}
                    />
                  </button>
                  {isOpen && (
                    <div id={answerId} className="mt-4 font-body-md text-body-md text-on-surface-variant">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
