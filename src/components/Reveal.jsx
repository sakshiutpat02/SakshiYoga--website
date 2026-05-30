import { motion } from "framer-motion";

export default function Reveal({ as = "div", className = "", children }) {
  const Component = motion[as] || motion.div;

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </Component>
  );
}
