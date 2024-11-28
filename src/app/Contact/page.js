import Back from "@/components/Back";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="justify-center flex items-center min-h-screen w-full lg:p-20 p-8 pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col lg:gap-8 gap-6 row-start-2 items-start">
        <Back />
        <br />
        <div className="space-y-2">
          <h1>Get in Touch</h1>
          <p>
            Let&apos;s collaborate on your next project. Reach out to discuss
            how we can create something extraordinary together.
          </p>
        </div>
        <div className="flex gap-6">
          <Link
            className="bg-black text-white rounded-full lg:w-24 lg:h-24 w-16 h-16 flex items-center justify-center hover:scale-90 transition-all duration-500 ease-in-out"
            href="https://www.linkedin.com/in/rat-raksmey/"
            target="_blank"
          >
            {" "}
            <Image
              aria-hidden
              src="/images/telegram1.svg"
              alt="Linkedin"
              width={18}
              height={18}
              className="lg:w-6 lg:h-6"
            />
          </Link>
          {/* <Link
            className="bg-black text-white rounded-full lg:w-24 lg:h-24 w-16 h-16 flex items-center justify-center hover:scale-90 transition-all duration-500 ease-in-out"
            href="https://www.linkedin.com/in/rat-raksmey/"
            target="_blank"
          >
            {" "}
            <Image
              aria-hidden
              src="/images/linkedin1.svg"
              alt="Linkedin"
              width={28}
              height={28}
            />
          </Link> */}
        </div>
      </main>
    </div>
  );
}
