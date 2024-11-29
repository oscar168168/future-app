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
      <div className="space-y-2">
        <h1 className="lg:text-[120px] lg:font-medium">
          Discover Your Uniqueness, Unlock Your Creativity.
        </h1>
        <p className="lg:text-xl text-sm font-light">
          I am Raksmey a UX/UI designer. I specialize in crafting intuitive and
          visually appealing user experiences through UX/UI design.
        </p>
      </div>
      <div className="flex gap-4 lg:mt-4 mt-2">
        <Link
          className="flex items-center justify-center gap-2 py-3 lg:px-12 px-8 hover:underline hover:underline-offset-4 border rounded-2xl transition-all duration-500 ease-in-out"
          href="/Portfolio"
        >
          <p className="font-medium">View My Work</p>
        </Link>
        <Link
          className="flex items-center justify-center gap-2 py-3 lg:px-12 px-8 hover:underline hover:underline-offset-4 rounded-2xl bg-black text-white -rotate-6 hover:rotate-0 transition-all duration-500 ease-in-out"
          href="/Contact"
        >
          <p className="font-medium">Let&apos;s Collaborate</p>
        </Link>
      </div>
    </main>
  );
};
