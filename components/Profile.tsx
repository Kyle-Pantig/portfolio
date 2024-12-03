import Image from "next/image";
import { Timeline } from "./ui/Timeline";

const data = [
  {
    title: "2021 - Present",
    content: (
      <div>
        <h1 className="text-purple text-lg font-bold">
          Don Honorio Ventura State University
        </h1>
        <div className="my-8">
          <p className="text-white-100 text-xs md:text-sm">
            &#10004; Studying Computer Engineering, combining electronics and
            software engineering.
          </p>
          <p className="text-white-100 text-xs md:text-sm">
            &#10004; Gaining hands-on experience with hardware, including
            Arduino projects, sensor integration, and designing logic circuits.
          </p>
          <p className="text-white-100 text-xs md:text-sm">
            &#10004; Learning software development by creating websites,
            Java-based systems, and mobile applications.
          </p>
          <p className="text-white-100 text-xs md:text-sm">
            &#10004; Exploring problem-solving skills by working on various
            programming projects, strengthening both theoretical and practical
            knowledge in Computer Engineering.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="/b2.svg"
            alt="startup template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <Image
            src="/b4.svg"
            alt="startup template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
      </div>
    ),
  },
  {
    title: "2019-2021",
    content: (
      <div>
        <h1 className="text-purple text-lg font-bold">
          Our Lady of Fatima University &#40; Pampanga &#41;
        </h1>
        <div className="my-8">
          <p className="text-white-100 text-xs md:text-sm">
            &#10004; Completed the Science, Technology, Engineering, and
            Mathematics &#40;STEM&#41; strand, laying the foundation for my
            dream course at Don Honorio Ventura State University.
          </p>
          <p className="text-white-100 text-xs md:text-sm">
            &#10004; Enjoyed learning and exploring technology as part of my
            studies, building my interest in engineering and innovation.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Image
            src="/t1.jpg"
            alt="hero template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <Image
            src="/t2.jpg"
            alt="feature template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
      </div>
    ),
  },
  {
    title: "2015-2019",
    content: (
      <div>
        <h1 className="text-purple text-lg font-bold">
          Sindalan National High School
        </h1>
        <div className="my-8">
          <p className="text-white-100 text-xs md:text-sm">
            &#10004; Achieved Academic Excellence Award and awarded Best in
            Mathematician.
          </p>
          <p className="text-white-100 text-xs md:text-sm">
            &#10004; Secured 2nd Place in Group Radio Broadcasting during the
            Division Schools Press Conference.
          </p>
          <p className="text-white-100 text-xs md:text-sm">
            &#10004; Achieved 1st Place in Group Radio Broadcasting and awarded
            Best in Technical Application during the Division Schools Press
            Conference.
          </p>
          <p className="text-white-100 text-xs md:text-sm">
            &#10004; Earned 8th Place for Best in Technical Application during
            the Regional Schools Press Conference held at La Consolacion
            University Philippines, Malolos, Bulacan.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="/s1.jpg"
            alt="hero template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <Image
            src="/s2.svg"
            alt="feature template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
      </div>
    ),
  },
];

const Profile = () => {
  return (
    <div className="py-20 w-full relative" id="journey">
      <h1 className="heading">
        My {""}
        <span className="text-purple">progression</span>
      </h1>
      <div className="w-full absolute left-0 -bottom-24 min-h-96">
        <Image
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
          width={100}
          height={100}
        />
      </div>
      <Timeline data={data} />
    </div>
  );
};

export default Profile;
