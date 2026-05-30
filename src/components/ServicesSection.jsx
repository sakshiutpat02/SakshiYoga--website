import Reveal from "./Reveal.jsx";
import { imageUrls } from "../data/siteContent.js";

export default function ServicesSection() {
  return (
    <section className="bg-surface-dim py-section-gap" id="services">
      <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 gap-gutter md:grid-cols-12">
          <Reveal className="flex flex-col justify-between bg-surface p-8 md:col-span-8 md:p-12">
            <div>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary">
                01 / Beginners
              </span>
              <h3 className="mb-6 mt-4 font-headline-lg text-headline-lg text-primary">Mind Your Mind</h3>
              <p className="max-w-md font-body-lg text-body-lg text-on-surface-variant">
                Mindfulness Meditations to resolve agitations of mind in haphazardous situations
              </p>
            </div>
            <img
              alt="Soft, editorial photography of a person's hands resting in a meditative mudra, natural morning light, warm neutral tones, linen texture, calm and focused atmosphere for breathwork."
              className="mt-12 h-48 w-full object-cover opacity-80 transition-opacity hover:opacity-100"
              src={imageUrls.serviceMeditation}
            />
          </Reveal>

          <Reveal className="bg-secondary-container p-8 md:col-span-4 md:p-12">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-secondary-container">
              02 / Support
            </span>
            <h3 className="mb-6 mt-4 font-headline-md text-headline-md text-primary">PCOD/PCOS Support</h3>
            <p className="mb-8 font-body-md text-body-md text-on-secondary-container">
              Targeted yoga sequences to support hormonal health and alleviate symptoms through gentle movement.
            </p>
          </Reveal>

          <Reveal className="bg-tertiary-container p-8 text-on-tertiary-container md:col-span-4 md:p-12">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-tertiary-fixed">
              03 / Breathwork
            </span>
            <h3 className="mb-6 mt-4 font-headline-md text-headline-md">Day-to-Day Health</h3>
            <p className="font-body-md text-body-md opacity-80">
              Practices to ensure enthusiasm outside &amp; calm and compuse to the inner core
            </p>
          </Reveal>

          <Reveal className="grid grid-cols-1 items-center gap-8 bg-surface-container-high p-8 md:col-span-8 md:grid-cols-2 md:p-12">
            <div>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary">
                04 / Senior Care
              </span>
              <h3 className="mb-4 mt-4 font-headline-md text-headline-md text-primary">Senior Mobility</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Maintaining joint health and stability with age-appropriate gentle yoga.
              </p>
            </div>
            <img
              alt="Gentle, supportive yoga for seniors, soft-focus photography of a calm older adult in a seated yoga pose, warm indoor lighting, oatmeal and taupe color palette, peaceful and inclusive wellness vibe."
              className="h-64 w-full object-cover"
              src={imageUrls.serviceSenior}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
