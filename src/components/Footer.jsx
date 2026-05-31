import { ArrowRight } from "lucide-react";

const practiceLinks = ["About", "Batches", "Services", "Philosophy"];
const connectLinks = ["Wellness Journal", "Contact", "Instagram"];

export default function Footer() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <footer className="w-full border-t border-outline-variant/10 bg-surface-container-lowest py-section-gap">
      <div className="mx-auto grid max-w-container-max grid-cols-1 gap-gutter px-margin-mobile md:grid-cols-12 md:px-margin-desktop">
        <div className="space-y-6 md:col-span-4">
          <div className="flex items-center gap-2">
            <img alt="Sakshi Yoga Logo" className="h-8 w-auto" src="/SakshiYoga Logo.png" />
            <span className="font-headline-md text-headline-md text-primary">Sakshi Yoga</span>
          </div>
          <p className="max-w-xs font-body-md text-body-md text-on-surface-variant">
            Slow living. Gentle movement. Conscious wellness. A sanctuary for the modern soul.
          </p>
        </div>

        <div className="space-y-4 md:col-span-2">
          <h2 className="font-label-sm text-label-sm uppercase text-primary">Practice</h2>
          <ul className="space-y-2 font-body-md text-body-md text-on-surface-variant">
            {practiceLinks.map((link) => (
              <li key={link}>
                <a className="transition-colors hover:text-primary" href="#">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4 md:col-span-2">
          <h2 className="font-label-sm text-label-sm uppercase text-primary">Connect</h2>
          <ul className="space-y-2 font-body-md text-body-md text-on-surface-variant">
            {connectLinks.map((link) => (
              <li key={link}>
                <a className="transition-colors hover:text-primary" href="#">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4 md:col-span-4">
          <h2 className="font-label-sm text-label-sm uppercase text-primary">Stay Mindful</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">Gentle notes on wellness in your inbox.</p>
          <form className="flex border-b border-outline" onSubmit={handleSubmit}>
            <label className="sr-only" htmlFor="email-address">
              Email Address
            </label>
            <input
              className="w-full border-none bg-transparent font-body-md text-on-surface-variant placeholder:text-outline focus:ring-0"
              id="email-address"
              placeholder="Email Address"
              type="email"
            />
            <button className="p-2 text-primary" type="submit" aria-label="Submit email address">
              <ArrowRight size={22} strokeWidth={1.5} />
            </button>
          </form>
        </div>

        <div className="flex flex-col justify-between gap-4 border-t border-outline/10 pt-12 md:col-span-12 md:flex-row">
          <p className="font-label-sm text-label-sm text-on-surface-variant"> © 2026 Sakshi Yoga. All rights reserved.</p>
          <div className="flex gap-6">
            <a className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary" href="#">
              Privacy
            </a>
            <a className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary" href="#">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
