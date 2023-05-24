"use client";
import Navbar from "@/components/navbar";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Parallax } from "react-scroll-parallax";
import { useRef, useEffect, useState } from "react";

const ParallaxProvider = dynamic(
  () => import("../components/ParallaxProvider"),
  { ssr: false }
);

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
        <div className="flex min-h-screen flex-col items-center justify-between p-24">
          <Parallax
            layers={[
              {
                startScroll: 0,
                endScroll: 2,
              },
            ]}
            opacity={[10, 0, "easeInOut"]}
          >
            <p className="text-9xl">Introducing recuppa</p>
          </Parallax>
          <Parallax
            opacity={[10, 0, "easeInOut"]}
            targetElement={targetElement}
          >
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="text-9xl border-l-recuppadark">
              <p>Hello</p>
            </div>
          </Parallax>
              <br />
              <br />
              <br />
              <br />
            <div>
              <p ref={targetRef} className="text-9xl">Maria</p>
            </div>
            <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
        </div>
      </ParallaxProvider>
    </main>
  );
}
