"use client";
import React from "react";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { Button } from "../ui/moving-border";
import { CTAButton } from "./Button";
import { FaArrowRight, FaDownload } from "react-icons/fa6";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex w-full flex-col items-start justify-start overflow-hidden py-8"
    >
      <BackgroundRippleEffect />
      <div className="mt-60 w-full">
        <h2 className="relative z-10 mx-auto max-w-5xl text-center text-2xl font-bold text-neutral-800 md:text-4xl lg:text-7xl dark:text-neutral-100">
          Hi, I’m Aashish <br /> Full Stack Developer
        </h2>
        <p className="relative z-10 mx-auto mt-4 w-[80%] text-xl text-center text-neutral-800 dark:text-neutral-500">
          I’m a full-stack developer specializing in React, Next.js, Node.js, and modern JavaScript. I focus on building fast, scalable, and well-structured web applications, handling everything from frontend interfaces to backend logic.
        </p>
        <div className="relative z-10 mx-auto mt-4 w-full flex items-center justify-center gap-5 pt-3 px-5">        
          <CTAButton text="View Projects" icon={<FaArrowRight className="w-4 h-4 ml-2 " />} variant="black" href="#projects" />
          <CTAButton text=" Download CV " icon={<FaDownload className="w-4 h-4 ml-2" />} variant="white" href="/files/Aashish_resume.pdf" download />
        </div>
      </div>
    </section>
  );
}
