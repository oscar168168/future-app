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
      <div className="flex gap-4 lg:mt-4 mt-2">
        <Link
          className="flex items-center justify-center gap-2 py-3 px-6 hover:underline hover:underline-offset-4 border rounded-xl"
          href="/Services"
        >
          <p className="font-medium">Services</p>
        </Link>
        <Link
          className="flex items-center justify-center gap-2 py-3 px-6 hover:underline hover:underline-offset-4 rounded-xl bg-black text-white"
          href="/Contact"
        >
          <p className="font-medium">Contact</p>
        </Link>
      </div>
    </main>
  );
};
