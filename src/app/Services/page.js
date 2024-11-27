import Back from "@/components/Back";

export default function Page() {
  return (
    <div className="justify-center flex items-center min-h-screen w-full lg:p-20 p-8 pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col lg:gap-8 gap-6 row-start-2 items-start">
        <Back />
        <br />
        <div className="space-y-2">
          <h1>Crafting Digital Experiences That Inspire</h1>
          <p>
            As a passionate and detail-driven designer, I create impactful
            websites, engaging mobile apps, and seamless digital experiences
            that leave a lasting impression.
          </p>
        </div>
        <br />
      </main>
    </div>
  );
}
