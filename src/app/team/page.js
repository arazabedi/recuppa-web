"use client";
import dynamic from "next/dynamic";
import { Parallax } from "react-scroll-parallax";
import Navbar from "@/components/navbar";
import Image from "next/image";
import Maria from "public/Maria.jpeg";
import araz_mountain from "public/araz_mountain.jpg";

const ParallaxProvider = dynamic(
  () => import("../../components/ParallaxProvider"),
  { ssr: false }
);

const TeamMember = ({ name, src }) => {
  return (
    <main className="m-8 flex flex-col text-center">
      <Parallax speed={5} scale={[1, 1.25, "easeIn"]}>
        <div className="shadow-slate-500 rounded-full shadow-md mx-auto overflow-hidden w-48 h-48">
          <Image src={src} alt={name} width={800} height={800} />
        </div>
        <p className="mt-6">{name}</p>
      </Parallax>
    </main>
  );
};

const ArrowDown = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15%"
      height="15%"
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
          <Parallax speed={3}>
            <p className="text-7xl text-center m-10">meet the team.</p>
          </Parallax>
          <Parallax opacity={[25, -1, "easeInOut"]}>
            <div className="lg:gap-xl-12 grid grid-cols-2 items-center mt-8">
              <TeamMember name="Maria Papageorgiou" src={Maria} />
              <TeamMember name="Araz Ashkan Abedi" src={araz_mountain} />
              <TeamMember
                name="Michail Marinakis"
                src="/Users/arazabedi/code/websites/recuppa-web/src/app/Maria.jpeg"
              />
              <TeamMember
                name="Elma Dima"
                src="/Users/arazabedi/code/websites/recuppa-web/src/app/Maria.jpeg"
              />
            </div>
          </Parallax>
          <Parallax speed={15}>
            <div className="flex justify-center items-center">
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
