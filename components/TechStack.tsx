"use client";
import { AnimatedTooltip } from "./ui/Tools";
import { techStack } from "@/data";
import { LampContainer } from "./ui/Lamp";
import { motion } from "framer-motion";

const TechStack = () => {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text  "
      >
        <div className="relative top-56">
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-x-24 gap-y-10 justify-items-center">
            {techStack.map((tech) => (
              <div key={tech.id}>
                <AnimatedTooltip items={[tech]} />
              </div>
            ))}
          </div>
        </div>
      </motion.h1>
    </LampContainer>
  );
};

export default TechStack;
