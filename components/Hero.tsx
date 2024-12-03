import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import Photo from "./Photo";
import Button from "./ui/Button";
import { FaArrowDown } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="md:pt-40 pt-10 md:pb-36 pb:24">
      <div>
        <Spotlight
          className="-top-40 -left-40 
      md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full 
      h-[80vh] w-[50vw]"
          fill="#1B1A55"
        />
        <Spotlight
          className="top-28 left-80 
      h-[80vh] w-[50vw]"
          fill="#535C91"
        />
        <Spotlight
          className="top-40 left-32 
      h-[70vh] w-[30vw]"
          fill="#535C91"
        />
      </div>
      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <div className="flex flex-col justify-center md:flex-row gap-8 items-center relative my-10 z-10  ">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[50vw] flex flex-col text-center md:text-left order-2 md:order-none">
          {/* <h2 className="uppercase tracking-widest text-md text-blue-100">
            Website Developer
          </h2> */}
          <TextGenerateEffect
            className=" text-[40px] md:text-5xl lg:text-6xl "
            words="Turning Ideas into Flawless User Experiences"
          />
          <p className=" md:tracking-wider mb-4 text-sm md:text-lg lg:text-xl max-w-2xl text-white-100">
            Hi, I&apos;m Kyle, a Computer Engineering student at Don Honorio
            Ventura State University. I enjoy creating clean, responsive, and
            user-friendly websites. While I focus on front-end development, I
            also have experience with full-stack projects.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-6 mt-4">
            <a
              href="/Kyle_Resume.pdf"
              download="Kyle_Resume.pdf"
              className="w-full md:w-auto"
            >
              <Button
                title="Download CV"
                position="right"
                icon={<FaArrowDown />}
                otherClasses="flex items-center gap-4 rounded-xl w-full"
              />
            </a>
            <a href="#projects" className="w-full md:w-auto">
              <Button
                title="View projects"
                position="right"
                icon={<FaArrowDown />}
                otherClasses="flex items-center gap-4 rounded-xl w-full"
              />
            </a>
          </div>
        </div>
        <div className="order-1 md:order-none mb-8 md:mb-0">
          <Photo />
        </div>
      </div>
    </div>
  );
};

export default Hero;
