"use client";

import { HoverEffect, type HoverEffectItem } from "@/components/ui/card-hover-effect";
import { cn } from "@/lib/utils";

function SkillPills({ skills }: { skills: string[] }) {
  return (
    <div className="flex flex-wrap gap-2.5 ">
      {skills.map((label) => (
        <span
          key={label}
          className={cn(
            "rounded-full border border-slate-600/90 bg-[#121826] px-3.5 py-1.5",
            "text-xs font-semibold text-white shadow-sm sm:text-sm",
            "ring-1 ring-inset ring-white/5",
          )}
        >
          {label}
        </span>
      ))}
    </div>
  );
}

const skillCategories: HoverEffectItem[] = [
  {
    title: "Frontend",
    compactContent: true,
    titleClassName:
      "text-xl font-bold tracking-tight text-[#5c6bc0] sm:text-2xl",
    cardClassName:
      "!rounded-xl border border-slate-700/60 bg-[#1a1f2e] shadow-none group-hover:border-slate-500/70",
    content: (
      <SkillPills
        skills={["HTML5", "CSS3", "JavaScript", "ReactJS", "NextJS" ,"TypeScript", "Tailwind CSS" ,"Bootsrap5"]}
      />
    ),
  },
  {
    title: "Backend",
    compactContent: true,
    titleClassName:
      "text-xl font-bold tracking-tight text-[#5c6bc0] sm:text-2xl",
    cardClassName:
      "!rounded-xl border border-slate-700/60 bg-[#1a1f2e] shadow-none group-hover:border-slate-500/70",
    content: (
      <SkillPills
        skills={["Node.js", "Express.js", "Socket.io", "Java" , "REST APIs"]}
      />
    ),
  },
  {
    title: "Database",
    compactContent: true,
    titleClassName:
      "text-xl font-bold tracking-tight text-[#5c6bc0] sm:text-2xl",
    cardClassName:
      "!rounded-xl border border-slate-700/60 bg-[#1a1f2e] shadow-none group-hover:border-slate-500/70",
    content: <SkillPills skills={["MongoDB" , "MySQL" , "PostgreSQL" , "Redis"]} />,
  },
  {
    title: "Cloud & DevOps",
    compactContent: true,
    titleClassName:
      "text-xl font-bold tracking-tight text-[#5c6bc0] sm:text-2xl",
    cardClassName:
      "!rounded-xl border border-slate-700/60 bg-[#1a1f2e] shadow-none group-hover:border-slate-500/70",
    content: <SkillPills skills={["AWS", "Docker" , "Git"]} />,
  },
];

export function TechCard() {
  return (
    <div className="w-full max-w-2xl px-4 ">
      <HoverEffect
        items={skillCategories}
        motionGroup="tech-stack"
        className="gap-5 py-4"
      />
    </div>
  );
}
