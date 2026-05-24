
"use client";

import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp, FaTwitter, FaEnvelope } from "react-icons/fa";

export function MediaIcons() {
  const links = [
    {
      title: "Instagram",
      icon: (
        <FaInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.instagram.com/patel_ashish_185/",
    },
    {
      title: "WhatsApp",
      icon: (
        <FaWhatsapp className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://wa.me/917984816169",

    },
    {
      title: "LinkedIn",
      icon: (
        <FaLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/aashish-haripara-857675253/",
    },
    {
      title: "Twitter",
      icon: (
        <FaTwitter className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "GitHub",
      icon: (
        <FaGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/ashishp05",
    },
    {
      title: "Email",
      icon: (
        <FaEnvelope className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "mailto:aashishp1805@gmail.com",
    },
  ];

  return (
    <div className="flex w-full items-center justify-center">
      <FloatingDock items={links} />
    </div>
  );
}
