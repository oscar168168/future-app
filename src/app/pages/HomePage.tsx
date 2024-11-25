import Link from "next/link";
import React from "react";
import Image from "next/image";

export const HomePage = () => {
  return (
    <main className="flex flex-col lg:gap-8 gap-6 justify-center max-h-screen h-[70vh] items-start max-w-[1512px]">
      <Image
        aria-hidden
        src="/images/profile2.png"
        alt="Logo"
        width={100}
        height={100}
        className="rounded-full"
      />
      <h1 className="lg:text-[120px] lg:font-medium">
        Discover Your Uniqueness, Unlock Your Creativity.
      </h1>
      <p className="lg:text-xl text-sm font-light">
        I am Raksmey a UX/UI designer. I specialize in crafting intuitive and
        visually appealing user experiences through UX/UI design.
      </p>
      <div className="flex gap-4 lg:mt-8 mt-4">
        <Link
          className="flex items-center justify-center gap-2 py-2.5 px-5 hover:underline hover:underline-offset-4"
          href="#contact"
        >
          <p>SERVICES</p>
          {/* <Image
            aria-hidden
            src="/images/service.svg"
            alt="Telegram"
            width={20}
            height={20}
          /> */}
        </Link>
        <Link
          className="flex items-center justify-center gap-2 py-2.5 px-5 hover:underline hover:underline-offset-4 rounded-xl bg-black text-white"
          href="#contact"
        >
          <p>PORTFOLIO</p>
        </Link>
      </div>
    </main>
  );
};
