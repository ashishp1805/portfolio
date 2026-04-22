"use client";

import React from "react";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { cn } from "@/lib/utils";
import { MoreProject } from "./MoreProjects";

export function ProjectTestimonial() {
    const projects = [
      {
  name: "Trex Social App",
  designation: "Backend · Node.js · MongoDB · AWS S3 · Socket.io · Deeplinking",
  quote:
    "Engineered a scalable social media backend with secure authentication, optimized APIs, and efficient media handling using AWS S3 pre-signed URLs.",
  points: [
    "Architected and developed scalable RESTful APIs for users, posts, and interactions to ensure efficient data flow and performance",
    "Engineered secure media upload functionality using AWS S3 pre-signed URLs, reducing server load and improving upload speed",
    "Implemented robust authentication and content management systems to enhance security and user experience",
    "Designed and managed trek-based features with city-based collections and dynamic itineraries for better content organization",
    "Developed real-time chat functionality using Socket.IO, enabling seamless and instant user communication"
  ],
  src: "",
},
        {
          name: "Leinster GAA",
          designation: "Full Stack · MERN · API Integration",
          quote:
            "Developed a full-stack ticket booking platform with real-time flow by integrating external APIs like Universe and Servasport.",
          points: [
            "Built admin panel and user-facing booking system",
            "Integrated third-party APIs for ticketing flow",
            "Handled real-time data and booking logic",

          ],
          src: "",
        },
        {
          name: "Digital Tin Whistle",
          designation: "React.js · Node.js · TypeScript · MongoDB · AWS",
          quote:
            "Created a full-stack e-learning platform with admin dashboard, user roles, and structured content delivery system.",
          points: [
            "Developed admin dashboard for course & teacher management",
            "Implemented user roles like teacher and student and access control",
            "Designed scalable backend for content delivery",
            "Implement tone.js library fot notes and rest"
          ],
          src: "",
        },
        {
          name: "Library Management System",
          designation: "Backend · Node.js · MongoDB",
          quote:
            "Built a CRUD-based library management system to handle books, users, and borrowing operations using REST APIs.",
          points: [
            "Implemented CRUD operations for books and users",
            "Designed database schema using MongoDB",
            "Built REST APIs for data handling",
          ],
          src: "",
        },
      ];


  return (
    <section id="projects" className="relative w-full bg-black py-4">

      {/* Grid Background */}
      <div
        className={cn(
          "absolute inset-0",
          "bg-size-[40px_40px]",
          "bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />

      {/* Radial Fade */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black mask-[radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      {/* Content */}
      <div className="relative z-20 mx-auto max-w-6xl px-4 md:px-8">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-bold bg-linear-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent">
          Featured Projects
          </h2>
          <p className="mt-4 text-zinc-400 max-w-2xl mx-auto text-sm md:text-lg">
          Projects that demonstrate my technical expertise
          </p>
        </div>

        {/* Testimonials */}
        <AnimatedTestimonials testimonials={projects} />
      </div>
    </section>
  );
}
