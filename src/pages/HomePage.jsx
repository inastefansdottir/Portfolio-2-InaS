import { useState, useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

import introVideo from "../assets/animations/hero-intro.webm";
import loopVideo from "../assets/animations/hero-loop.webm";
import PortfolioSVG from "../assets/portfolio.svg?react";

import holidazeMockup from "../assets/holidaze/holidaze-no-background.png";
import bidverseMockup from "../assets/bidverse/bidverse-no-background.png";
import shopMockup from "../assets/shop/shop-no-background.png";
import petifyMockup from "../assets/petify/petify-no-background.png";

import ProjectThumbnail from "../components/ProjectThumbnail";

export default function HomePage() {
  const [showLoop, setShowLoop] = useState(false);
  const loopRef = useRef(null);

  async function startLoop() {
    if (!loopRef.current) return;

    loopRef.current.currentTime = 0;

    try {
      await loopRef.current.play();

      requestAnimationFrame(() => {
        setShowLoop(true);
      });
    } catch (error) {
      console.log("Loop video could not start:", error);
      setShowLoop(true);
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header
        variant="dark"
        logoHidden
        className={`transition-opacity duration-700 ${
          showLoop ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <main className="flex-1">
        <div className="relative mx-auto mt-[-80px] min-h-screen max-w-[1300px] w-full overflow-hidden bg-black">
          {/* Loop video stays mounted and ready */}
          <video
            ref={loopRef}
            src={loopVideo}
            muted
            playsInline
            loop
            preload="auto"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity ${
              showLoop ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* Intro video plays once, then starts the loop */}
          <video
            src={introVideo}
            autoPlay
            muted
            playsInline
            preload="auto"
            onEnded={startLoop}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-600 ${
              showLoop ? "opacity-0" : "opacity-100"
            }`}
          />
        </div>

        <h1 className="hidden">Ína's Portfolio Home Page</h1>

        <div className="flex w-full justify-center gap-6 mt-[180px] mb-[300px]">
          <PortfolioSVG className="w-[90px]" />
          <div className="grid gap-1">
            <span className="text-secondary font-bold">
              Ína S. Stefánsdóttir
            </span>
            <p className="w-[240px]">
              UI/UX Designer & Frontend Developer focused on creating clean,
              user-centered experiences.
            </p>
          </div>
        </div>

        <h2 className="flex justify-center text-5xl text-secondary mb-[100px]">
          PROJECTS
        </h2>

        <div className="flex flex-col items-center px-4 sm:px-10">
          <div className="max-w-[1300px] w-full grid grid-cols-2 max-[1100px]:grid-cols-1 gap-[30px]">
            <ProjectThumbnail
              titleParts={[
                { text: "H", color: "primary" },
                { text: "O", color: "body" },
                { text: "L", color: "primary" },
                { text: "I", color: "body" },
                { text: "DAZ", color: "primary" },
                { text: "E", color: "body" },
              ]}
              meta="Final Exam 2 - 2026"
              description="A modern accommodation booking platform where users can browse venues, search by location, guests and dates, create bookings, and manage profiles."
              buttonVariant="holidaze"
              image={holidazeMockup}
              imageAlt="Holidaze website mockup"
              to="/projects/holidaze"
              projectColor="#558C91"
              projectLight="#B4D8D8"
            />
            <ProjectThumbnail
              titleParts={[
                { text: "B", color: "primary" },
                { text: "I", color: "body" },
                { text: "DV", color: "primary" },
                { text: "E", color: "body" },
                { text: "RS", color: "primary" },
                { text: "E", color: "body" },
              ]}
              meta="Semester Project 2 - 2025"
              description="A modern auction platform where users can browse listings, create auctions, place bids, and manage their profile."
              image={bidverseMockup}
              imageAlt="BidVerse website mockup"
              to="/projects/bidverse"
              projectColor="#6666FF"
              projectLight="#C5C5E8"
            />
            <ProjectThumbnail
              titleParts={[
                { text: "O", color: "body" },
                { text: "NL", color: "primary" },
                { text: "I", color: "body" },
                { text: "N", color: "primary" },
                { text: "E ", color: "body" },
                { text: "SH", color: "primary" },
                { text: "O", color: "body" },
                { text: "P", color: "primary" },
              ]}
              meta="JS Frameworks - 2026"
              description="A functional ecommerce website built with React and TypeScript. Users can browse products, view product details and complete a simple checkout flow."
              buttonVariant="shop"
              image={shopMockup}
              imageAlt="Online shop website mockup"
              imageClassName="w-[320px]! max-[1100px]:w-[400px]!"
              to="/projects/shop"
              projectColor="#3B82F6"
              projectLight="#BFDBFE"
            />
            <ProjectThumbnail
              titleParts={[
                { text: "P", color: "primary" },
                { text: "E", color: "body" },
                { text: "T", color: "primary" },
                { text: "I", color: "body" },
                { text: "F", color: "primary" },
                { text: "Y", color: "body" },
              ]}
              meta="CSS Frameworks 2 - 2025"
              description="A playful pet-focused social media interface adapted into a static Bootstrap and SASS project. The design is based on my original JavaScript 2 social media app."
              buttonVariant="petify"
              image={petifyMockup}
              imageAlt="Petify website mockup"
              imageClassName="w-[320px]! max-[1100px]:w-[400px]!"
              to="/projects/petify"
              projectColor="#998ACF"
              projectLight="#D2D2E6"
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
