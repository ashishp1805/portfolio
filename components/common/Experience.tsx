"use client";

import React from "react";
import {
  HoverCardRow,
  type HoverEffectItem,
} from "@/components/ui/card-hover-effect";
import { Timeline } from "@/components/ui/timeline";
import { cn } from "@/lib/utils";

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((text) => (
        <li
          key={text}
          className="flex gap-2.5 text-sm leading-relaxed text-zinc-300 sm:text-[15px]"
        >
          <span
            className="mt-0.5 shrink-0 text-emerald-400"
            aria-hidden
          >
            ✓
          </span>
          <span>{text}</span>
        </li>
      ))}
    </ul>
  );
}

function SkillPills({ labels }: { labels: string[] }) {
  return (
    <div className="flex flex-wrap gap-2 pt-1">
      {labels.map((label) => (
        <span
          key={label}
          className={cn(
            "rounded-full border border-indigo-500/35 bg-indigo-950/50 px-3 py-1 text-xs font-medium text-indigo-200",
            "ring-1 ring-inset ring-white/5",
          )}
        >
          {label}
        </span>
      ))}
    </div>
  );
}

function SectionHeading({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h5
      className={cn(
        "mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-500",
        className,
      )}
    >
      {children}
    </h5>
  );
}

export function Experience() {
  const items: HoverEffectItem[] = [
    {
      title: "Associate Software Engineer",
      description: "Impero IT Services · Full Stack Development",
      content: (
        <div className="space-y-4">
          <p className="text-sm text-zinc-400">
            Working on production-level applications across backend systems, admin panels, and user-facing platforms.
          </p>
    
          <CheckList
            items={[
              "Built scalable APIs using Node.js and Express.js",
              "Developed full-stack features including admin dashboards",
              "Optimized MongoDB queries for performance",
              "Integrated third-party APIs in real-world applications",
            ]}
          />
    
          <SkillPills
            labels={["Node.js", "Express", "MongoDB", "React", "APIs"]}
          />
        </div>
      ),
    },
    {
      title: "Software Engineer Trainee",
      description: "Impero IT Services · Backend Foundations",
      content: (
        <div className="space-y-4">
          <p className="text-sm text-zinc-400">
            Built strong fundamentals in backend development, real-time systems, and full-stack basics through hands-on projects.
          </p>
    
          <CheckList
            items={[
              "Developed REST APIs using Node.js and Express",
              "Worked with MongoDB for data handling",
              "Built real-time features using Socket.io",
              "Implemented AWS S3 file uploads (pre-signed URLs)",
            ]}
          />
    
          <SkillPills
            labels={["JavaScript", "Node.js", "MongoDB", "Socket.io", "AWS"]}
          />
        </div>
      ),
    }
  ];

  const timelineData = [
   
    {
      title: "Jan 2025 – Jun 2025",
      content: <HoverCardRow item={items[1]} motionGroup="experience" index={1} />,
    },
    {
      title: "Jul 2025 – Present",
      content: <HoverCardRow item={items[0]} motionGroup="experience" index={0} />,
    },
  ];

  return (
    <section id="experience" className="relative w-full bg-black">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(99,102,241,0.12),transparent)]" />
      <div className="relative mx-auto max-w-6xl px-4 pb-24 pt-20 md:px-8">
        <div className="mb-10 text-center md:mb-14">
          <h2 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
            Experience
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-zinc-400 md:text-lg">
            Real roles, shipped work, and the stack I picked up along the way.
          </p>
        </div>

        <Timeline
          data={timelineData}
          showHeader={false}
          variant="dark"
          className="md:px-0"
        />
      </div>
    </section>
  );
}
