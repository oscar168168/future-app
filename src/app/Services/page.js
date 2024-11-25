import Back from "@/components/Back";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="justify-center flex items-center min-h-screen w-full lg:p-20 p-8 pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col lg:gap-8 gap-6 row-start-2 items-start">
        <Back />
        <br />
        <h1>Service Offers</h1>
        <p>
          I am Raksmey a UX/UI designer. I specialize in crafting intuitive and
          visually appealing user experiences through UX/UI design.
        </p>
        <br />
      </main>
    </div>
  );
}
