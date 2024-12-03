"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1, duration: 0.2, ease: "easeIn" },
        }}
        className="relative"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1, duration: 0.2, ease: "easeInOut" },
          }}
          className="relative flex justify-center items-center w-[330px] h-[330px] xl:w-[456px] xl:h-[456px]"
        >
          <Image
            src={"/heroimage.png"}
            fill
            priority
            quality={100}
            alt="Hero Picture"
            className="object-contain"
          />
          <motion.svg
            className="absolute overflow-visible w-[330px] h-[330px] xl:w-[506px] xl:h-[506px]"
            fill="transparent"
            viewBox="0 0 506 506"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.circle
              cx="253"
              cy="253"
              r="250"
              stroke="#9290C3"
              strokeWidth="10"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ strokeDasharray: "40 20 0 0" }}
              animate={{
                strokeDasharray: [
                  "15 120 25 25", 
                  "16 25 92 72", 
                  "4 250 22 22"
                ],
                rotate: [0, 180, 360],
                scale: [1, 1.1, 1],
                stroke: ["#9290C3", "#FFD700", "#FF69B4", "#9290C3"],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
            />
          </motion.svg>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Photo;
