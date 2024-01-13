"use client";

import React from "react";

import { motion } from "framer-motion";
import classNames from "classnames";

export default function SkipIntro({
  visible,
  onClick,
}: {
  visible: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: visible ? 1 : 0,
      }}
      transition={{ duration: 2 }}
      className={classNames(
        "flex w-48 justify-center p-3 border border-stone-200 bg-black text-white font-sans",
        {
          "cursor-pointer select-none": visible,
          "cursor-default select-none": !visible,
        }
      )}
      onClick={onClick}
    >
      SKIP INTRO
    </motion.div>
  );
}
