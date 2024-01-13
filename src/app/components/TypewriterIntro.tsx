"use client";

import React, { useState } from "react";

import TypeIt from "typeit-react";
import { fullpageApi } from "@fullpage/react-fullpage";
import { BsChevronDown } from "react-icons/bs";
import { motion } from "framer-motion";
import SkipIntro from "./SkipIntro";

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
      {skippedIntro ? (
        <div className="h-screen mt-64">
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
          className="h-screen mt-64"
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
        <div>
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
        </div>
      </div>
    </div>
  );
}
