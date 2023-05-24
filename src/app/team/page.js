"use client";
import dynamic from "next/dynamic";
import { Parallax } from "react-scroll-parallax";
import Navbar from "@/components/navbar";
import Image from "next/image";

const ParallaxProvider = dynamic(
  () => import("../../components/ParallaxProvider"),
  { ssr: false }
);

const Team = () => {
  return (
    <main>
      <Navbar />
      <hr className="mt-4" />
      <ParallaxProvider>
        <div>
          <Parallax
            layers={[
              {
                startScroll: 0,
                endScroll: 2,
              },
            ]}
            opacity={[10, 0, "easeInOut"]}
          >
            <div className="rounded-full overflow-hidden w-48 h-48">
              <Image
                src="/Users/arazabedi/code/websites/recuppa-web/src/app/Maria.jpeg"
                alt="Maria Papageorgiou"
                width={800}
                height={800}
              />
            </div>
          </Parallax>
        </div>
      </ParallaxProvider>
    </main>
  );
};

export default Team;
