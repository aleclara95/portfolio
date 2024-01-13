"use client";

import React, { useEffect } from "react";

import Image from "next/image";
import { fullpageApi } from "@fullpage/react-fullpage";

import GraphBackground from "./GraphBackground";
import TypewriterIntro from "./TypewriterIntro";
import TypewriterMe from "./TypewriterMe";

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
          <Image
            src="/image/me_edit.jpg"
            width={500}
            height={500}
            alt="Picture of the author"
            className="lg:mr-8 p-8 rounded-full"
          />
          <div className="p-8 text-justify lg:p-0 lg:w-1/2">
            <TypewriterMe fullpageApi={fullpageApi} fastDisplay />
          </div>
        </div>
      </section>
    </div>
  );
}
