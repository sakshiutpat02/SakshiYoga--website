import Reveal from "./Reveal.jsx";
import { imageUrls } from "../data/siteContent.js";
import { openWhatsApp } from "../utils/whatsapp.js";

export default function HeroSection() {
  const scrollToBatches = () => {
    document.getElementById("batches")?.scrollIntoView({ behavior: "smooth" });
  };

  const openConsultationWhatsApp = () => {
    openWhatsApp("Hi, I would like to know more about Yoga and Mindfulness.");
  };

  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pb-12 pt-24">
      <div className="ambient-glow absolute right-0 top-1/2 -z-10 h-full w-1/2 -translate-y-1/2 opacity-10" />
      <div className="mx-auto grid w-full max-w-container-max grid-cols-1 items-center gap-gutter px-margin-mobile md:grid-cols-12 md:px-margin-desktop">
        <Reveal className="space-y-8 md:col-span-6">
          <h1 className="max-w-lg font-display-lg text-display-lg text-primary">Sakshi Yoga</h1>
          <p className="font-headline-md text-headline-md italic text-on-surface-variant">
            Yoga and Mindfulness for physical, mental and spiritual health
          </p>
          <div className="flex flex-col gap-4 pt-4 sm:flex-row">
            <button
              className="bg-secondary px-8 py-4 font-label-sm text-label-sm uppercase tracking-widest text-on-secondary transition-all hover:bg-secondary/90"
              type="button"
              aria-label="Join Weekend Batch"
              onClick={scrollToBatches}
            >
              Join Weekend Batch
            </button>
            <button
              className="border border-primary px-8 py-4 font-label-sm text-label-sm uppercase tracking-widest text-primary transition-all hover:bg-primary hover:text-on-primary"
              type="button"
              aria-label="Book a Consultation"
              onClick={openConsultationWhatsApp}
            >
              Book a Consultation
            </button>
          </div>
        </Reveal>

        <Reveal className="mt-12 md:col-span-6 md:mt-0">
          <div className="relative">
            <img
              alt="A serene woman practicing a slow, mindful yoga pose in a bright, minimalist studio filled with soft, natural morning light. The environment features earthy tones, soft textures, and a large window overlooking a misty garden, creating a sense of ethereal grounding and premium wellness."
              className="asymmetric-clip h-[460px] w-full object-cover md:h-[600px]"
              src={imageUrls.hero}
            />
            <div className="absolute -bottom-8 -left-8 hidden border border-outline/10 bg-surface-container p-8 md:block">
              <p className="font-headline-md text-headline-md italic text-secondary">Slow living.</p>
              <p className="font-body-md text-body-md text-on-surface-variant">Gentle movement.</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
