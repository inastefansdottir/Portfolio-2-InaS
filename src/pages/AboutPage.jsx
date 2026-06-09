import portrait from "../assets/portrait.webp";

import Icons from "../components/Icons";
import DesignIcons from "../components/DesignIcons";

import Button from "../components/Button";
import BlueArrow from "../assets/icons/blue-arrow.svg?react";

// front-end tools icons
import CSS3 from "../assets/icons/front-end/css3.svg?react";
import HTML5 from "../assets/icons/front-end/html5.svg?react";
import JS from "../assets/icons/front-end/js.svg?react";
import TS from "../assets/icons/front-end/ts.svg?react";
import Github from "../assets/icons/front-end/github.svg?react";
import Git from "../assets/icons/front-end/git.svg?react";
import React from "../assets/icons/front-end/react.svg?react";
import Tailwind from "../assets/icons/front-end/tailwindcss.svg?react";
import Nodejs from "../assets/icons/front-end/nodejs.svg?react";
import Vscode from "../assets/icons/front-end/vscode.svg?react";
import Vite from "../assets/icons/front-end/vitejs.svg?react";
import Npm from "../assets/icons/front-end/npm.svg?react";

// design
import Illustrator from "../assets/icons/design/Illustrator.svg?react";
import InDesign from "../assets/icons/design/InDesign.svg?react";
import Photoshop from "../assets/icons/design/Photoshop.svg?react";
import Lightroom from "../assets/icons/design/Lightroom.svg?react";
import Figma from "../assets/icons/design/Figma.svg?react";
import Procreate from "../assets/icons/design/Procreate.svg?react";

