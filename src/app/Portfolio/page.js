import Back from "@/components/Back";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    name: "Prometeus HR. App",
    desc: "Mobile Application",
    image: "/images/prohr.png",
    link: "/",
  },
  {
    name: "Prometeus KC New Website",
    desc: "Landing Page",
    image: "/images/newweb.png",
    link: "/",
  },
  {
    name: "Prometeus KC Old Website",
    desc: "Landing Page",
    image: "/images/oldweb.png",
    link: "/",
  },
  {
    name: "Smarter HR",
    desc: "Web System",
    image: "/images/smarthr.png",
    link: "/",
  },
  {
    name: "eReader Cambodia",
    desc: "Mobile Application",
    image: "/images/ereader.png",
    link: "/",
  },
];

export default function Page() {
  return (
    <div className="justify-center flex items-center min-h-screen w-full lg:p-20 p-8 pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col lg:gap-8 gap-6 row-start-2 items-start">
        <Back />
        <br />
        <h1>My Professional Projects</h1>
        <p>
          I am Raksmey a UX/UI designer. I specialize in crafting intuitive and
          visually appealing user experiences through UX/UI design.
        </p>
        <br />
        <div className="grid lg:grid-cols-3 gap-12 pb-16  w-full">
          {projects.map((project, index) => (
            <Link
              href={project.link}
              className="flex justify-start flex-col  gap-2"
              key={index}
            >
              <div className="lg:w-[500px] lg:h-[350px] relative">
                <Image
                  aria-hidden
                  src={project.image}
                  alt="Portfolio"
                  width={500}
                  height={500}
                  className="object-cover lg:h-full lg:w-full rounded-sm hover:scale-105  transition duration-500 ease-in-out"
                />
              </div>
              <div>
                {" "}
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
