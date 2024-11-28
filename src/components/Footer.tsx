"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const links = [
  {
    label: "About me",
    icon: "/images/about.svg",
    href: "/About",
  },
  {
    label: "Portfolio",
    icon: "/images/project.svg",
    href: "/Portfolio",
  },
  {
    label: "Experience",
    icon: "/images/work.svg",
    href: "/Experiences",
  },
  {
    label: "Contact", 
    icon: "/images/telegram.svg",
    href: "/Contact",
  },
];

export const Footer = () => {
  const pathname = usePathname();

  return (
    <footer className="flex fixed bottom-0 lg:pb-8 pb-4 lg:pt-6 pt-3 lg:gap-12 gap-8 items-center lg:justify-center justify-evenly z-auto w-screen px-2 bg-white">
      {links.map((link) => (
        <Link
          key={link.href}
          className={`link ${
            pathname === link.href
              ? "flex items-center flex-col lg:flex-row lg:gap-2 underline underline-offset-4"
              : "flex items-center flex-col lg:flex-row lg:gap-2 hover:underline hover:underline-offset-4 "
          }`}
          href={link.href}
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src={link.icon}
            alt={link.label}
            width={20}
            height={20}
          />
          <p className="lg:text-base text-xs lg:font-light font-medium">
            {link.label}
          </p>
        </Link>
      ))}
    </footer>
  );
};
