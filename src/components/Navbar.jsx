import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Batches", href: "#batches" },
  { label: "Services", href: "#services" },
  { label: "Philosophy", href: "#wellness" }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToBatches = () => {
    document.getElementById("batches")?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 z-50 w-full bg-surface/80 backdrop-blur-md transition-all duration-500 ease-in-out ${
        isScrolled ? "shadow-sm" : ""
      }`}
      aria-label="Primary navigation"
    >
      <div className="mx-auto flex max-w-container-max items-center justify-between px-margin-mobile py-6 md:px-margin-desktop">
        <a className="flex items-center gap-2" href="#top" aria-label="Sakshi Yoga home">
          <img alt="Sakshi Yoga Logo" className="h-10 w-auto" src="/SakshiYoga Logo.png" />
          <span className="font-headline-md text-headline-md tracking-tight text-primary">Sakshi Yoga</span>
        </a>

        <div className="hidden items-center space-x-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              className="font-label-sm text-label-sm text-on-surface-variant transition-colors hover:text-primary"
              href={item.href}
            >
              {item.label}
            </a>
          ))}
          <button
            className="bg-secondary px-6 py-2 font-label-sm text-label-sm text-on-secondary transition-opacity hover:opacity-90"
            type="button"
            aria-label="Connect with Sakshi Yoga"
            onClick={scrollToBatches}
          >
            Connect
          </button>
        </div>

        <button
          className="text-primary md:hidden"
          type="button"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X size={26} strokeWidth={1.5} /> : <Menu size={26} strokeWidth={1.5} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-outline-variant/30 bg-surface px-margin-mobile pb-6 md:hidden">
          <div className="flex flex-col gap-5 pt-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                className="font-label-sm text-label-sm text-on-surface-variant transition-colors hover:text-primary"
                href={item.href}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button
              className="w-full bg-secondary px-6 py-3 font-label-sm text-label-sm text-on-secondary transition-opacity hover:opacity-90"
              type="button"
              aria-label="Connect with Sakshi Yoga"
              onClick={scrollToBatches}
            >
              Connect
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
