"use client";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
  points?: string[];
};

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => index === active;

  const gradients = [
    "linear-gradient(135deg, #667eea, #764ba2)",
    "linear-gradient(135deg, #f093fb, #f5576c)",
    "linear-gradient(135deg, #4facfe, #00f2fe)",
    "linear-gradient(135deg, #43e97b, #38f9d7)",
    "linear-gradient(135deg, #fa709a, #fee140)",
  ];

  const getGradient = (index: number) =>
    gradients[index % gradients.length];

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () =>
    Math.floor(Math.random() * 21) - 10;

  return (
    <div className="mx-auto max-w-sm px-4 py-20 font-sans antialiased md:max-w-5xl md:px-8 lg:px-8">
      <div className="relative grid grid-cols-1 gap-16 md:grid-cols-2">

        {/* LEFT: Project Cards */}
        <div>
          <div className="relative h-80 w-full">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index)
                      ? 40
                      : testimonials.length + 2 - index,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <motion.div
                    className="h-full w-full rounded-3xl p-6 flex flex-col justify-end text-white shadow-xl"
                    style={{
                      background: getGradient(index),
                    }}
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <div>
                      <p className="text-xs uppercase tracking-widest text-white/70 mb-1">
                        Project
                      </p>
                      <h3 className="text-2xl font-bold leading-tight">
                        {testimonial.name}
                      </h3>
                      <p className="text-xs text-white/80 mt-1">
                        {testimonial.designation}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* RIGHT: Content */}
        <div className="flex flex-col justify-between py-2">
          <motion.div
            key={active}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
    

            {/* Description + Points */}
            <div className="space-y-6">

              {/* Quote */}
              <motion.p className=" text-zinc-200 text-xl leading-relaxed">
                {testimonials[active].quote}
              </motion.p>

              {/* Points */}
              <ul className="space-y-2 text-lg w-full ">
                {testimonials[active].points?.map((point, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * i }}
                    className="flex items-start gap-2  text-zinc-400"
                  >
                    <span className="text-emerald-400 mt-1">✓</span>
                    <span>{point}</span>
                  </motion.li>
                ))}
              </ul>

            </div>
          </motion.div>

          {/* Controls */}
          <div className="flex gap-4 pt-10">
            <button
              onClick={handlePrev}
              className="group flex h-8 w-8 items-center justify-center rounded-full bg-neutral-800 hover:bg-neutral-700"
            >
              <FaArrowLeft className="h-5 w-5 text-white transition-transform group-hover:rotate-12" />
            </button>
            <button
              onClick={handleNext}
              className="group flex h-8 w-8 items-center justify-center rounded-full bg-neutral-800 hover:bg-neutral-700"
            >
              <FaArrowRight className="h-5 w-5 text-white transition-transform group-hover:-rotate-12" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};