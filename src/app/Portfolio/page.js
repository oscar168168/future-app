import BackHome from "@/components/BackHome";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    name: "Rat Raksmey Web Portfolio",
    desc: "My current web portfolio",
    image: "/images/mywebport.png",
    link: "/PortMine",
    tag: "Landing Page",
  },
  {
    name: "Prometeus HR. App",
    desc: "An internal HR mobile app",
    image: "/images/prohr.png",
    link: "/PortProHRMA",
    tag: "Mobile App",
  },
  {
    name: "Prometeus KC New Website",
    desc: "The new version of the Prometeus KC website",
    image: "/images/newweb.png",
    link: "/PortNewWeb",
    tag: "Landing Page",
  },
  {
    name: "Prometeus KC Old Website",
    desc: "The old version of the Prometeus KC website",
    image: "/images/oldweb.png",
    link: "/PortOldWeb",
    tag: "Landing Page",
  },
  {
    name: "Prometeus HR. System",
    desc: "An internal HR web system",
    image: "/images/smarthr.png",
    link: "/PortProHRWS",
    tag: "Web System",
  },
  {
    name: "eReader Cambodia",
    desc: "A library & digital book platform",
    image: "/images/ereader.png",
    link: "/PorteReader",
    tag: "Mobile Application",
  },
];

export default function Page() {
  return (
    <div className="justify-center flex items-center min-h-screen w-full lg:p-20 p-8 pb-20 gap-16">
      <main className="flex flex-col lg:gap-8 gap-6 row-start-2 items-start">
        <BackHome />
        <br />
        <div className="space-y-2">
          <h1>
            Creating Memorable Designs for Web, Mobile, and Digital Experiences
          </h1>
          <p>
            Our user-focused designs optimize efficiency and drive business
            success.
          </p>
        </div>
        <br />
        <div className="grid lg:grid-cols-3 md:grid-cols-2 lg:gap-12 gap-8 pb-16 w-full justify-start items-start">
          {projects.map((project, index) => (
            <Link
              href={project.link}
              className="flex justify-center flex-col  gap-2"
              key={index}
            >
              <div className="lg:w-auto lg:h-[400px] md:h-[250px] relative">
                <Image
                  aria-hidden
                  src={project.image}
                  alt="Portfolio"
                  width={800}
                  height={500}
                  className="object-cover h-full lg:w-full rounded-sm hover:scale-105 transition-all ease-in-out duration-300"
                />
              </div>
              <div>
                {" "}
                <h5 className="font-medium lg:text-base text-sm px-4 py-1.5 border w-fit rounded-full my-2">
                  {project.tag}
                </h5>
                <h2 className="font-semibold lg:text-2xl text-lg">
                  {project.name}
                </h2>
                <p>{project.desc}...</p>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
