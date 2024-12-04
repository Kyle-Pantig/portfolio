import React from "react";
import { Card, Carousel } from "./ui/CarouselProjects";
import DummyContent from "./DummyContent";
import Image from "next/image";

const data = [
  {
    category: "Website",
    title: "The Beauty of Lovebirds",
    src: "/rp1.png",
    content: <DummyContent id={1} />,
  },
  {
    category: "E-Commerce",
    title: "Frontend Go-Carte",
    src: "/rp2.png",
    content: <DummyContent id={2} />,
  },
  {
    category: "E-Commerce",
    title: "Sculptural Ornamentation",
    src: "/rp3.png",
    content: <DummyContent id={3} />,
  },

  {
    category: "Website",
    title: "Golden Era.",
    src: "/rp4-2.png",
    content: <DummyContent id={4} />,
  },
  {
    category: "Website",
    title: "Bracketing Method",
    src: "/rp5.png",
    content: <DummyContent id={5} />,
  },
  {
    category: "Website",
    title: "Frontend SMS Clone",
    src: "/rp6.png",
    content: <DummyContent id={6} />,
  },
  {
    category: "Website",
    title: "Todo List",
    src: "/rp7.png",
    content: <DummyContent id={7} />,
  },
  {
    category: "Website",
    title: "Linear Equation",
    src: "/rp8.png",
    content: <DummyContent id={8} />,
  },
  {
    category: "Website",
    title: "Waste Management",
    src: "/rp9.png",
    content: <DummyContent id={9} />,
  },
  {
    category: "Python GUI",
    title: "Implementing CRUD operations",
    src: "/rp10.png",
    content: <DummyContent id={10} />,
  },
  {
    category: "Python GUI",
    title: "Basic Calculator",
    src: "/rp11.png",
    content: <DummyContent id={11} />,
  },
  {
    category: "Python GUI",
    title: "DDO Vale Puzzle Solver",
    src: "/rp12.png",
    content: <DummyContent id={12} />,
  },
  {
    category: "Desktop Application",
    title: "Quiz History App",
    src: "/rp13.png",
    content: <DummyContent id={13} />,
  },
  {
    category: "Desktop Application",
    title: "DHVSU Room Checker",
    src: "/rp14-1.png",
    content: <DummyContent id={14} />,
  },
  {
    category: "Desktop Application",
    title: "Burger Ordering System",
    src: "/rp15.png",
    content: <DummyContent id={15} />,
  },
];

const RecentProjects = () => {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="pt-20 relative" id="projects">
      <div className="w-full absolute left-0 top-32 min-h-96">
        <Image
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
          width={100}
          height={100}
        />
      </div>
      <h1 className="heading">
        Highlights of {""}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16">
        <div className="w-full h-full">
          <Carousel items={cards} />
        </div>
      </div>
    </div>
  );
};

export default RecentProjects;
