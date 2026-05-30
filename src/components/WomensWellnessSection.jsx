import { Circle } from "lucide-react";
import Reveal from "./Reveal.jsx";
import { imageUrls } from "../data/siteContent.js";
import { openWhatsApp } from "../utils/whatsapp.js";

const wellnessItems = [
  "Cycle-synced movement practices",
  "Pelvic floor strengthening",
  "Emotional resilience through soft flows"
];

export default function WomensWellnessSection() {
  const openWomensWellnessWhatsApp = () => {
    openWhatsApp("Hi, I would like to know more about Yoga for Women.");
  };

  return (
    <section className="relative py-section-gap" id="wellness">
      <div className="absolute inset-0 -z-10 bg-secondary-fixed/20" />
      <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
        <div className="flex flex-col items-center gap-16 md:flex-row">
          <Reveal className="w-full md:w-1/2">
            <div className="relative border border-secondary-container bg-surface p-4">
              <img
                alt="Close-up of a person's hands resting peacefully on their lap during meditation. The skin tones are soft and the surrounding fabrics are in shades of blush and nude pink, creating a premium, feminine atmosphere focused on hormonal balance and body awareness."
                className="h-[420px] w-full object-cover md:h-[500px]"
                src={imageUrls.wellness}
              />
              <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-secondary-container/50 blur-3xl" />
            </div>
          </Reveal>

          <Reveal className="w-full space-y-8 md:w-1/2">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary">
              Dedicated Space
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary">Women's Wellness &amp; Balance</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Our cycles are our strength. This premium section is dedicated to practices that honor the feminine
              journey, from hormonal balance to deep body awareness.
            </p>
            <ul className="space-y-4 font-body-md text-body-md text-on-surface-variant">
              {wellnessItems.map((item) => (
                <li className="flex items-center gap-3" key={item}>
                  <Circle className="fill-secondary text-secondary" size={10} strokeWidth={1.5} />
                  {item}
                </li>
              ))}
            </ul>
            <button
              className="bg-secondary px-10 py-4 font-label-sm text-label-sm uppercase tracking-widest text-on-secondary transition-all hover:bg-primary"
              type="button"
              aria-label="Explore the Program"
              onClick={openWomensWellnessWhatsApp}
            >
              Explore the Program
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
