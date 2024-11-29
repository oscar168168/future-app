import BackPort from "@/components/BackPort";
import Image from "next/image";

export default function Page() {
  return (
    <div className="justify-center flex items-center min-h-screen w-full lg:p-20 p-8 pb-20 gap-16">
      <main className="flex flex-col lg:gap-8 gap-6 row-start-2 items-start">
        <BackPort />
        <br />
        <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-16 gap-4">
          <Image
            src={"/images/oldweb.png"}
            alt="Portfolio"
            width={1000}
            height={800}
            className="object-cover w-screen h-full rounded-sm"
          />
          <div className="flex flex-col lg:justify-between col-span-2 gap-4 lg:w-[90%] w-full">
            <div className="lg:space-y-4 space-y-2">
              <h5 className="font-medium lg:text-base text-sm px-4 py-1.5 border w-fit rounded-full my-2">
                Landing Page
              </h5>
              <h1 className="lg:text-7xl text-3xl">Prometeus KC Old Website</h1>
              <p>
                Prometeus KC Co., Ltd, a start up Marketing & Technology company
                in Phnom Penh, Cambodia. The company needed a new modern website
                to better communicate their value proposition and increase user
                engagement.
              </p>
            </div>
            <div className="grid lg:grid-cols-4 grid-cols-3 lg:gap-4 gap-2">
              <div>
                <h5 className="font-medium lg:text-base text-sm">Client</h5>
                <p>Prometeus KC</p>
              </div>
              <div>
                <h5 className="font-medium lg:text-base text-sm">Role</h5>
                <p>UX/UI Designer</p>
              </div>
              <div>
                <h5 className="font-medium lg:text-base text-sm">Year</h5>
                <p>2023</p>
              </div>
            </div>
          </div>
        </div>
        <br />
      </main>
    </div>
  );
}
