"use client";
import React from "react";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import { IconBrandGithub } from "@tabler/icons-react";

export function MoreProject() {
  const words = [
    {
      text: "Want",
    },
    {
      text: "to",
    },
    {
      text: "see",
    },
    {
      text: "more",
    },
    {
      text: "projects?",
      className: "text-emerald-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center mt-24 m-5 p-5 mx-auto w-full">
      <TypewriterEffectSmooth words={words} />
      <p className="text-neutral-500 dark:text-neutral-400 text-sm sm:text-base mb-6 max-w-md text-center">
        Explore my complete repositories, open-source contributions, and experimentations on GitHub.
      </p>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <a 
          href="https://github.com/ashishp1805"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-12 w-48 items-center justify-center gap-2 rounded-xl bg-neutral-900 border border-neutral-800 text-white text-sm font-semibold hover:bg-neutral-800 hover:border-neutral-700 hover:shadow-lg hover:shadow-emerald-500/5 transition-all duration-300 cursor-pointer"
        >
          <IconBrandGithub className="h-4 w-4" />
          View All Projects
        </a>
      </div>
    </div>
  );
}

