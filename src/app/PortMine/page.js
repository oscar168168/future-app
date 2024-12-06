"use client";
import BackPort from "@/components/BackPort";
import Image from "next/image";

const highlight = [
  {
    src: "/images/subIcon.png",
    alt: "Portfolio",
  },
  {
    src: "/images/subColor.png",
    alt: "Portfolio",
  },
  {
    src: "/images/subPort.png",
    alt: "Portfolio",
  },
  {
    src: "/images/subMobile.png",
    alt: "Portfolio",
  },
];

export default function Page() {
  return (
    <div className="justify-center flex items-center min-h-screen w-full lg:p-20 p-8 pb-20 gap-16">
      <main className="flex flex-col lg:gap-8 gap-6 row-start-2 items-start">
        <BackPort />
        <br />
        <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-16 gap-4">
          <Image
            src={"/images/mywebport.png"}
            alt="Portfolio"
            width={1000}
            height={800}
            className="object-cover w-screen h-full rounded-sm"
          />
          <div className="flex flex-col lg:justify-between col-span-2 gap-4 lg:w-[90%]">
            <div className="lg:space-y-4 space-y-2">
              <h5 className="font-medium lg:text-base text-sm px-4 py-1.5 border w-fit rounded-full my-2">
                Landing Page
              </h5>
              <h1 className="lg:text-7xl text-3xl">
                Rat Raksmey&apos;s Portfolio
              </h1>
              <p>
                Rat Raksmey&apos;s Portfolio, a mobile app developed by Rat
                Raksmey. The app is designed to showcase Rat&apos;s skills and
                projects.
              </p>
            </div>
            <div className="grid lg:grid-cols-4 grid-cols-3 lg:gap-4 gap-2">
              <div>
                <h5 className="font-medium lg:text-base text-sm">Client</h5>
                <p>Prometeus KC</p>
              </div>
              <div>
                <h5 className="font-medium lg:text-base text-sm">Role</h5>
                <p>UX/UI Designer</p>
              </div>
              <div>
                <h5 className="font-medium lg:text-base text-sm">Year</h5>
                <p>2024</p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 justify-center w-full items-center">
          {highlight.map((item) => (
            <Image
              
              src={item.src}
              alt={item.alt}
              width={1500}
              height={800}
              className="object-cover w-full h-full rounded-sm"
              key={item.src}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
