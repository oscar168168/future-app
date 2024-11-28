import Back from "@/components/Back";

export default function Page() {
  return (
    <div className="justify-center flex items-center min-h-screen w-full lg:p-20 p-8 pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col lg:gap-8 gap-6 row-start-2 items-start">
        <Back />
        <br />
        <div className="lg:grid grid-cols-6 gap-8 pb-16 w-full space-y-4">
          <h1 className="col-span-3">
            Rat Raksmey - <span className="font-light"> UX/UI Designer</span>
          </h1>
          <div className="col-span-3 lg:space-y-8">
            <p className=" lg:text-xl font-light text-base">
              Hi, I&apos;m Rat Raksmey, a passionate UX/UI designer who loves
              turning complex ideas into user-friendly experiences. With 2 years
              of experience, I specialize in crafting designs that are not just
              beautiful but also functional, ensuring they meet user needs and
              business goals.
            </p>
            <div className="flex gap-12 mt-4">
              <div>
                <h1 className="">02</h1>
                <p>Years of Experience</p>
              </div>
              <div>
                <h1 className="">10</h1>
                <p>Completed Projects</p>
              </div>
            </div>
          </div>
        </div>
{/* 
        <div className="grid grid-cols-4 gap-8 pb-16 w-full">
          <h5 className="col-span-1 lg:text-xl text-base font-medium">
            Expertise
          </h5>
          <div className="col-span-3">
            <ul className="list-disc leading-7">
              <li>User Research and Journey Mapping</li>
              <li>Wireframing and Prototyping</li>
              <li>Usability Testing and Iteration</li>
              <li>Designing Responsive and Accessible Interfaces</li>
            </ul>
          </div>
        </div> */}
      </main>
    </div>
  );
}