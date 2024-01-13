"use client";

import React from "react";

import ReactFullpage from "@fullpage/react-fullpage";
import Home from "./components/Home";

export default function Page() {
  return (
    <ReactFullpage
      //fullpage options
      credits={{ enabled: true }}
      scrollingSpeed={1000} /* Options here */
      verticalCentered={false}
      scrollOverflow={false}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <Home fullpageApi={fullpageApi} />
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
}
