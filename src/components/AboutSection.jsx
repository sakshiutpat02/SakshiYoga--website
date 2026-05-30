import Reveal from "./Reveal.jsx";
import { imageUrls } from "../data/siteContent.js";

export default function AboutSection() {
  return (
    <section className="bg-surface-container-low py-16" id="about">
      <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-12 md:gap-24">
          <Reveal className="md:col-span-7">
            <div className="relative">
              <img
                alt="Yoga practitioner in a balanced warrior pose, capturing the essence of slow living and mindful movement"
                className="aspect-[3/4] w-full rounded-xl border border-outline/5 object-cover shadow-xl"
                src={imageUrls.about}
              />
              <div className="absolute -bottom-4 -right-4 -z-10 h-24 w-24 rounded-full bg-secondary-container/30 blur-2xl" />
            </div>
          </Reveal>

          <Reveal className="space-y-6 md:col-span-5 md:pl-12">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary">
              thought behind this wellness space
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary">Meet SakshiYoga</h2>
            <div className="max-w-xl space-y-4">
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Nobody can deny the need for physical, mental and spiritual wellbeing in this fast and uptight life.
                Practicing Yoga helps you meet all this criteria.
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant">
                We believe wellness begins long before you step onto a yoga mat and continues long after you leave it.
                Through mindful movement, breath, and awareness, we help you cultivate flexibility, reconnect with your
                body, and feel both free and grounded. Wherever you are in your journey, Sakshi Yoga meets you there and
                together, we'll move towards a healthier, more balanced life.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
