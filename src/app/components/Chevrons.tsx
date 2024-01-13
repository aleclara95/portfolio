"use client";

import React from "react";

import { motion } from "framer-motion";
import { BsChevronDown } from "react-icons/bs";

export default function Chevrons({
  chevronsVisible,
}: {
  chevronsVisible: boolean;
}) {
  return (
    <div className="relative flex justify-center">
      <motion.span
        initial={{ opacity: 1 }}
        animate={{
          opacity: chevronsVisible ? 1 : 0,
        }}
        transition={{ duration: 1.5 }}
        className={chevronsVisible ? `animate-pulse` : ""}
      >
        <BsChevronDown size={48} className="absolute bottom-3" />
      </motion.span>
      <motion.span
        initial={{ opacity: 1 }}
        animate={{
          opacity: chevronsVisible ? 1 : 0,
        }}
        transition={{ duration: 1.5, delay: 0.2 }}
        className={chevronsVisible ? `animate-pulse` : ""}
      >
        <BsChevronDown size={48} className="absolute bottom-0" />
      </motion.span>
    </div>
  );
}
