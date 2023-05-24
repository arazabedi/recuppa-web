"use client";
import Navbar from "@/components/navbar";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Parallax } from "react-scroll-parallax";
import { useRef, useEffect, useState } from "react";
import cupExchange from "src/images/cupexchange.png";

const ParallaxProvider = dynamic(
  () => import("../components/ParallaxProvider"),
  { ssr: false }
);

const Commendations = () => {
  return (
    <main className="h-72 w-screen bg-purple-900 flex justify-center items-center">
        <a href="https://www.the-lep.com/the-mayors-innovation-prize/">
          <Image
            src="https://www.the-lep.com/media/9172/wyca-mowy-lep-tpx-eu.png?width=500&height=133.4418226200163"
            alt="The Mayor's Innovation Prize"
            height={1500 / 2}
            width={1133 / 2}
          />
        </a>
    </main>
  );
};
const Footer = () => {
  return (
    <main className="h-72 w-screen bg-fuchsia-950">
      <div>
				<p></p>
			</div>
    </main>
  );
};

export default function Home() {
  const targetRef = useRef();

  const [targetElement, setElement] = useState();

  useEffect(() => {
    setElement(targetRef.current);
  }, []);

  return (
    <main>
      <Navbar />
      <hr className="mt-4" />
      <ParallaxProvider>
        <div className="flex min-h-screen flex-col items-center pt-24">
          <Parallax
            layers={[
              {
                startScroll: 0,
                endScroll: 2,
              },
            ]}
            opacity={[30, 0, "easeInOut"]}
            speed={10}
          >
            <div className="flex text-center">
              <p className="text-9xl p-12 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-recuppagreen to-recuppalight">
                introducing recuppa.
              </p>
            </div>
          </Parallax>
          <Parallax>
            <div className="flex text-3xl m-6 border-l-recuppadark">
              <p>Reusing cups has never been easier.</p>
            </div>
          </Parallax>
        </div>
        <Parallax
          opacity={[-2, 10, "easeInOut"]}
          targetElement={targetElement}
        ></Parallax>
        <div className="flex items-center bg-recuppadark w-screen h-screen"></div>
        <Commendations />
        <Footer />
      </ParallaxProvider>
    </main>
  );
}
