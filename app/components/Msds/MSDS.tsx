"use client";

import React from "react";
import { data as msdsData } from "./MsdsData";

export function MSDS() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-6">
      {msdsData.map(({ name, link }, idx) => (
        <a
          key={idx}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="border rounded-lg p-4 text-center hover:bg-gray-100 transition-all duration-200 shadow-sm"
        >
          {name}
        </a>
      ))}
    </div>
  );
}
