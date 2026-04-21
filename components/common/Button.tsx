"use client";
import React from "react";
import { Button } from "../ui/moving-border";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa6";

export function CTAButton({
  text, 
  icon, 
  variant = "black",
  href,
  download
}: {
  text: string; 
  icon: React.ReactNode;
  variant?: "black" | "white";
  href?: string;
  download?: boolean;
}) {
  const className = variant === "black" 
    ? "bg-black text-white text-lg px-3 py-2 border-neutral-400 dark:border-neutral-400 whitespace-nowrap"
    : "bg-white text-black text-lg px-3 py-2 border-black-400 dark:border-black-400 whitespace-nowrap";
  
  const handleClick = () => {
    if (href) {
      if (href.startsWith('#')) {
        // Scroll to section on same page
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else if (download && href.endsWith('.pdf')) {
        // Download PDF
        const link = document.createElement('a');
        link.href = href;
        link.download = href.split('/').pop() || 'resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else if (href.endsWith('.pdf')) {
        // Open PDF in new tab
        window.open(href, '_blank');
      } else {
        // Navigate to route
        window.location.href = href;
      }
    }
  };
  
  return (
    <div>
      <Button
        as="button"
        borderRadius="2rem"
        className={className}
        onClick={handleClick}
      >
        {text} {icon}
      </Button>
    </div>
  );
}

export function ScrollToTopButton() {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative group">
      <Button
        as="button"
        borderRadius="2rem"
        className="bg-black text-white px-3 py-2 border-neutral-400 dark:border-neutral-400"
        onClick={handleClick}
      >
        <FaArrowUp className="h-4 w-4" />
      </Button>
      <span className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md border border-neutral-200 bg-white px-2 py-1 text-xs text-neutral-700 opacity-0 shadow-sm transition-opacity duration-200 group-hover:opacity-100 dark:border-neutral-800 dark:bg-black dark:text-neutral-200">
        Scroll to top
      </span>
    </div>
  );
}
