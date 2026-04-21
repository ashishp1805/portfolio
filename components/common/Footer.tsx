"use client";

import React from "react";
import { MediaIcons } from "@/components/common/MediaIcons";
import { ScrollToTopButton } from "@/components/common/Button";

export function Footer() {
  return (
    <footer className="w-full bg-white dark:bg-black">
      <div className="mx-auto max-w-7xl px-4 pb-10 pt-10 md:px-8">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <MediaIcons />
          <ScrollToTopButton />
        </div>
        <p className="mt-6 text-center text-xs text-neutral-500 dark:text-neutral-400">
          © {new Date().getFullYear()} Aashish. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