// hobbies
import Arts from "../assets/icons/hobbies/arts.svg?react";
import Baking from "../assets/icons/hobbies/baking.svg?react";
import Cat from "../assets/icons/hobbies/cat.svg?react";
import Foodie from "../assets/icons/hobbies/foodie.svg?react";
import Gaming from "../assets/icons/hobbies/gaming.svg?react";
import Puzzles from "../assets/icons/hobbies/puzzles.svg?react";

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center px-4 sm:px-10">
      <section className="flex justify-between items-center max-w-[1300px] w-full">
        <div className="flex flex-col gap-4 max-w-[570px] w-full">
          <h1 className="text-primary text-[70px] w-full leading-none">
            Hello, <br />
            I'm Ína S.
          </h1>
          <p>
            I’m a{" "}
            <span className="font-bold">
              UI/UX designer and frontend developer
            </span>{" "}
            with a background in graphic design, focused on creating clean,
            modern, and user-centered digital experiences. I care deeply about
            how things feel to use, not just how they look, and I approach every
            project with the user in mind.
          </p>
          <p>
            I enjoy solving UX problems and turning ideas into intuitive,
            well-structured interfaces, then bringing them to life through code.
            I’m naturally curious and always looking to improve, whether that
            means refining details, learning new technologies, or exploring
            better solutions through feedback and iteration.
          </p>
          <p className="text-secondary">
            Based in Norway, originally from Iceland —{" "}
            <span className="font-bold">open to remote opportunities.</span>
          </p>
        </div>

        <div className="max-w-[530px]">
          <img src={portrait} className="w-full" />
        </div>
      </section>

      <h2 className="text-secondary text-[48px]">RESUME</h2>

      <div className="max-w-[1300px] w-full">
        <h3 className="text-primary text-3xl mb-5">TECHNICAL SKILLS</h3>

        <div className="flex justify-between gap-10 mb-25">
          <div>
            <h4 className="text-2xl mb-5">Front-end Tools</h4>

            <div className="flex flex-wrap gap-5 max-w-[420px] w-full">
              <Icons
                Icon={CSS3}
                name="CSS3"
                description="Used to style layouts, colors, spacing, typography, animations, and responsive web interfaces."
              />

              <Icons
                Icon={HTML5}
                name="HTML5"
                description="Used to structure web pages with semantic markup and accessible content."
              />

              <Icons
                Icon={JS}
                name="JavaScript"
                description="Used to add interactivity, handle logic, work with APIs, and create dynamic user experiences."
              />

              <Icons
                Icon={TS}
                name="TypeScript"
                description="Used to write JavaScript with types, making larger projects more predictable and easier to maintain."
              />

              <Icons
                Icon={Github}
                name="GitHub"
                description="Used to store projects online, manage repositories, and share code."
              />

              <Icons
                Icon={Git}
                name="Git"
                description="Used for version control, tracking changes, and managing code history throughout a project."
              />

              <Icons
                Icon={React}
                name="React"
                description="Used to build reusable components and create interactive frontend applications."
              />

              <Icons
                Icon={Tailwind}
                name="Tailwind CSS"
                description="Used to build custom responsive designs quickly with utility classes."
              />

              <Icons
                Icon={Nodejs}
                name="Node.js"
                description="Used to run JavaScript outside the browser and work with backend tools and development workflows."
              />

              <Icons
                Icon={Vscode}
                name="Visual Studio Code"
                description="My main code editor for writing, organizing, and debugging projects."
              />

              <Icons
                Icon={Vite}
                name="Vite"
                description="Used as a fast build tool and development server for modern frontend projects."
              />

              <Icons
                Icon={Npm}
                name="NPM"
                description="Used to install packages, manage dependencies, and run project scripts."
              />
            </div>
          </div>

          <div>
            <h4 className="text-2xl mb-5">Design Tools</h4>

            <div className="flex flex-wrap gap-5 max-w-[420px] w-full">
              <DesignIcons
                Icon={Illustrator}
                name="Illustrator"
                description="Used to create vector graphics, icons, logos, and scalable visual assets."
              />

              <DesignIcons
                Icon={InDesign}
                name="InDesign"
                description="Used for layout design, print materials, editorial work, and structured visual compositions."
              />

              <DesignIcons
                Icon={Photoshop}
                name="Photoshop"
                description="Used for image editing, compositing, mockups, and refining visual assets."
              />

              <DesignIcons
                Icon={Lightroom}
                name="Lightroom"
                description="Used for photo editing, color correction, and creating consistent image styles."
              />

              <DesignIcons
                Icon={Figma}
                name="Figma"
                description="Used to design interfaces, wireframes, prototypes, components, and visual style guides."
              />

              <DesignIcons
                Icon={Procreate}
                name="Procreate"
                description="Used for digital illustration, sketching, and creating hand-drawn visual elements."
              />
            </div>
          </div>
        </div>

        <div className="flex justify-between gap-10 mb-25">
          <div>
            <h3 className="text-primary text-3xl mb-3">LANGUAGES</h3>

            <div className="flex flex-col text-xl gap-2">
              <p className="font-bold">
                Icelandic <span className="text-secondary">- Native</span>
              </p>

              <p className="font-bold">
                English <span className="text-secondary">- Fluent</span>
              </p>

              <p className="font-bold">
                Norwegian{" "}
                <span className="text-secondary">- Basic/Learning</span>
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-primary text-3xl mb-5">HOBBIES</h3>

            <div className="flex flex-wrap gap-5 max-w-[420px] w-full">
              <Icons
                Icon={Puzzles}
                name="Puzzling"
                description="I love all kinds of puzzles, especially jigsaw puzzles. I enjoy figuring things out and rarely stop until I find the solution."
              />

              <Icons
                Icon={Gaming}
                name="Gaming"
                description="Gaming has been my main hobby since I was little. I grew up playing Counter-Strike, FPS games, and MOBAs at a time when it was rare to see girls in those spaces."
              />

              <Icons
                Icon={Cat}
                name="Cat person"
                description="I have had two cats that I absolutely adore. I think cats are some of the cutest and most charming creatures in the world."
              />

              <Icons
                Icon={Baking}
                name="Baking"
                description="I picked up baking after moving to Norway. I love the science behind it and the joy of seeing people enjoy something I made."
              />

              <Icons
                Icon={Foodie}
                name="Foodie"
                description="I have a huge passion for food. I love trying new restaurants, discovering different cuisines, and tasting things I have never had before."
              />

              <Icons
                Icon={Arts}
                name="Arts and Crafts"
                description="I have been drawing and painting for most of my life, studied traditional art, and later picked up crocheting and knitting."
              />
            </div>
          </div>
        </div>

        <div className="flex justify-between gap-10 mb-25">
          <div>
            <h3 className="text-primary text-3xl mb-3">ACHIEVEMENTS</h3>

            <div className="flex flex-col text-xl gap-2">
              <p className="font-bold">
                Partial International Student scholarship{" "}
                <span className="text-secondary">
                  - Arts Univeristy Bournemouth
                </span>
              </p>

              <p className="font-bold">
                B2 English Certificate{" "}
                <span className="text-secondary">
                  (Merit in all categories)
                </span>
              </p>
            </div>
          </div>

          <div className="max-w-[420px] w-full">
            <p className="mb-4 text-xl">
              Interested in working together or have a project in mind?{" "}
              <span className="font-bold">Feel free to reach out.</span>
            </p>
            <Button
              key="Email"
              href="mailto:inastefansdottir@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-2 border-primary text-primary p-2.5 hover:bg-primary"
              aria-label="Email"
            >
              <p className="flex items-center gap-2.5">
                CONTACT ME <BlueArrow />
              </p>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
