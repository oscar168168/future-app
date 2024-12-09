import BackHome from "@/components/BackHome";

export default function Page() {
  return (
    <div className="justify-center flex items-center min-h-screen w-full lg:p-20 p-8 pb-20 gap-16">
      <main className="flex flex-col lg:gap-8 gap-6 row-start-2 items-start">
        <BackHome />
        <br />
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-12 gap-6 pb-16 w-full space-y-4">
          <div className="col-span-1">
            {" "}
            <h1>Rat Raksmey -</h1>
            <h1 className="font-light lg:text-7xl text-3xl text-black/20">
              UX/UI Designer
            </h1>
          </div>

          <div className="col-span-1 lg:space-y-8">
            <p className=" lg:text-xl font-light text-base">
              Hi, I&apos;m Rat Raksmey, a passionate UX/UI designer who loves
              turning complex ideas into user-friendly experiences. With 2 years
              of experience, I specialize in crafting designs that are not just
              beautiful but also functional, ensuring they meet user needs and
              business goals.
            </p>
            <div className="flex gap-12 mt-6">
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
