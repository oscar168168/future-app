import Back from "@/components/Back";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="justify-center flex items-center min-h-screen w-full lg:p-20 p-8 pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col lg:gap-8 gap-6 row-start-2 items-start">
        <Back />
        <br />
        <h1>My Professional Experience</h1>
        <p>
          My work revolves around crafting seamless digital experiences through
          research, design, and collaboration.
        </p>
        <br />

        {/* Prometeus KC */}
        <div className="grid  grid-cols-4 gap-4 pb-16  w-full">
          <p className="font-medium col-span-1">Nov, 2023 - Present</p>
          <div className="space-y-1 col-span-3">
            <h1 className="lg:text-3xl text-xl font-medium">UX/UI Designer</h1>{" "}
            <Link href="https://prometeus-kc.com" target="_blank">
              <h2 className="lg:text-xl text-base hover:underline">
                Prometeus KC Co., Ltd
              </h2>
            </Link>
            <br />
            <ul className="list-disc ps-4">
              <li>
                Leading user research through surveys, interviews, and usability
                testing.
              </li>
              <li>
                Designing user interfaces that are intuitive and visually
                cohesive.
              </li>
              <li>
                Collaborating with developers to ensure seamless implementation.
              </li>
              <li>Conducting usability tests to gather valuable feedback.</li>
            </ul>
          </div>
        </div>

        {/* Mytech Mobility Cambodia Co., Ltd */}
        <div className="grid  grid-cols-4 gap-4 pb-12 w-full">
          <p className="font-medium col-span-1">Jan, 2023 - Nov, 2023</p>
          <div className="space-y-1 col-span-3">
            <h1 className="lg:text-3xl text-xl font-medium">IT Technician</h1>{" "}
            <Link href="https://mytechmobility.com/" target="_blank">
              <h2 className="lg:text-xl text-base hover:underline">
                Mytech Mobility Cambodia Co., Ltd
              </h2>
            </Link>
            <br />
            <ul className="list-disc ps-4">
              <li>
                Managing technical troubleshooting and IT system maintenance.
              </li>
              <li>
                Assisting with network security and software installations.
              </li>
              <li>Supporting team members with IT tools and systems.</li>
              <li>Providing training and technical support to staff.</li>
            </ul>
          </div>
        </div>
        <div className="grid  grid-cols-4 gap-4 pb-12 w-full">
          <p className="font-medium col-span-1">May, 2022 - Jan, 2023</p>
          <div className="space-y-1 col-span-3">
            <h1 className="lg:text-3xl text-xl font-medium">Project Officer</h1>{" "}
            <Link href="https://mytechmobility.com/" target="_blank">
              <h2 className="lg:text-xl text-base hover:underline">
                Mytech Mobility Cambodia Co., Ltd
              </h2>
            </Link>
            <br />
            <ul className="list-disc ps-4">
              <li>
                Coordinating project activities to meet deadlines and
                objectives.
              </li>
              <li>
                Communicating with stakeholders for smooth project execution.
              </li>
              <li>Documenting and reporting project progress.</li>
              <li>Assisting in resource allocation and task delegation.</li>
            </ul>
          </div>
        </div>

        {/* DK Schoolhouse */}
        <div className="grid  grid-cols-4 gap-4 pb-12 w-full">
          <p className="font-medium col-span-1">Oct, 2021 - Dec, 2022</p>
          <div className="space-y-1 col-span-3">
            <h1 className="lg:text-3xl text-xl font-medium">
              Teacher Assistant
            </h1>{" "}
            <Link href="https://dkschoolhouse.com" target="_blank">
              <h2 className="lg:text-xl text-base hover:underline">
                DK Schoolhouse
              </h2>
            </Link>
            <br />
            <ul className="list-disc ps-4">
              <li>Supporting teachers in planning and delivering lessons.</li>
              <li>
                Assisting students with learning activities and assignments.
              </li>
              <li>
                Monitoring classroom behavior and ensuring a positive learning
                environment.
              </li>
              <li>Providing feedback to students for improvement.</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
