export const reveal = {
  initial: { opacity: 0, y: 5 },
  whileInView: { opacity: 1, y: 0 },
  transition: { ease: "easeInOut", duration: 1 },
  viewport: { once: true },
} as const;
