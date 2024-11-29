import Back from "@/components/Back";
import Image from "next/image";
import Link from "next/link";

const contacts = [
  {
    name: "Telegram",
    icon: "/images/telegram.svg",
    link: "https://t.me/doublepainz",
  },
  {
    name: "Linkind",
    icon: "/images/linkedin.svg",
    link: "https://www.linkedin.com/in/rat-raksmey-9abb36281/",
  },
  {
    name: "Behance",
    icon: "/images/behance.svg",
    link: "https://www.behance.net/raksmeyrat",
  },
  {
    name: "Dribble",
    icon: "/images/dribbble.svg",
    link: "https://dribbble.com/Oscar011",
  },
];

export default function Page() {
  return (
    <div className="justify-center flex items-center min-h-screen w-full lg:p-20 p-8 pb-20 gap-16">
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
        <div className="flex lg:gap-8 gap-4">
          {contacts.map((contact, index) => (
            <Link
              href={contact.link}
              className="border-black border text-white rounded-full lg:w-20 lg:h-20 w-16 h-16 flex items-center justify-center hover:scale-90 transition-all duration-500 ease-in-out"
              key={index}
            >
              {" "}
              <Image
                aria-hidden
                src={contact.icon}
                alt={contact.name}
                width={18}
                height={18}
                className="lg:w-6 lg:h-6"
              />
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
