"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

const buildVariants = (reduced: boolean, y: number): Variants => ({
  hidden: { opacity: 0, y: reduced ? 0 : y },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: reduced ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] },
  },
});

export function Reveal({
  children,
  className,
  delay = 0,
  y = 16,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: "div" | "section" | "span" | "li";
}) {
  const reduced = useReducedMotion() ?? false;
  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay: reduced ? 0 : delay }}
      variants={buildVariants(reduced, y)}
    >
      {children}
    </MotionTag>
  );
}

/** Staggered container — children reveal in sequence. */
export function RevealGroup({
  children,
  className,
  stagger = 0.09,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
}) {
  const reduced = useReducedMotion() ?? false;
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: reduced ? 0 : stagger },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className,
  y = 16,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  y?: number;
  as?: "div" | "li" | "span";
}) {
  const reduced = useReducedMotion() ?? false;
  const MotionTag = motion[as];
  return (
    <MotionTag className={className} variants={buildVariants(reduced, y)}>
      {children}
    </MotionTag>
  );
}
