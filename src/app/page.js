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
    <main className="h-72 w-screen bg-teal-900 flex justify-center items-center">
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

const ReasonCards = () => {
  return (
    <>
      <div className="flex flex-col p-48 gap-5">
        <div className="flex flex-row gap-5">
          <div className="flex flex-row justify-center items-center bg-yellow1 h-72 w-1/2">
            <div className="text-white">reason 1</div>
            <div className="flex flex-row text-deepblue">
              <p>1</p>
              <p>out of</p>
              <p>3</p>
            </div>
            <div className="text-white">
              Because they must remember the cup when they go out
            </div>
          </div>
          <div className="flex flex-row justify-center items-center bg-blue1 h-72 w-1/2">
            <div className="text-white">reason 2</div>
            <div className="text-white">
              &quot;I have no room to carry the cup&quot;
            </div>
            <div>22%</div>
          </div>
        </div>
        <div className="flex flex-row gap-5">
          <div className="flex flex-row justify-center items-center bg-green1 h-72 w-1/2">
            <div className="flex flex-row">
              <p className="text-yellow1">27%</p>
            </div>
            <div className="text-white">
              Would be embarrased to ask a store to put a hot drink in their own
              cup
            </div>
            <div className="text-white">reason 3</div>
          </div>
          <div className="flex flex-row justify-center items-center bg-deepgreen h-72 w-1/2">
            <div className="text-yellow1">20%</div>
            <div className="text-white">
              &quot;I don&quot;t want to carry a dirty cup no room to carry the
              cup&quot;
            </div>
            <div className="text-white">reason 4</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function Home() {
  const targetRef = useRef();

  const [targetElement, setElement] = useState();

  const [imageSpeed, setImageSpeed] = useState(0);

  // eslint-disable-next-line react-hooks/exhaustive-deps
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
  }, [handleScroll]);

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
              <p className="text-8xl p-8 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green1 to-blue2">
                introducing recuppa.
              </p>
            </div>
          </Parallax>
          <Parallax
            offset={0} // Start at the top of the scrollable container
            speed={10} // Scroll at half the speed of the container
            style={{ opacity: 1 }} // Initial opacity value
            data={{
              // Modify the opacity value based on scroll position
              opacity: [-10, -20, "easeIn"],
            }}
          >
            <Parallax speed={-5} startScroll={0} endScroll={650}>
              <div className="text-3xl h-16 w-screen text-center border-l-recuppadark">
                <p>Reusing cups has never been easier.</p>
              </div>
            </Parallax>
          </Parallax>
          <Parallax
            startScroll={0}
            endScroll={600}
            speed={imageSpeed}
            scale={[1, 1.8, "easeIn"]}
          >
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
              <p>They are reusable and made from renewable materials.</p>
              <p>
                Heat resistant, barista friendly and fits into standard cup
                holders.
              </p>
            </div>
          </Parallax>
          <div className="h-96 w-96"></div>
        </div>
        <Parallax
          opacity={[-2, 10, "easeInOut"]}
          targetElement={targetElement}
        ></Parallax>
        <div className="flex h-screen w-screen text-6xl justify-center items-center">
          <h1 className="m-7">Why don&apos;t people use reusable cups?</h1>
        </div>
        <section
          id="the-disposable-cup-problem"
          className="flex flex-row text-4xl justify-center items-center bg-deepblue w-screen h-screen text-white"
        >
          <ReasonCards />
        </section>
        <Commendations />
        <Footer />
      </ParallaxProvider>
    </main>
  );
}
