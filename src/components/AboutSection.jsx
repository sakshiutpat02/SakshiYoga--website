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
                alt="Vd. Aparna Utpat speaking at a yoga teachers continuing medical education event"
                className="aspect-[3/4] w-full rounded-xl border border-outline/5 object-cover shadow-xl"
                src={imageUrls.about}
              />
              <div className="absolute -bottom-4 -right-4 -z-10 h-24 w-24 rounded-full bg-secondary-container/30 blur-2xl" />
            </div>
          </Reveal>

          <Reveal className="space-y-6 md:col-span-5 md:pl-12">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary">
              Person Behind This Wellness Space
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary">Meet Vd. Aparna Utpat</h2>
            <div className="max-w-xl space-y-4">
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                My journey with yoga began as a path to create balance, awareness, and inner strength within myself.
                Over time, I experienced how yoga has the power to transform not just the body, but also the mind and
                spirit. This inspired me to create Sakshi Yoga a space where individuals can reconnect with themselves,
                cultivate mindfulness, and embrace a healthier way of living.
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant">
                At Sakshi Yoga, I believe wellness begins long before you step onto a yoga mat and continues long after
                your practice ends. Through mindful movement, conscious breathing, and self-awareness, my goal is to help
                you develop flexibility, build resilience, and find a deeper sense of peace and balance in your daily
                life.
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Whether you are taking your very first step into yoga or continuing an existing practice, I welcome you
                with an open heart. Wherever you are in your wellness journey, I look forward to supporting and guiding
                you towards a life that feels healthier, calmer, and more aligned.
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant">
                - Vd. Aparna Utpat
                <br />
                BAMS, MSc. Yoga
                <br />
                Founder, Sakshi Yoga
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
