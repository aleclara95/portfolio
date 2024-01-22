"use client";

import React, { useEffect } from "react";

import Image from "next/image";
import { fullpageApi } from "@fullpage/react-fullpage";

import GraphBackground from "./GraphBackground";
import TypewriterIntro from "./TypewriterIntro";
import TypewriterMe from "./TypewriterMe";
import { motion } from "framer-motion";

export default function Home({ fullpageApi }: { fullpageApi: fullpageApi }) {
  useEffect(() => {
    if (fullpageApi) {
      fullpageApi.setAllowScrolling(false);
      fullpageApi.setKeyboardScrolling(false);
    }
  }, [fullpageApi]);

  return (
    <div>
      <section className="min-h-screen section">
        <GraphBackground />
        <div className="absolute top-0 left-0 w-full">
          <TypewriterIntro fullpageApi={fullpageApi} />
        </div>
      </section>
      <section className="min-h-screen flex items-center section">
        <div className="w-full flex flex-col justify-center items-center h-screen lg:flex-row">
          <motion.div
            initial={{ translateY: 0 }}
            animate={{
              translateY: [-6, 6],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            <Image
              src="/image/me_paris.jpg"
              width={420}
              height={420}
              alt="Picture of the author"
              className="lg:mr-8 p-8 rounded-full"
            />
          </motion.div>
          <div className="p-8 text-justify lg:p-0 lg:w-1/2">
            <TypewriterMe fullpageApi={fullpageApi} fastDisplay />
          </div>
        </div>
      </section>
      <section className="min-h-screen flex items-center section"></section>
    </div>
  );
}
