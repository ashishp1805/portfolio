"use client";
import { Tooltip } from "@/components/ui/tooltip-card";
import React from "react";

export function AboutMeDescription() {
  return (
    <div className="mx-auto max-w-5xl p-4 md:p-8 mt-10">
      <p className="text-xl text-white">
        My name is Aashish, and I am a Full Stack Developer with hands-on experience building modern, scalable, and user-friendly web applications. I specialize in working with{" "}
        <Tooltip
          containerClassName="text-white"
          content="React is a JavaScript library for building user interfaces, particularly web applications. It allows developers to create reusable UI components and manage application state efficiently."
        >
          <span className="cursor-pointer font-bold">React</span>
        </Tooltip>
        {", "}
        <Tooltip
          containerClassName="text-white"
          content="Next.js is a React framework that provides server-side rendering, static site generation, and API routes. It simplifies production-ready React applications with built-in optimizations and routing."
        >
          <span className="cursor-pointer font-bold">Next.js</span>
        </Tooltip>
        {", "}
        <Tooltip
          containerClassName="text-white"
          content="Node.js is a JavaScript runtime built on Chrome's V8 engine that enables server-side JavaScript execution. It's used for building scalable network applications and backend APIs."
        >
          <span className="cursor-pointer font-bold">Node.js</span>
        </Tooltip>
        {", and "}
        <Tooltip
          containerClassName="text-white"
          content="JavaScript is a versatile programming language used for both frontend and backend development. It enables interactive web pages, server-side applications, and is the foundation of modern web development."
        >
          <span className="cursor-pointer font-bold">JavaScript</span>
        </Tooltip>
        {" to create fast, responsive, and reliable digital solutions."}

      </p>
      <br />
      <p className="text-xl text-white">
        On the frontend, I focus on clean UI, smooth user experiences, and performance-driven development. On the backend, I build secure APIs, handle databases, and manage application logic using{" "}
        <Tooltip
          containerClassName="text-white"
          content="Node.js is a JavaScript runtime built on Chrome's V8 engine that enables server-side JavaScript execution. It's used for building scalable network applications and backend APIs."
        >
          <span className="cursor-pointer font-bold">Node.js</span>
        </Tooltip>
        {" and related technologies. This full-stack approach allows me to take projects from concept to deployment with confidence."}

      </p>
      <br />
      <p className="text-xl text-white">

        Outside of development, I enjoy learning new technologies, experimenting with tools, and continuously improving my skills to stay aligned with modern web standards and industry best practices.
      </p>
      <br/>
    </div>
  );
}

