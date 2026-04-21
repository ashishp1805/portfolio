"use client";
import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";

export function ContactForm({
  showIntro = true,
}: {
  showIntro?: boolean;
}) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="shadow-input relative z-20 mx-auto w-full max-w-md rounded-none border border-neutral-200 bg-white p-4 md:rounded-2xl md:p-8 dark:border-neutral-800 dark:bg-black">
      {showIntro ? (
        <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
          Have a project idea or job opportunity? Fill this form and I’ll get back
          within 24 hours.
        </p>
      ) : null}

      {/* Form */}
      <form className="my-8" onSubmit={handleSubmit}>

        {/* Name */}
        <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
          <LabelInputContainer>
            <Label htmlFor="firstname">First Name</Label>
            <Input id="firstname" placeholder="John" type="text" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last Name</Label>
            <Input id="lastname" placeholder="Doe" type="text" />
          </LabelInputContainer>
        </div>

        {/* Email */}
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="john@example.com" type="email" />
        </LabelInputContainer>

        {/* Phone */}
        <LabelInputContainer className="mb-4">
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" placeholder="+91 9876543210" type="tel" />
        </LabelInputContainer>

        {/* Message */}
        <LabelInputContainer className="mb-6">
          <Label htmlFor="message">Project Details</Label>
          <textarea
            id="message"
            placeholder="Tell me about your project, timeline, budget..."
            rows={4}
            className={cn(
              "shadow-input flex w-full rounded-md border-none bg-gray-50 px-3 py-2 text-sm text-black",
              "placeholder:text-neutral-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400",
              "dark:bg-zinc-800 dark:text-white dark:focus-visible:ring-neutral-600"
            )}
          />
        </LabelInputContainer>

        {/* Submit Button */}
        <button
          className="group/btn relative block h-10 w-full rounded-md bg-linear-to-br from-black to-neutral-600 font-medium text-white 
          shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset]
          dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 
          dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
          type="submit"
        >
          Send Message →
          <BottomGradient />
        </button>
      </form>
    </div>
  );
}

/* Gradient effect */
const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-linear-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-linear-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

/* Layout helper */
const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};