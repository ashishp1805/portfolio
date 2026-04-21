"use client";

import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({
  data,
  className,
  showHeader = true,
  headerTitle = "Experience",
  headerDescription = "I have over a year of experience working in a company, collaborating with teams to build and maintain web applications.",
  variant = "default",
}: {
  data: TimelineEntry[];
  className?: string;
  showHeader?: boolean;
  headerTitle?: string;
  headerDescription?: string;
  /** `dark` matches black experience section (line, dots, typography). */
  variant?: "default" | "dark";
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  const isDark = variant === "dark";

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref, data.length]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className={cn(
        "w-full font-sans md:px-10",
        isDark ? "bg-transparent" : "bg-white dark:bg-neutral-950",
        className,
      )}
      ref={containerRef}
    >
      {showHeader ? (
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 lg:px-10 lg:py-20">
          <h2
            className={cn(
              "mb-4 max-w-7xl text-center text-5xl font-bold md:text-7xl",
              isDark ? "text-white" : "text-black dark:text-white",
            )}
          >
            {headerTitle}
          </h2>
          <p
            className={cn(
              "text-center text-sm md:text-lg",
              isDark
                ? "text-zinc-400"
                : "text-neutral-700 dark:text-neutral-300",
            )}
          >
            {headerDescription}
          </p>
        </div>
      ) : null}

      <div ref={ref} className="relative mx-auto max-w-6xl pb-8">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-8 md:gap-8 lg:gap-12"
          >
            <div className="sticky top-40 z-40 flex max-w-xs flex-col items-center self-start md:flex-row lg:max-w-sm md:w-full">
              <div
                className={cn(
                  "absolute left-3 flex h-10 w-10 items-center justify-center rounded-full md:left-3",
                  isDark
                    ? "bg-black ring-1 ring-zinc-700"
                    : "bg-white dark:bg-black",
                )}
              >
                <div
                  className={cn(
                    "h-4 w-4 rounded-full border p-2",
                    isDark
                      ? "border-zinc-600 bg-zinc-800"
                      : "border-neutral-300 bg-neutral-200 dark:border-neutral-700 dark:bg-neutral-800",
                  )}
                />
              </div>
              <h3
                className={cn(
                  "hidden max-w-[11rem] font-bold leading-snug md:block md:pl-20 md:text-lg lg:max-w-xs lg:text-xl",
                  isDark ? "text-zinc-500" : "text-neutral-600 dark:text-neutral-500",
                )}
              >
                {item.title}
              </h3>
            </div>

            <div className="relative w-full pl-20 pr-4 md:pl-4">
              <h3
                className={cn(
                  "mb-4 block text-left text-lg font-bold md:hidden",
                  isDark ? "text-zinc-400" : "text-neutral-600 dark:text-neutral-400",
                )}
              >
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{ height: height + "px" }}
          className={cn(
            "absolute left-8 top-0 w-[2px] overflow-hidden md:left-8",
            isDark
              ? "bg-gradient-to-b from-transparent from-0% via-zinc-700 to-transparent to-99% mask-[linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
              : "bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] dark:via-neutral-700",
          )}
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] rounded-full bg-gradient-to-t from-indigo-500 via-violet-500 to-transparent from-0% via-10%"
          />
        </div>
      </div>
    </div>
  );
};
