"use client";
import { PropsWithChildren } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

export default function Card({ children }: PropsWithChildren) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const maskImage = useTransform<number, string>(
    [mouseX, mouseY],
    ([x, y]) => `radial-gradient(240px at ${x}px ${y}px, white, transparent)`
  );

  return (
    <div
      onMouseMove={onMouseMove}
      className="overflow-hidden relative duration-700 border rounded-xl hover:bg-zinc-800/10 group hover:border-zinc-400/50 border-zinc-600"
    >
      <div className="pointer-events-none">
        <div className="absolute inset-0 z-0 transition duration-1000 [mask-image:linear-gradient(black,transparent)]" />
        <motion.div
          className="absolute inset-0 z-10 opacity-100 bg-gradient-to-br via-zinc-100/10 transition duration-1000 group-hover:opacity-50"
          style={{ maskImage, WebkitMaskImage: maskImage }}
        />
        <motion.div
          className="absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-100"
          style={{ maskImage, WebkitMaskImage: maskImage }}
        />
      </div>
      {children}
    </div>
  );
}
