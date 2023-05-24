"use client";
import dynamic from "next/dynamic";
import { Parallax } from "react-scroll-parallax";
import Navbar from "@/components/navbar";
import Image from "next/image";

const ParallaxProvider = dynamic(
  () => import("../../components/ParallaxProvider"),
  { ssr: false }
);

const TeamMember = ({ name, src }) => {
  return (
    <main className="m-8 flex flex-col text-center border border-stone-600">
      <div className="rounded-full shadow-lg mx-auto overflow-hidden w-48 h-48">
        <Image src={src} alt={name} width={800} height={800} />
      </div>
      <p>{name}</p>
    </main>
  );
};

const ArrowDown = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      preserveAspectRatio="none"
    >
      <path d="M12 20l8-8h-6V4h-4v8H4l8 8z" fill="#1a243a" />
    </svg>
  );
};

const Team = () => {
  return (
    <main>
      <ParallaxProvider>
				<div className="h-screen w-screen">
        <Navbar />
        <hr className="mt-4" />
        <Parallax opacity={[25, -1, "easeInOut"]}>
          <div className="lg:gap-xl-12 grid grid-cols-2 items-center mt-8">
            <TeamMember
              name="Maria Papageorgiou"
              src="/Users/arazabedi/code/websites/recuppa-web/src/app/Maria.jpeg"
            />
            <TeamMember
              name="Araz Ashkan Abedi"
              src="/Users/arazabedi/code/websites/recuppa-web/src/app/Maria.jpeg"
            />
            <TeamMember
              name="Michail Marinakis"
              src="/Users/arazabedi/code/websites/recuppa-web/src/app/Maria.jpeg"
            />
            <TeamMember
              name="Elma Dima"
              src="/Users/arazabedi/code/websites/recuppa-web/src/app/Maria.jpeg"
            />
          </div>
          <p className="text-7xl text-center">Meet the team</p>
        </Parallax>
        <Parallax speed={15}>
          <div className="flex items-center">
            <ArrowDown />
          </div>
        </Parallax>
        <div className="bg-blue-500 h-screen w-screen"></div>
        <div className="bg-green-500 h-screen w-screen"></div>
        <div className="bg-yellow-500 h-screen w-screen"></div>
        <div className="bg-violet-500 h-screen w-screen"></div>
				</div>
      </ParallaxProvider>
    </main>
  );
};

export default Team;
