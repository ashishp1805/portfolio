"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import React, { useState } from "react";

export type HoverEffectItem = {
  title: string;
  description?: string;
  /** If omitted, row is a non-link block (e.g. experience cards). */
  link?: string;
  /** Rich body below the title/description. */
  content?: React.ReactNode;
  /** Use your own card layout (keeps existing colors/styles). */
  customCard?: React.ReactNode;
  /** Override title styles (e.g. skill category color). */
  titleClassName?: string;
  /** Override card shell styles (e.g. navy background). */
  cardClassName?: string;
  /** Tighter block under title with no top divider (e.g. skill pills). */
  compactContent?: boolean;
};

/** One hover card row — use inside timelines or lists. */
export const HoverCardRow = ({
  item,
  motionGroup,
  index,
}: {
  item: HoverEffectItem;
  motionGroup: string;
  index: number;
}) => {
  const [hovered, setHovered] = useState(false);
  const isLink = item.link != null && item.link !== "";

  const rowClass = cn(
    "group relative block h-full w-full rounded-3xl p-2 transition-colors",
    isLink ? "cursor-pointer" : "cursor-default",
  );

  const inner = (
    <>
      <AnimatePresence>
        {hovered && (
          <motion.span
            className="absolute inset-0 block h-full w-full rounded-3xl bg-neutral-200/90 dark:bg-zinc-800/90"
            layoutId={`${motionGroup}-bg-${index}`}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.15 },
            }}
            exit={{
              opacity: 0,
              transition: { duration: 0.15, delay: 0.2 },
            }}
          />
        )}
      </AnimatePresence>
      {item.customCard ? (
        <div className="relative z-20">{item.customCard}</div>
      ) : (
        <Card
          className={cn(
            item.content ? "border-zinc-800" : undefined,
            item.cardClassName,
          )}
        >
          <CardTitle className={cn("mt-0", item.titleClassName)}>
            {item.title}
          </CardTitle>
          {item.description ? (
            <CardDescription className="mt-3">{item.description}</CardDescription>
          ) : null}
          {item.content ? (
            <div
              className={cn(
                "relative z-50",
                item.compactContent
                  ? "mt-4 border-0 pt-0"
                  : "mt-6 border-t border-zinc-800/80 pt-6",
              )}
            >
              {item.content}
            </div>
          ) : null}
        </Card>
      )}
    </>
  );

  if (isLink) {
    return (
      <a
        href={item.link}
        className={rowClass}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {inner}
      </a>
    );
  }

  return (
    <div
      className={rowClass}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {inner}
    </div>
  );
};

export const HoverEffect = ({
  items,
  className,
  /** Prefix for Framer `layoutId` so multiple HoverEffects on one page do not clash. */
  motionGroup = "hover",
}: {
  items: HoverEffectItem[];
  className?: string;
  motionGroup?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col gap-6 py-6", className)}>
      {items.map((item, idx) => (
        <HoverCardRow
          key={`hover-${idx}`}
          item={item}
          motionGroup={motionGroup}
          index={idx}
        />
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "relative z-20 h-full w-full overflow-hidden rounded-2xl border border-transparent bg-black shadow-[0_0_0_1px_rgba(255,255,255,0.06)] transition-shadow duration-300",
        "group-hover:border-zinc-600/50 group-hover:shadow-[0_20px_50px_-24px_rgba(0,0,0,0.8)]",
        "dark:border-white/12",
        className,
      )}
    >
      <div className="relative z-50">
        <div className="p-5 sm:p-6 md:p-8">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4
      className={cn(
        "text-2xl font-bold tracking-tight text-zinc-100 sm:text-3xl",
        className,
      )}
    >
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "text-sm leading-relaxed tracking-wide text-zinc-400 sm:text-base",
        className,
      )}
    >
      {children}
    </p>
  );
};
