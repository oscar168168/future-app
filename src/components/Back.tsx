import Image from "next/image";
import Link from "next/link";
import React from "react";

const Back = () => {
  return (
    <Link
      href="/"
      className="hover:underline hover:underline-offset-4 flex items-center justify-center gap-2 fixed left-0 top-0 lg:p-6 p-3"
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