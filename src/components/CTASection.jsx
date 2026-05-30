import { useEffect, useState } from "react";
import Reveal from "./Reveal.jsx";
import { openWhatsApp } from "../utils/whatsapp.js";

const colors = ["#fdf9f5", "#f1ede9", "#f5dad1", "#e8d3cd"];

export default function CTASection() {
  const [colorIndex, setColorIndex] = useState(2);
  const openGeneralWhatsApp = () => {
    openWhatsApp("Hi, I would like to know more about Yoga and Mindfulness.");
  };

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setColorIndex((index) => (index + 1) % colors.length);
    }, 3000);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section className="relative overflow-hidden py-section-gap">
      <div
        className="absolute inset-0 -z-10 bg-surface-container-high transition-colors duration-[3000ms]"
        style={{ backgroundColor: colors[colorIndex] }}
      />
      <Reveal className="mx-auto max-w-container-max px-margin-mobile text-center md:px-margin-desktop">
        <h2 className="mb-8 font-display-lg text-display-lg text-primary">
          Your wellness journey doesn't need to begin perfectly.
        </h2>
        <p className="mb-12 font-headline-md text-headline-md italic text-secondary">It just needs to begin.</p>
        <div className="flex flex-col justify-center gap-6 sm:flex-row">
          <button
            className="bg-primary px-12 py-5 font-label-sm text-label-sm uppercase tracking-widest text-on-primary transition-all hover:opacity-90"
            type="button"
            aria-label="Apply for Next Batch"
            onClick={openGeneralWhatsApp}
          >
            Apply for Next Batch
          </button>
          <button
            className="border border-primary bg-transparent px-12 py-5 font-label-sm text-label-sm uppercase tracking-widest text-primary transition-all hover:bg-primary hover:text-on-primary"
            type="button"
            aria-label="Connect"
            onClick={openGeneralWhatsApp}
          >
            Connect
          </button>
        </div>
      </Reveal>
    </section>
  );
}
