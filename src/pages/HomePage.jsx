import { useState, useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

import introVideo from "../assets/animations/hero-intro.webm";
import loopVideo from "../assets/animations/hero-loop.webm";
import PortfolioSVG from "../assets/portfolio.svg?react";
import holidazeThumbnail from "../assets/thumbnails/holidaze.webp";
import bidverseThumbnail from "../assets/thumbnails/bidverse.webp";
import shopThumbnail from "../assets/thumbnails/online-shop.webp";
import petifyThumbnail from "../assets/thumbnails/petify.webp";
import Tag from "../components/Tag";
import Button from "../components/Button";

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

        <h2 className="flex justify-center text-5xl text-secondary mb-[130px]">
          PROJECTS
        </h2>

        <div className="flex flex-col gap-[250px] px-4 sm:px-10 mb-[250px]">
          {/* Holidaze section */}
          <div className="flex justify-between items-center max-w-[1300px] w-full mx-auto">
            <div>
              <h3 className="text-primary text-4xl">
                {" "}
                H<span className="text-body">O</span>L
                <span className="text-body">I</span>DAZ
                <span className="text-body">E</span>
              </h3>

              {/* Tags */}
              <div className="flex gap-1.5 mt-2.5 mb-4">
                <Tag variant="light">Final Exam 2</Tag>
                <Tag>TypeScript</Tag>
                <Tag>Tailwind CSS</Tag>
                <Tag>REST API</Tag>
                <Tag>React</Tag>
              </div>

              <p className="max-w-[380px] w-full mb-8">
                A modern accommodation booking platform where users can browse
                venues, search by location, guests and dates, create bookings,
                and manage profiles. Venue managers can create listings, edit
                venues, and view bookings through a role-based dashboard.
              </p>

              <Button color={"primary"} to={"/projects/holidaze"}>
                VIEW CASE STUDY
              </Button>
            </div>

            <div className="max-w-[524px] w-full">
              <img
                src={holidazeThumbnail}
                className="object-cover w-full h-[312px]"
              />
            </div>
          </div>

          {/* Bidverse section */}
          <div className="flex justify-between items-center max-w-[1300px] w-full mx-auto">
            <div className="max-w-[524px] w-full">
              <img
                src={bidverseThumbnail}
                className="object-cover w-full h-[312px]"
              />
            </div>

            <div className="flex flex-col items-end">
              <h3 className="text-primary text-4xl">
                {" "}
                B<span className="text-body">I</span>DV
                <span className="text-body">E</span>RS
                <span className="text-body">E</span>
              </h3>

              {/* Tags */}
              <div className="flex gap-1.5 mt-2.5 mb-4">
                <Tag variant="light">Semester Project 2</Tag>
                <Tag>JavaScript</Tag>
                <Tag>Tailwind CSS</Tag>
                <Tag>REST API</Tag>
              </div>

              <p className="max-w-[380px] w-full mb-8 text-right">
                A modern auction platform where users can browse listings,
                create auctions, place bids, and manage their profile. The
                project focuses on responsive UI, clear bidding flows, credit
                visibility, image uploads, and polished frontend interactions.
              </p>

              <Button color={"primary"} to={"/projects/bidverse"}>
                VIEW CASE STUDY
              </Button>
            </div>
          </div>

          {/* Online shop section */}
          <div className="flex justify-between items-center max-w-[1300px] w-full mx-auto">
            <div>
              <h3 className="text-primary text-4xl">
                {" "}
                <span className="text-body">O</span>NL
                <span className="text-body">I</span>N
                <span className="text-body">E</span> SH
                <span className="text-body">O</span>P
              </h3>

              {/* Tags */}
              <div className="flex gap-1.5 mt-2.5 mb-4">
                <Tag variant="light">JS Frameworks</Tag>
                <Tag>TypeScript</Tag>
                <Tag>Tailwind CSS</Tag>
                <Tag>REST API</Tag>
                <Tag>React</Tag>
              </div>

              <p className="max-w-[380px] w-full mb-8">
                A functional ecommerce website built with React and TypeScript.
                Users can browse products from the Noroff API, search and sort
                items, view product details, add products to the cart, update
                quantities, and complete a simple checkout flow.
              </p>

              <Button color={"primary"} to={"/projects/shop"}>
                VIEW CASE STUDY
              </Button>
            </div>

            <div className="max-w-[524px] w-full">
              <img
                src={shopThumbnail}
                className="object-cover w-full h-[312px]"
              />
            </div>
          </div>

          {/* Petify section */}
          <div className="flex justify-between items-center max-w-[1300px] w-full mx-auto">
            <div className="max-w-[524px] w-full">
              <img
                src={petifyThumbnail}
                className="object-cover w-full h-[312px]"
              />
            </div>

            <div className="flex flex-col items-end">
              <h3 className="text-primary text-4xl">
                {" "}
                P<span className="text-body">E</span>T
                <span className="text-body">I</span>F
                <span className="text-body">Y</span>
              </h3>

              {/* Tags */}
              <div className="flex gap-1.5 mt-2.5 mb-4">
                <Tag variant="light">CSS Frameworks</Tag>
                <Tag>HTML</Tag>
                <Tag>Bootstrap</Tag>
                <Tag>Sass</Tag>
              </div>

              <p className="max-w-[380px] w-full mb-8 text-right">
                A playful pet-focused social media interface adapted into a
                static Bootstrap and SASS project. The design is based on my
                original JavaScript 2 social media app and focuses on responsive
                layouts, soft visual styling, and framework customization.
              </p>

              <Button to={"/projects/petify"}>VIEW CASE STUDY</Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
