import React from "react";
import Button from "./ui/Button";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/data";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full pt-20 pb-10" id="contact">
      <div className="w-full absolute left-0 md:-bottom-72 min-h-96">
        <Image
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
          width={100}
          height={100}
        />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Looking to <span className="text-purple"> boost</span> your
          brand&apos;s visibility online?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Contact me today, and let&apos;s explore how I can support you in
          reaching your objectives.
        </p>
        <a href="mailto:kylepantig@gmail.com" className="z-10">
          <Button
            title="Connect with me"
            icon={<FaLocationArrow />}
            position="right"
            otherClasses="flex items-center gap-4 rounded-md "
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Kyle Pantig
        </p>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((smedia) => (
            <div
              key={smedia.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-100 bg-opacity-75 bg-black-200 rounded-full border border-black-300 mt-4"
            >
              <Link href={smedia.src} target="_blank">
                <Image
                  src={smedia.img}
                  alt={smedia.name}
                  width={20}
                  height={20}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
