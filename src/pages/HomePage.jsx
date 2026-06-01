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

      {/* Holidaze section */}
      <div className="flex flex-col gap-[250px] px-4 sm:px-10">
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
      </div>
    </div>
  );
}
