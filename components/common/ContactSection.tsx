"use client";

import React from "react";
import { ContactForm } from "@/components/common/ContactForm";
import { HoverEffect, type HoverEffectItem } from "@/components/ui/card-hover-effect";
import { cn } from "@/lib/utils";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

function InfoCardInner({
  title,
  icon,
  value,
}: {
  title: string;
  icon: React.ReactNode;
  value: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-6 transition-shadow duration-300 md:p-7 dark:border-neutral-800 dark:bg-neutral-900/60">
      <div className="flex items-start gap-3">
        <div className=" flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-100 dark:bg-neutral-800">
          {icon}
        </div>
        <div className="min-w-0">
          <p className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
            {title}
          </p>
          <div className="mt-1 wrap-break-word text-md text-neutral-600 dark:text-neutral-400">
            {value}
          </div>
        </div>
      </div>
    </div>
  );
}

export function ContactSection() {
  const contactCards: HoverEffectItem[] = [
    {
      title: "Email",
      customCard: (
        <InfoCardInner
          title="Email"
          icon={
            <FaEnvelope className="h-7 w-7 text-neutral-600 dark:text-neutral-300" />
          }
          value={
            <a
              className="text-indigo-600 hover:underline dark:text-indigo-400 text-md"
              href="mailto:aashishp1805@gmail.com"
            >
              aashishp1805@gmail.com
            </a>
          }
        />
      ),
    },
    {
      title: "Phone",
      customCard: (
        <InfoCardInner
          title="Phone"
          icon={
            <FaPhone className="h-7 w-7 text-neutral-600 dark:text-neutral-300" />
          }
          value={
            <a
              className="text-indigo-600 hover:underline dark:text-indigo-400"
              href="tel:+917984816169"
            >
              +91 7984816169
            </a>
          }
        />
      ),
    },
    {
      title: "LinkedIn",
      customCard: (
        <InfoCardInner
          title="LinkedIn"
          icon={
            <FaLinkedin className="h-7 w-7 text-neutral-600 dark:text-neutral-300" />
          }
          value={
            <a
              className="text-indigo-600 hover:underline dark:text-indigo-400"
              href="https://www.linkedin.com/in/aashish-haripara-857675253/"
            >
              linkedin.com/in/aashish-haripara
            </a>
          }
        />
      ),
    },
    {
      title: "GitHub",
      customCard: (
        <InfoCardInner
          title="GitHub"
          icon={
            <FaGithub className="h-7 w-7 text-neutral-600 dark:text-neutral-300" />
          }
          value={
            <a
              className="text-indigo-600 hover:underline dark:text-indigo-400"
              href="https://github.com/ashishp05"
            >
             github.com/ashishp05
            </a>
          }
        />
      ),
    },
  ];

  return (
    <section id="contact" className="relative w-full bg-white dark:bg-black">
      <div
        className={cn(
          "absolute inset-0",
          "bg-size-[20px_20px]",
          "bg-[radial-gradient(#d4d4d4_1px,transparent_1px)]",
          "dark:bg-[radial-gradient(#404040_1px,transparent_1px)]",
        )}
      />
      <div className="pointer-events-none absolute inset-0 bg-white mask-[radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 md:px-8">
        {/* Common title */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 md:text-5xl">
          Let’s Work Together 🚀
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-neutral-600 dark:text-neutral-400 md:text-base">
            Let&apos;s connect and build something great—reach out through the
            details below or send a message.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12">
          {/* Left */}
          <div className="flex flex-col justify-center">
            <HoverEffect
              items={contactCards}
              motionGroup="contact-cards"
              className="gap-5 py-0"
            />
          </div>

          {/* Right */}
          <div className="flex items-center justify-center">
            <ContactForm showIntro={false} />
          </div>
        </div>
      </div>
    </section>
  );
}

