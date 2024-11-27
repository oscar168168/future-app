import Back from "@/components/Back";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    name: "Prometeus HR. App",
    desc: "Mobile Application",
    image: "/images/prohr.png",
    link: "/",
    tag: "Mobile App",
  },
  {
    name: "Prometeus KC New Website",
    desc: "Landing Page",
    image: "/images/newweb.png",
    link: "/",
    tag: "Web Design",
  },
  {
    name: "Prometeus KC Old Website",
    desc: "Landing Page",
    image: "/images/oldweb.png",
    link: "/",
    tag: "Web Design",
  },
  {
    name: "Smarter HR",
    desc: "Web System",
    image: "/images/smarthr.png",
    link: "/",
    tag: "Web System",
  },
  {
    name: "eReader Cambodia",
    desc: "Mobile Application",
    image: "/images/ereader.png",
    link: "/",
    tag: "Mobile App",
  },
];

export default function Page() {
  return (
    <div className="justify-center flex items-center min-h-screen w-full lg:p-20 p-8 pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col lg:gap-8 gap-6 row-start-2 items-start">
        <Back />
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
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 pb-16 w-full">
          {projects.map((project, index) => (
            <Link
              href={project.link}
              className="flex justify-center flex-col  gap-2"
              key={index}
            >
              <div className="lg:w-auto lg:h-[350px] md:h-[250px] relative">
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
                <h2 className="font-semibold lg:text-xl text-base">
                  {project.name}
                </h2>
                <p>{project.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
