import { Carousel } from "./ui/CarouselProjects";
import Image from "next/image";
import { PinContainer } from "./ui/3DAnimatedPin";

const data = [
  {
    id: 1,
    category: "Website",
    title: "E-Booth",
    imgSrc: "/r16.png",
    src: "https://e-booth.vercel.app",
  },
  {
    id: 2,
    category: "Website",
    title: "The Beauty of Lovebirds",
    imgSrc: "/rp1.png",
    src: "https://thebeautyoflovebirds.netlify.app",
  },
  {
    id: 3,
    category: "E-Commerce",
    title: "Frontend Go-Carte",
    imgSrc: "/rp2.png",
    src: "https://gocarte.netlify.app",
  },
  {
    id: 4,
    category: "E-Commerce",
    title: "Sculptural Ornamentation",
    imgSrc: "/rp3.png",
    src: "/",
  },
  {
    id: 5,
    category: "Website",
    title: "Golden Era.",
    imgSrc: "/rp4-2.png",
    src: "/",
  },
  {
    id: 6,
    category: "Website",
    title: "Bracketing Method",
    imgSrc: "/rp5.png",
    src: "/",
  },
  {
    id: 7,
    category: "Website",
    title: "Frontend SMS Clone",
    imgSrc: "/rp6.png",
    src: "/",
  },
  {
    id: 8,
    category: "Website",
    title: "Todo List",
    imgSrc: "/rp7.png",
    src: "/",
  },
  {
    id: 9,
    category: "Website",
    title: "Linear Equation",
    imgSrc: "/rp8.png",
    src: "/",
  },
  {
    id: 10,
    category: "Website",
    title: "Waste Management",
    imgSrc: "/rp9.png",
    src: "/",
  },
  {
    id: 11,
    category: "Python GUI",
    title: "Implementing CRUD operations",
    imgSrc: "/rp10.png",
    src: "/",
  },
  {
    id: 12,
    category: "Python GUI",
    title: "Basic Calculator",
    imgSrc: "/rp11.png",
    src: "/",
  },
  {
    id: 13,
    category: "Python GUI",
    title: "DDO Vale Puzzle Solver",
    imgSrc: "/rp12.png",
    src: "/",
  },
  {
    id: 14,
    category: "Desktop Application",
    title: "Quiz History App",
    imgSrc: "/rp13.png",
    src: "/",
  },
  {
    id: 15,
    category: "Desktop Application",
    title: "DHVSU Room Checker",
    imgSrc: "/rp14-1.png",
    src: "/",
  },
  {
    id: 16,
    category: "Desktop Application",
    title: "Burger Ordering System",
    imgSrc: "/rp15.png",
    src: "/",
  },
];

const RecentProjects = () => {
  const pins = data.map((project) => (
    <PinContainer
      key={project.id}
      title={project.title}
      href={project.src}
      className="w-[20rem] h-[20rem]"
      containerClassName="mx-auto"
    >
      <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 w-full h-full">
        <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
          {project.category}
        </h3>
        <div className="text-base !m-0 !p-0 font-normal">
          <span className="text-slate-500">{project.title}</span>
        </div>
        <div className="flex flex-1 w-full rounded-lg mt-4 relative overflow-hidden">
          <Image
            src={project.imgSrc || "/placeholder.svg?height=400&width=400"}
            alt={project.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 via-purple-500/20 to-blue-500/20 mix-blend-overlay" />
        </div>
      </div>
    </PinContainer>
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
          <Carousel items={pins} />
        </div>
      </div>
    </div>
  );
};

export default RecentProjects;
