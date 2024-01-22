"use client";

import React, { useState } from "react";

import TypeIt from "typeit-react";
import { fullpageApi } from "@fullpage/react-fullpage";
import Image from "next/image";

import SkipIntro from "./SkipIntro";
import ScrollArrows from "./ScrollArrows";
import { motion } from "framer-motion";

export default function Typewriter({
  fullpageApi,
  fastDisplay = false,
}: {
  fullpageApi: fullpageApi;
  fastDisplay?: boolean;
}) {
  const [typingEnded, setTypingEnded] = useState<boolean>(false);
  const [skippedIntro, setSkippedIntro] = useState<boolean>(false);

  const handleEndedTyping = () => {
    fullpageApi.setAllowScrolling(true);
    fullpageApi.setKeyboardScrolling(true);
    setTypingEnded(true);
  };

  return (
    <div className="flex flex-col justify-center w-full h-screen text-2xl text-white text-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
        }}
        transition={{ duration: 3, ease: "easeInOut" }}
        className="self-center"
      >
        <Image
          src="/image/me_edit.jpg"
          width={420}
          height={420}
          alt="Picture of the author"
          className="lg:mr-8 p-8 rounded-full"
        />
      </motion.div>
      {skippedIntro ? (
        <div className="h-screen">
          <span>Hello! I&apos;m Ale.</span>
          <br />
          <span>
            Code <span style={{ color: "rgb(253 186 116)" }}>creator</span> and
            problem <span style={{ color: "rgb(190 242 100)" }}>solver</span>.
          </span>
          <br />
          <br />
          <span>Want to know more about me?</span>.
          <br />
          <span>Go ahead and scroll down!</span>.<TypeIt />
        </div>
      ) : (
        <TypeIt
          className="h-screen"
          getBeforeInit={(instance) => {
            instance
              .type("Hello! I&apos;m Ale.")
              .pause(500)
              .type(
                "</br>Code <span style='color: rgb(253 186 116);'>creator</span> and problem <span style='color: rgb(190 242 100);'>solvr</span>."
              )
              .pause(500)
              .delete(2)
              .type("<span style='color: rgb(190 242 100);'>er</span>.")
              .pause(200)
              .type("</br>")
              .pause(200)
              .type("</br>")
              .pause(200)
              .type("Want to know more about me?")
              .pause(500)
              .type("</br>Go ahead and scroll down!");

            return instance;
          }}
          options={{
            waitUntilVisible: true,
            lifeLike: true,
            cursor: {
              autoPause: true,
            },
            speed: fastDisplay ? 1 : 50,
            deleteSpeed: fastDisplay ? 1 : 200,
            html: true,
            afterComplete: () => handleEndedTyping(),
          }}
        />
      )}
      <div className="flex flex-col items-end mr-8 mb-8">
        <SkipIntro
          visible={!typingEnded}
          onClick={() => {
            setSkippedIntro(true);
            handleEndedTyping();
          }}
        />
        <ScrollArrows typingEnded={typingEnded} />
      </div>
    </div>
  );
}
