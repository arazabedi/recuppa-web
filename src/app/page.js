"use client";
import Navbar from "@/components/navbar";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Parallax } from "react-scroll-parallax";
import { useRef, useEffect, useState } from "react";
import Footer from "@/components/footer";
import logo_cup from "public/logo_cup.jpg";

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

export default function Home() {
  const targetRef = useRef();

  const [targetElement, setElement] = useState();

  const [imageSpeed, setImageSpeed] = useState(0);

  const handleScroll = () => {
    const scrollPosition = window.scrollY; // => scroll position
    setImageSpeed(scrollPosition * 0.06);

    console.log(scrollPosition);
    console.log("image speed: " + imageSpeed);
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    const scrollPosition = window.scrollY;
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
            speed={16}
          >
            <div className="flex text-center">
              <p className="text-9xl p-12 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-recuppagreen to-recuppalight">
                introducing recuppa.
              </p>
            </div>
          </Parallax>
          <Parallax speed={imageSpeed} scale={[1, 1.8, "easeIn"]}>
            <Image
              src={logo_cup}
              alt="a recuppa reusable cup"
              height="400"
              width="400"
            ></Image>
          </Parallax>
          <Parallax
            className=""
            offset={0} // Start at the top of the scrollable container
            speed={30} // Scroll at half the speed of the container
            style={{ opacity: 0 }} // Initial opacity value
            data={{
              // Modify the opacity value based on scroll position
              speed: [0, 0, "easeInOut"],
            }}
          >
            <div className="flex flex-col justify-center text-center ml-8 mr-8 pl-18 pr-18 text-lg">
              <p>
                Our specially designed cups are made from repurposed coffee
                ground and husk that would otherwise be discarded.
              </p>
              <p>They're reusable and made from renewable materials.</p>
              <p>
                Heat resistant, barista friendly and fits into standard cup
                holders.
              </p>
            </div>
          </Parallax>
          {/* <Parallax
            className=""
            offset={0} // Start at the top of the scrollable container
            speed={10} // Scroll at half the speed of the container
            style={{ opacity: 1 }} // Initial opacity value
            data={{
              // Modify the opacity value based on scroll position
              opacity: [-10, -20, "easeIn"],
            }}
          >
            <div className="text-3xl m-6 border-l-recuppadark">
              <p>Reusing cups has never been easier.</p>
            </div>
          </Parallax> */}
          <div className="h-96 w-96"></div>
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
