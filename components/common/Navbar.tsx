"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-5" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
      >
      <Menu setActive={setActive}>
       <HoveredLink href="#home">Home</HoveredLink>
       <HoveredLink href="#about">About</HoveredLink>
       <HoveredLink href="#experience">Experience</HoveredLink>
       <HoveredLink href="#projects">Projects</HoveredLink>
       <HoveredLink href="#contact">Contacts</HoveredLink>


      </Menu>
    </div>
  );
}
