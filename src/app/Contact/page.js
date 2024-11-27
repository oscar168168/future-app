import Back from "@/components/Back";

export default function Page() {
  return (
    <div className="justify-center flex items-center min-h-screen w-full lg:p-20 p-8 pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col lg:gap-8 gap-6 row-start-2 items-start">
        <Back />
        <br />
        <div className="space-y-2">
        <h1>Get in Touch</h1>
        <p>
          Let&apos;s collaborate on your next project. Reach out to discuss how we
          can create something extraordinary together.
        </p></div>
        <br />
      </main>
    </div>
  );
}
