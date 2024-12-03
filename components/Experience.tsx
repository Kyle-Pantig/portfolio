import { workExperience } from "@/data";
import React from "react";
import { Button } from "./ui/MovingBorder";
import Image from "next/image";

const Experience = () => {
  return (
    <div className="pb-20" id="services">
      <h1 className="heading">
        My <span className="text-purple">experience</span>
      </h1>
      <div className="w-full mt-20 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            borderRadius="1.75rem"
            className="flex-1 text-white border-neutral-200 dark:border-slate-800 cursor-default"
            duration={Math.floor(Math.random() * 100000)}
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2 ">
              <Image
                src={card.thumbnail}
                alt={card.title}
                className="lg:w-32 md:w-20 w-20 h-20"
                width={20}
                height={20}
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <p className="text-start text-white-100 mt-3 font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
