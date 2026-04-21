"use client";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
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
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center mt-24  m-5 p-5  mx-auto w-full ">
      <TypewriterEffectSmooth words={words} />
      <p className="text-neutral-600 dark:text-neutral-200 text-sm sm:text-base mb-4 ">
        Check out my GitHub profile for more projects
      </p>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          View All Projects
        </button>
        
      </div>
    </div>
  );
}
