import { cn } from "@/lib/utils";
import React from "react";
import { AboutMeDescription } from "./AboutMeDescription";
import { TechCard } from "./TechCard";

export function AboutMeBackground() {
  return (
    <section
      id="about"
      className="relative flex h-full w-full items-center justify-center bg-white dark:bg-black"
    >
      <div
        className={cn(
          "absolute inset-0",
            "bg-size-[40px_40px]",
            "bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center  flex-col align-middle justify-center bg-white mask-[radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      <div className="relative z-20 flex flex-col items-center justify-center w-full">
        <p className="relative z-20 bg-linear-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl mt-0 lg:mt-5 text-center mx-auto max-w-7xl">
          About Me
        </p>
        <div className="relative z-20 mx-auto flex w-full max-w-7xl flex-col items-stretch gap-12 px-4 pb-16 lg:flex-row lg:items-start lg:gap-8 lg:px-8">
          <div className="flex w-full flex-1 items-center justify-center lg:w-1/2">
            <AboutMeDescription />
          </div>
          <div className="flex w-full flex-1 items-start justify-center rounded-2xl border border-neutral-200/90  py-4 dark:border-transparent  lg:w-1/2 lg:py-4">
            <TechCard />
          </div>
        </div>
      </div>
    </section>
  );
}
