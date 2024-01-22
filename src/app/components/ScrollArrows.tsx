"use client";

import React from "react";

import { BsChevronDown } from "react-icons/bs";
import { motion } from "framer-motion";

export default function ScrollArrows({
  typingEnded,
}: {
  typingEnded: boolean;
}) {
  return (
    <>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{
          opacity: typingEnded ? 1 : 0,
        }}
        transition={{ duration: 1.5 }}
      >
        <BsChevronDown
          size={48}
          className="absolute bottom-0 left-[calc(50%-24px)]"
        />
      </motion.span>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{
          opacity: typingEnded ? 1 : 0,
        }}
        transition={{ duration: 1.5, delay: 0.2 }}
      >
        <BsChevronDown
          size={48}
          className="absolute bottom-3 left-[calc(50%-24px)]"
        />
      </motion.span>
    </>
  );
}
