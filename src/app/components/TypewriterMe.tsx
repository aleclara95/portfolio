"use client";

import React from "react";

import TypeIt from "typeit-react";
import { fullpageApi } from "@fullpage/react-fullpage";
import ScrollArrows from "./ScrollArrows";

export default function Typewriter({
  fullpageApi,
  fastDisplay = false,
}: {
  fullpageApi: fullpageApi;
  fastDisplay?: boolean;
}) {
  return (
    <div className="text-white">
      <TypeIt
        getBeforeInit={(instance) => {
          instance.type(`<span>Welcome to my world of coding and creativity! I'm Alejandro Clara,
          a <span style="color: #fdba74">Computer Engineer</span> and
          <span style="color: #fdba74">Web Developer</span>, and my
          journey into the world of programming began at the young age of 12
          when my passion for coding was ignited by the fascinating realm of
          game development.
        </span>
        <br/>
        <br/>
        <span style="padding-top: 16px">
          I vividly remember my early days experimenting with Game Maker,
          initially using its no-code, drag-and-drop features. However, my
          curiosity soon led me to delve deeper into its inner workings,
          mastering Game Maker Language and crafting my own games.
        </span>
        <br/>
        <br/>
        <span style="padding-top: 16px">
          Fast-forward 16 years, and you'll discover a
          <span style="color: #fdba74">Computer Engineer</span>,
          proudly graduated from the engineering faculty of UDELAR
          (Uruguay), and a seasoned
          <span style="color: #fdba74">Web Developer</span> with over 6
          years of experience. Beyond the academic accomplishments, it's the
          thrill of transforming ideas into digital realities and the
          ever-evolving world of web development that continue to fuel my
          passion for coding.
        </span>
        <br/>
        <br/>
        <span style="padding-top: 16px">
          <span style="color: #bef264">Join me</span> on this exciting
          journey as we explore the limitless possibilities of technology
          and innovation together.</span>`);

          return instance;
        }}
        options={{
          waitUntilVisible: true,
          cursor: {
            autoPause: false,
          },
          speed: fastDisplay ? 0.1 : 50,
          deleteSpeed: fastDisplay ? 1 : 200,
          html: true,
          afterComplete: () => {
            fullpageApi.setAllowScrolling(true);
            fullpageApi.setKeyboardScrolling(true);
          },
        }}
      />
      <ScrollArrows typingEnded={true} />
    </div>
  );
}
