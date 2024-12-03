import { recentProjects } from "@/data";
import Image from "next/image";

const DummyContent = ({ id }: { id: number }) => {
  // Filter all projects with the same id
  const projects = recentProjects.filter((proj) => proj.id === id);

  if (projects.length === 0) {
    return <p>No content found for this project.</p>;
  }

  return (
    <>
      {projects.map((project) => (
        <div
          key={"dummy-content" + project.id + project.title} // Unique key for each project
          className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
        >
          <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700 dark:text-neutral-200">
              {project.title}
            </span>{" "}
            {project.description}
          </p>
          <Image
            src={project.img}
            alt={`${project.title} mockup`}
            height="500"
            width="500"
            className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain rounded-2xl mt-4"
          />
        </div>
      ))}
    </>
  );
};

export default DummyContent;
