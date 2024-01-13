"use client";

import React, { useEffect } from "react";
import { main } from "./Graph";

export default function GraphBackground() {
  useEffect(() => {
    main();
  }, []);

  return (
    <div className="w-full">
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full min-h-screen"
      >
        <rect width="1" height="0.5" fill="url(#background-gradient)" />
        <g strokeWidth="0.0008"></g>
      </svg>
    </div>
  );
}
