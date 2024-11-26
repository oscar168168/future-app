import Image from "next/image";
import Link from "next/link";
import React from "react";

const Back = () => {
  return (
    <Link
      href="/"
      className="hover:underline hover:underline-offset-4 flex items-center justify-center gap-2 fixed left-0 top-0 lg:p-4 p-3 z-50 bg-white backdrop-blur-2xl"
      style={{ backgroundImage: 'url("/images/noise.svg")' }}
    >
      <Image
        aria-hidden
        src="/images/back.svg"
        alt="Back"
        width={24}
        height={24}
      />
      <p>Home</p>
    </Link>
  );
};

export default Back;
