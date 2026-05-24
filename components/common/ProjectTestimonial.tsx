"use client";
import { Modal } from "../ui/Modal";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import {
  IconTerminal,
  IconCpu,
  IconDatabase,
  IconServer,
  IconCheck,
  IconPlayerPlay,
  IconHeart,
  IconMapPin,
  IconVolume
} from "@tabler/icons-react";
import { MoreProject } from "./MoreProjects";

interface Project {
  name: string;
  category: "fullstack" | "backend";
  designation: string;
  quote: string;
  points: string[];
  githubUrl: string;
  liveUrl?: string;
  stats: { label: string; value: string; icon: React.ReactNode }[];
  techStack: string[];
  mockupType: "phone" | "browser" | "tablet" | "terminal";
}

export function ProjectTestimonial() {
  const [selectedCategory, setSelectedCategory] = useState<"all" | "fullstack" | "backend">("all");
  const [activeId, setActiveId] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalProject, setModalProject] = useState<Project | null>(null);
  // --- Interactive States for Mockups ---

  // 1. Trex Social Mobile States
  const [trexLikes, setTrexLikes] = useState(254);
  const [hasLikedTrex, setHasLikedTrex] = useState(false);

  // 2. Leinster GAA Ticket States
  const [selectedSeats, setSelectedSeats] = useState<number[]>([14, 15]);
  const reservedSeats = [0, 4, 8, 12, 19, 23, 27, 31];

  // 3. Digital Tin Whistle States
  const [whistleHoles, setWhistleHoles] = useState<boolean[]>([true, true, true, true, false, false]);

  // 4. Library Management Terminal States
  const [terminalLogs, setTerminalLogs] = useState<
    Array<{ text: string; type: "info" | "command" | "loading" | "success" | "json" }>
  >([
    { text: "[SYSTEM] Initializing node.js express backend server...", type: "info" },
    { text: "[DB] MongoDB connection established successfully.", type: "info" },
    { text: "[READY] REST APIs loaded. Monitoring active requests...", type: "info" },
  ]);

  const terminalEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll terminal
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [terminalLogs]);

  // Terminal Auto-Simulation Loop
  useEffect(() => {
    if (activeProject.mockupType !== "terminal") return;

    const commands = [
      {
        verb: "GET",
        endpoint: "/api/books",
        data: [
          { id: "bk_109", title: "Mastering Node.js", author: "Aashish P.", status: "Available" },
          { id: "bk_110", title: "Next.js 15 & React 19", author: "Aashish P.", status: "Borrowed" }
        ]
      },
      {
        verb: "POST",
        endpoint: "/api/borrow",
        data: {
          success: true,
          message: "Book 'Next.js 15 & React 19' borrowed successfully.",
          dueDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
        }
      },
      {
        verb: "GET",
        endpoint: "/api/system/stats",
        data: {
          database: "MongoDB Atlas",
          status: "Healthy",
          avgResponseTime: "8.5ms",
          activeConnections: 12
        }
      }
    ];

    let cmdIdx = 0;
    const interval = setInterval(() => {
      const cmd = commands[cmdIdx];

      setTerminalLogs((prev) => [
        ...prev,
        { text: `ashish@portfolio-server:~$ curl -X ${cmd.verb} http://localhost:5000${cmd.endpoint}`, type: "command" },
        { text: `[HTTP] ${cmd.verb} ${cmd.endpoint} - 200 OK - 8.5ms`, type: "success" },
        { text: JSON.stringify(cmd.data, null, 2), type: "json" }
      ]);

      cmdIdx = (cmdIdx + 1) % commands.length;
    }, 4500);

    return () => clearInterval(interval);
  }, [activeId, selectedCategory]);

  const projects: Project[] = [
    {
      name: "Trex Social App",
      category: "backend",
      designation: "Backend · Node.js · MongoDB · AWS S3 · Socket.io · Deeplinking",
      quote: "Engineered a scalable social media backend with secure authentication, optimized APIs, and efficient media handling using AWS S3 pre-signed URLs.",
      points: [
        "Architected and developed scalable RESTful APIs for users, posts, and interactions to ensure efficient data flow and performance",
        "Engineered secure media upload functionality using AWS S3 pre-signed URLs, reducing server load and improving upload speed",
        "Implemented robust authentication and content management systems to enhance security and user experience",
        "Designed and managed trek-based features with city-based collections and dynamic itineraries for better content organization",
        "Developed real-time chat functionality using Socket.IO, enabling seamless and instant user communication"
      ],
      githubUrl: "https://github.com/ashishp1805/trex-social-app",
      liveUrl: "https://github.com/ashishp1805/trex-social-app#readme",
      mockupType: "phone",
      stats: [
        { label: "API Speed", value: "<40ms Response", icon: <IconCpu className="h-4 w-4 text-emerald-400" /> },
        { label: "Storage", value: "AWS S3 Uploads", icon: <IconServer className="h-4 w-4 text-sky-400" /> },
        { label: "Realtime", value: "Socket.IO Chat", icon: <IconDatabase className="h-4 w-4 text-purple-400" /> }
      ],
      techStack: ["Node.js", "Express", "MongoDB", "AWS S3", "Socket.io", "Deeplinking"]
    },
    {
      name: "Leinster GAA",
      category: "fullstack",
      designation: "Full Stack · MERN · API Integration",
      quote: "Developed a full-stack ticket booking platform with real-time flow by integrating external APIs like Universe and Servasport.",
      points: [
        "Built admin panel and user-facing booking system",
        "Integrated third-party APIs for ticketing flow",
        "Handled real-time data and booking logic"
      ],
      githubUrl: "https://github.com/ashishp1805/leinster-gaa",
      liveUrl: "https://leinstergaa.ie",
      mockupType: "browser",
      stats: [
        { label: "Checkout", value: "3-Step Flow", icon: <IconCpu className="h-4 w-4 text-amber-400" /> },
        { label: "Ticketing API", value: "Universe Integration", icon: <IconServer className="h-4 w-4 text-rose-400" /> },
        { label: "Database", value: "Realtime Cache", icon: <IconDatabase className="h-4 w-4 text-emerald-400" /> }
      ],
      techStack: ["React.js", "Node.js", "Express", "MongoDB", "Universe API", "Servasport"]
    },
    {
      name: "Digital Tin Whistle",
      category: "fullstack",
      designation: "React.js · Node.js · TypeScript · MongoDB · AWS",
      quote: "Created a full-stack e-learning platform with admin dashboard, user roles, and structured content delivery system.",
      points: [
        "Developed admin dashboard for course & teacher management",
        "Implemented user roles like teacher and student and access control",
        "Designed scalable backend for content delivery",
        "Implemented Tone.js library for audio notes playback and sheet rests"
      ],
      githubUrl: "https://github.com/ashishp1805/digital-tin-whistle",
      liveUrl: "https://digitaltinwhistle.com",
      mockupType: "tablet",
      stats: [
        { label: "Synth Engine", value: "Tone.js Library", icon: <IconCpu className="h-4 w-4 text-purple-400" /> },
        { label: "Authentication", value: "Role-Based Auth", icon: <IconServer className="h-4 w-4 text-emerald-400" /> },
        { label: "Hosting", value: "AWS Infrastructure", icon: <IconDatabase className="h-4 w-4 text-sky-400" /> }
      ],
      techStack: ["React.js", "Node.js", "TypeScript", "MongoDB", "AWS", "Tone.js"]
    },
    {
      name: "Library Management System",
      category: "backend",
      designation: "Backend · Node.js · MongoDB",
      quote: "Built a CRUD-based library management system to handle books, users, and borrowing operations using REST APIs.",
      points: [
        "Implemented CRUD operations for books and users",
        "Designed database schema using MongoDB",
        "Built REST APIs for data handling"
      ],
      githubUrl: "https://github.com/ashishp1805/library-management-system",
      liveUrl: "https://github.com/ashishp1805/library-management-system#readme",
      mockupType: "terminal",
      stats: [
        { label: "API Testing", value: "Interactive CLI", icon: <IconCpu className="h-4 w-4 text-emerald-400" /> },
        { label: "Latency", value: "<15ms DB Query", icon: <IconServer className="h-4 w-4 text-indigo-400" /> },
        { label: "Storage", value: "Mongoose Models", icon: <IconDatabase className="h-4 w-4 text-pink-400" /> }
      ],
      techStack: ["Node.js", "Express", "MongoDB", "REST APIs", "Mongoose", "Postman"]
    }
  ];

  // Filter projects based on category
  const filteredProjects = projects.filter(
    (p) => selectedCategory === "all" || p.category === selectedCategory
  );

  // Reset active ID safely when category updates
  useEffect(() => {
    setActiveId(0);
  }, [selectedCategory]);

  const activeProject = filteredProjects[activeId] || filteredProjects[0] || projects[0];

  // --- Handlers for Leinster GAA Seat Grid ---
  const toggleSeat = (index: number) => {
    if (reservedSeats.includes(index)) return;
    setSelectedSeats((prev) =>
      prev.includes(index) ? prev.filter((s) => s !== index) : [...prev, index]
    );
  };

  const handleTrexLike = () => {
    if (hasLikedTrex) {
      setTrexLikes((prev) => prev - 1);
      setHasLikedTrex(false);
    } else {
      setTrexLikes((prev) => prev + 1);
      setHasLikedTrex(true);
    }
  };

  // --- Handlers for Tin Whistle Fingering ---
  const toggleWhistleHole = (index: number) => {
    setWhistleHoles((prev) => {
      const updated = [...prev];
      updated[index] = !updated[index];
      return updated;
    });
  };

  const getWhistleNote = (holes: boolean[]) => {
    let coveredCount = 0;
    for (let i = 0; i < 6; i++) {
      if (holes[i]) coveredCount++;
      else break;
    }
    const notes = ["C#", "B", "A", "G", "F#", "E", "D"];
    return notes[coveredCount] || "C#";
  };

  const clearTerminal = () => {
    setTerminalLogs([
      { text: "[SYSTEM] Terminal logs cleared. Monitoring...", type: "info" }
    ]);
  };

  return (
    <section id="projects" className="relative w-full bg-black py-20 overflow-hidden">

      {/* Grid Background */}
      <div
        className={cn(
          "absolute inset-0 pointer-events-none",
          "bg-size-[40px_40px]",
          "bg-[linear-gradient(to_right,#1b1b1b_1px,transparent_1px),linear-gradient(to_bottom,#1b1b1b_1px,transparent_1px)]"
        )}
      />

      {/* Radial Fade Overlay */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      <div className="relative z-20 mx-auto max-w-7xl px-4 md:px-8">

        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-3 py-1 text-xs font-semibold tracking-wider text-emerald-400 bg-emerald-500/10 rounded-full border border-emerald-500/20"
          >
            MY WORK
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-transparent mt-4"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-neutral-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed"
          >
            A curated showcase of applications highlighting backend engineering, full-stack systems, API integrations, and robust architectures.
          </motion.p>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex justify-center items-center gap-2 md:gap-4 mb-12">
          {(["all", "fullstack", "backend"] as const).map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={cn(
                "relative px-4 py-2 text-xs md:text-sm font-medium rounded-full transition-all duration-300 capitalize cursor-pointer",
                selectedCategory === category
                  ? "text-white"
                  : "text-neutral-500 hover:text-neutral-300"
              )}
            >
              {selectedCategory === category && (
                <motion.div
                  layoutId="activeTabIndicator"
                  className="absolute inset-0 bg-neutral-900 border border-neutral-800 rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">
                {category === "all" ? "All Projects" : category === "fullstack" ? "Full Stack" : "Backend"}
              </span>
            </button>
          ))}
        </div>

        {/* Main Interactive Station Grid */}
        <section className="py-12 bg-neutral-950">
          <div className="container mx-auto px-4"><div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, idx) => {
                const isActive = activeProject.name === project.name;
                return (
                  <motion.div
                    key={project.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => {
                      setActiveId(idx);
                      setModalProject(project);
                      setModalOpen(true);
                    }}
                    className={cn(
                      "p-5 h-72 rounded-2xl border transition-all duration-300 cursor-pointer text-left relative overflow-hidden group hover:shadow-lg flex flex-col justify-between",
                      isActive
                        ? "bg-neutral-900/60 border-neutral-700/80 shadow-md shadow-emerald-500/5"
                        : "bg-neutral-900/30 border-neutral-800 hover:border-neutral-700 hover:bg-neutral-800/20"
                    )}
                  >
                    {/* First-letter avatar */}
                    <div className="flex items-center justify-center h-52 mb-2 bg-gradient-to-br from-emerald-500 to-indigo-500 rounded-md text-4xl font-bold text-white">
                      {project.name.charAt(0)}
                    </div>
                    <span className="text-[10px] uppercase tracking-wider text-neutral-500 font-semibold mb-1 block">
                      {project.category === "fullstack" ? "Full Stack Application" : "Backend Infrastructure"}
                    </span>
                    <h3 className={cn(
                      "text-lg font-bold transition-colors",
                      isActive ? "text-white" : "text-neutral-300 group-hover:text-white"
                    )}>
                      {project.name}
                    </h3>
                    <p className="text-xs text-neutral-400 mt-2 line-clamp-2">
                      {project.quote}
                    </p>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
          </div>
        </section>
        {modalOpen && modalProject && (
          <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
            <h2 className="text-2xl font-bold text-white mb-4">{modalProject.name}</h2>
            <p className="text-neutral-400 mb-2">{modalProject.designation}</p>
            <p className="text-neutral-300 mb-4">{modalProject.quote}</p>
            <h3 className="text-lg font-semibold text-neutral-200 mb-2">Key Implementations</h3>
            <ul className="list-disc list-inside space-y-1 text-neutral-400">
              {modalProject.points.map((pt, i) => (
                <li key={i}>{pt}</li>
              ))}
            </ul>
            <h3 className="text-lg font-semibold text-neutral-200 mt-4 mb-2">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {modalProject.techStack.map((tech) => (
                <span key={tech} className="text-xs font-mono px-2 py-0.5 bg-neutral-900/90 text-neutral-300 rounded border border-neutral-805">
                  {tech}
                </span>
              ))}
            </div>
          </Modal>
        )}

        {/* More Projects Section trigger */}
        <MoreProject />

      </div>
    </section>
  );
}
