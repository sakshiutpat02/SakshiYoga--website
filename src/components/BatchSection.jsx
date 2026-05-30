import { Clock } from "lucide-react";
import Reveal from "./Reveal.jsx";
import { openWhatsApp } from "../utils/whatsapp.js";

export default function BatchSection() {
  const openWeekdayBatchWhatsApp = () => {
    openWhatsApp("Hi, I would like to know more about Weekday Batches.");
  };

  const openWeekendBatchWhatsApp = () => {
    openWhatsApp("Hi, I would like to know more about Weekend Batches.");
  };

  return (
    <section className="py-section-gap" id="batches">
      <div className="mx-auto mb-16 max-w-container-max px-margin-mobile text-center md:px-margin-desktop">
        <h2 className="mb-4 font-headline-lg text-headline-lg text-primary">SakshiYoga Batches</h2>
        <p className="mx-auto max-w-2xl font-body-lg text-body-lg italic text-on-surface-variant">
          Wellness designed for busy lives. Ideal for IT and Corporate professionals seeking a reset.
        </p>
      </div>
      <div className="mx-auto grid max-w-container-max grid-cols-1 gap-gutter px-margin-mobile md:grid-cols-2 md:px-margin-desktop">
        <Reveal className="border border-outline/5 bg-surface-container-lowest p-8 md:p-12">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary">Weekday sessions</span>
          <h3 className="mb-6 mt-4 font-headline-md text-headline-md">Monday-Friday</h3>
          <p className="mb-8 font-body-md text-body-md text-on-surface-variant">
            A focused session to release tension, focusing on yoga and mindfulness.
          </p>
          <div className="mb-8 flex items-center gap-4 font-label-sm text-label-sm text-primary">
            <Clock size={22} strokeWidth={1.5} />
            <span>05:00 PM to 06:00 PM</span>
          </div>
          <button
            className="w-full border border-outline-variant py-4 font-label-sm text-label-sm uppercase transition-all hover:bg-primary hover:text-on-primary"
            type="button"
            aria-label="Register Now for weekday sessions"
            onClick={openWeekdayBatchWhatsApp}
          >
            Register Now
          </button>
        </Reveal>

        <Reveal className="bg-primary-container p-8 text-on-primary-container md:p-12">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-fixed">
            Weekend sessions
          </span>
          <h3 className="mb-6 mt-4 font-headline-md text-headline-md text-white">Saturday &amp; Sunday</h3>
          <p className="mb-8 font-body-md text-body-md opacity-80">
            Deep relaxation through restorative poses and breathwork to prepare your mind for the week ahead.
          </p>
          <div className="mb-8 flex items-center gap-4 font-label-sm text-label-sm text-secondary-fixed">
            <Clock size={22} strokeWidth={1.5} />
            <span>06:00 AM to 07:00 AM</span>
          </div>
          <button
            className="w-full bg-secondary-fixed py-4 font-label-sm text-label-sm uppercase text-on-secondary-fixed transition-all hover:opacity-90"
            type="button"
            aria-label="Register Now for weekend sessions"
            onClick={openWeekendBatchWhatsApp}
          >
            Register Now
          </button>
        </Reveal>
      </div>
    </section>
  );
}
