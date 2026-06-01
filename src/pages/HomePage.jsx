import heroImage from "../assets/hero-image.png";
import PortfolioSVG from "../assets/portfolio.svg?react";
import holidazeMockup from "../assets/holidaze-mockup.png";
import Tag from "../components/Tag";
import Button from "../components/Button";

export default function HomePage() {
  return (
    <div>
      <img src={heroImage} className="max-w-[1000px] w-full h-auto mx-auto" />

      <h1 className="hidden">Ína's Portfolio Home Page</h1>

      <div className="flex w-full justify-center gap-6 mt-[180px] mb-[300px]">
        <PortfolioSVG className="w-[90px]" />
        <div className="grid gap-1">
          <span className="text-secondary font-bold">Ína S. Stefánsdótirr</span>
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
              venues, search by location, guests and dates, create bookings, and
              manage profiles. Venue managers can create listings, edit venues,
              and view bookings through a role-based dashboard.
            </p>

            <Button color={"primary"} to={"/projects/holidaze"}>
              VIEW CASE STUDY
            </Button>
          </div>

          <img src={holidazeMockup} className="max-w-[524px] w-full" />
        </div>

        {/* Bidverse section */}
        <div className="flex justify-between items-center max-w-[1300px] w-full mx-auto">
          <img src={holidazeMockup} className="max-w-[524px] w-full" />

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
              A modern auction platform where users can browse listings, create
              auctions, place bids, and manage their profile. The project
              focuses on responsive UI, clear bidding flows, credit visibility,
              image uploads, and polished frontend interactions.
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

          <img src={holidazeMockup} className="max-w-[524px] w-full" />
        </div>

        {/* Petify section */}
        <div className="flex justify-between items-center max-w-[1300px] w-full mx-auto">
          <img src={holidazeMockup} className="max-w-[524px] w-full" />

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
              A playful pet-focused social media interface adapted into a static
              Bootstrap and SASS project. The design is based on my original
              JavaScript 2 social media app and focuses on responsive layouts,
              soft visual styling, and framework customization.
            </p>

            <Button to={"/projects/petify"}>VIEW CASE STUDY</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
