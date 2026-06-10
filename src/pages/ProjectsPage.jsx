import ProjectCard from "../components/ProjectCard";

import holidazeImage from "../assets/holidaze/holidaze-no-background.png";
import holidazeLogo from "../assets/holidaze/holidaze-logo.svg";

import bidverseImage from "../assets/bidverse/bidverse-no-background.png";
import bidverseLogo from "../assets/bidverse/bidverse-logo.png";

import shopImage from "../assets/shop/shop-no-background.png";

import petifyImage from "../assets/petify/petify-no-background.png";
import petifyLogo from "../assets/petify/petify-logo.svg";

export default function ProjectsPage() {
  return (
    <section className="flex flex-col items-center justify-center px-4 py-[120px] sm:px-10">
      <h1 className="text-4xl text-secondary mb-25">ALL PROJECTS</h1>

      <div className="grid w-full max-w-[1300px] grid-cols-4 gap-8 max-[1200px]:grid-cols-3 max-[950px]:grid-cols-2  max-[650px]:grid-cols-1">
        <ProjectCard
          to="/projects/holidaze"
          title="Accommodation Booking Website"
          meta="Final Exam 2 - 2026"
          image={holidazeImage}
          imageWrapperClassName="bottom-[-60px] left-[50%]"
          imageClassName="w-[530px]"
          logo={holidazeLogo}
          projectColor="#558C91"
          metaColor="#B4D8D8"
        />

        <ProjectCard
          to="/projects/bidverse"
          title="Auction Website"
          meta="Semester Project 2 - 2025"
          image={bidverseImage}
          imageWrapperClassName="bottom-[-40px] left-[50%]"
          imageClassName="w-[500px]"
          logo={bidverseLogo}
          projectColor="#6666FF"
          metaColor="#C5C5E8"
        />

        <ProjectCard
          to="/projects/shop"
          title="Online Shop Website"
          meta="JS Frameworks - 2026"
          image={shopImage}
          imageWrapperClassName="bottom-[-60px] left-[50%]"
          imageClassName="w-[400px]"
          projectColor="#3B82F6"
          metaColor="#BFDBFE"
        />

        <ProjectCard
          to="/projects/petify"
          title="Social Media Website"
          meta="CSS Frameworks - 2026"
          image={petifyImage}
          imageWrapperClassName="bottom-[-30px] left-[50%]"
          imageClassName="w-[400px]"
          logo={petifyLogo}
          projectColor="#998ACF"
          metaColor="#D2D2E6"
        />
      </div>
    </section>
  );
}
