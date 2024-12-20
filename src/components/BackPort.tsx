import Image from "next/image";
import Link from "next/link";
import React from "react";

const BackPort = () => {
  return (
    <Link
      href="/Portfolio"
      className="hover:underline hover:underline-offset-4 flex items-center justify-center gap-2 fixed left-0 top-0 lg:p-4 p-2 z-50"
    >
      <Image
        aria-hidden
        src="/images/back.svg"
        alt="Home"
        width={24}
        height={24}
      />
      <p>Back</p>
    </Link>
  );
};

export default BackPort;
