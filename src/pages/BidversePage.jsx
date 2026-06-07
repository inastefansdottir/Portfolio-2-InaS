import ProjectHero from "../components/ProjectHero";
import bidverseMockup from "../assets/bidverse/bidverse-no-background.png";
import bidverseLogo from "../assets/bidverse/bidverse-logo.png";
import image1 from "../assets/bidverse/image-1.png";
import image2 from "../assets/bidverse/image-2.png";
import image3 from "../assets/bidverse/image-3.png";
import image4 from "../assets/bidverse/image-4.png";
import image5 from "../assets/bidverse/image-5.webp";
import image6 from "../assets/bidverse/image-6.png";
import image7 from "../assets/bidverse/image-7.webp";
import image8 from "../assets/bidverse/image-8.png";
import image9 from "../assets/bidverse/image-9.png";
import video1 from "../assets/bidverse/video-1.webm";
import video2 from "../assets/bidverse/video-2.webm";
import video3 from "../assets/bidverse/video-3.webm";
import styleGuide from "../assets/bidverse/style-guide.png";
import styleGuideSmall from "../assets/bidverse/style-guide-sm.png";
import ProjectNavCard from "../components/ProjectNavCard";
import holidazeMockup from "../assets/holidaze/holidaze-mockup.png";
import shopMockup from "../assets/shop/shop-mockup.png";

export default function BidversePage() {
  return (
    <div>
      <ProjectHero
        logo={bidverseLogo}
        title="Auction Website"
        meta={
          <>
            <span className="font-bold">Semester Project 2</span> • HTML •
            Tailwind • JavaScript • Cloudinary • REST API
          </>
        }
        description={[
          "BidVerse is a modern auction-style web application built for Noroff – Semester Project 2. The platform allows users to browse listings, create auctions, place bids, and manage their profiles in a responsive and user-friendly interface.",
          "The project focuses on frontend architecture, API integration, responsive design, and accessibility, using HTML, Tailwind CSS, and Vanilla JavaScript.",
        ]}
        image={bidverseMockup}
        imageAlt="Bidverse website mockup"
        gradientTo="#6666FF"
        buttonVariant="bidverse"
        links={[
          {
            label: "GITHUB REPO",
            href: "https://github.com/inastefansdottir/Semester-Project-2-InaS",
          },
          {
            label: "LIVE DEMO",
            href: "https://semesterproject2bidverse.netlify.app/",
          },
        ]}
      />

      <div className="flex flex-col items-center px-4 sm:px-10 gap-[250px] max-[900px]:gap-25">
        {/* Section 1 */}
        <section className="mt-[130px]">
          <div className="flex max-[900px]:flex-col justify-between items-start max-w-[1078px] w-full mx-auto max-[900px]:gap-5">
            <div className="flex items-center gap-3">
              <span className="inline-block font-display text-[55px] leading-none text-[#6666FF]">
                1.
              </span>

              <h2 className="w-[87px] text-xl leading-tight">Project Vision</h2>
            </div>

            <div className="grid gap-5 max-w-[525px] w-full">
              <p>
                <span className="font-bold">BidVerse</span> was designed to make
                auction browsing feel simple, modern, and intuitive without
                overwhelming the user with complexity.
              </p>
              <p>
                The project focused on creating a responsive frontend experience
                powered by dynamic API data, while maintaining accessibility,
                clarity, and smooth interaction patterns across the platform.
              </p>
            </div>
          </div>

          <div className="flex max-[900px]:flex-col mt-[100px] mb-[170px] max-[900px]:mb-25 flex w-full max-w-[1300px] items-center justify-between gap-5">
            <img
              src={image1}
              alt=""
              className="h-auto max-h-[500px] max-[900px]:max-h-[700px] min-w-0 object-contain"
            />
            <div className="flex gap-5">
              <img
                src={image2}
                alt=""
                className="h-auto max-h-[500px] max-[900px]:max-h-[700px] min-w-0 object-contain"
              />
              <img
                src={image3}
                alt=""
                className="h-auto max-h-[500px] max-[900px]:max-h-[700px] min-w-0 object-contain"
              />
            </div>
          </div>

          <div className="flex max-[900px]:flex-col justify-between max-w-[1300px] w-full max-[900px]:gap-10">
            <p className="text-xl font-bold w-[250px] text-right max-[900px]:text-left">
              Every detail was designed to keep the auction flow clear and
              intuitive.
            </p>
            <div className="max-w-[850px] w-full pl-10 max-[900px]:pl-0">
              <video
                src={video1}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="w-full"
              />
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <div className="flex max-[900px]:flex-col justify-between items-start max-w-[1078px] w-full mx-auto max-[900px]:gap-5">
          <div className="flex items-center gap-3">
            <span className="inline-block font-display text-[55px] leading-none text-[#6666FF]">
              2.
            </span>

            <h2 className="w-[87px] text-xl leading-tight">
              Profile Experience
            </h2>
          </div>

          <div className="grid gap-5 max-w-[525px] w-full">
            <p>
              The <span>profile experience</span> was designed to function as a
              lightweight dashboard rather than a static account page.
            </p>
            <p>
              Users can seamlessly switch between viewing their active listings
              and tracking bids they’ve placed, helping the interface feel more
              interactive and personalized while keeping important activity
              easily accessible.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center bg-[#6666FF]/50 py-[80px] w-full px-4 sm:px-10 mt-[100px]">
        <div className="max-w-[1078px] w-full">
          <video
            src={video2}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="w-full"
          />
        </div>
      </div>

      <div className="flex justify-center px-4 sm:px-10">
        <section className="grid gap-[100px] max-w-[1078px] w-full mt-[250px] max-[900px]:mt-25">
          {/* Section 3 and 4 */}
          <div className="flex max-[1100px]:flex-col justify-between items-start gap-[34px] max-[1100px]:gap-[100px]">
            <div className="flex-1">
              <div className="flex items-center gap-3">
                <span className="inline-block font-display text-[55px] leading-none text-[#6666FF]">
                  3.
                </span>

                <h2 className="w-[200px] text-xl leading-tight">
                  Credit Visibility System
                </h2>
              </div>

              <p className="mt-8">
                Because bidding revolves around available credits, account
                balance visibility became an important part of the user
                experience.
              </p>

              <p className="mt-5">
                Credits are surfaced directly within both the navigation and
                profile views, helping users stay aware of their balance without
                interrupting the auction flow.
              </p>

              <div className="mt-[100px]">
                <img src={image4} className="object-cover w-full" />
              </div>
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-3">
                <span className="inline-block font-display text-[55px] leading-none text-[#6666FF]">
                  4.
                </span>

                <h2 className="w-[200px] text-xl leading-tight">
                  Cloudinary Integration
                </h2>
              </div>

              <p className="mt-8">
                Instead of relying on manually pasted image URLs, BidVerse
                integrates Cloudinary uploads directly into profile and listing
                management flows.
              </p>

              <p className="mt-5">
                Users can upload images directly from their device while the
                application handles image hosting and URL generation behind the
                scenes, creating a more familiar and modern experience.
              </p>

              <div className="mt-[100px]">
                <video
                  src={video3}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Section 5 */}
          <div className="flex items-center gap-3 self-start mt-[150px] max-[900px]:mt-0">
            <span className="inline-block font-display text-[55px] leading-none text-[#6666FF]">
              5.
            </span>

            <h2 className="w-[80px] text-xl leading-tight">Style Guide</h2>
          </div>
        </section>
      </div>

      <div className="flex justify-center bg-[#D8D8FF] md:py-20 py-10 w-full px-4 sm:px-10 mt-[100px] max-[800px]:mt-10">
        <div className="max-w-[1078px] w-full">
          <picture>
            <source media="(max-width: 800px)" srcSet={styleGuideSmall} />
            <img
              src={styleGuide}
              alt="BidVerse style guide"
              className="w-full object-cover"
            />
          </picture>
        </div>
      </div>

      <div className="flex flex-col items-center px-4 sm:px-10 gap-[250px] max-[900px]:gap-25">
        {/* Section 6 */}
        <section className="mt-[250px] max-[900px]:mt-25">
          <div className="flex max-[900px]:flex-col justify-between items-start max-w-[1078px] w-full mx-auto max-[900px]:gap-5">
            <div className="flex items-center gap-3">
              <span className="inline-block font-display text-[55px] leading-none text-[#6666FF]">
                6.
              </span>

              <h2 className="w-[170px] text-xl leading-tight">
                Design/ Visual Identity
              </h2>
            </div>

            <div className="grid gap-5 max-w-[525px] w-full">
              <p>
                Visually, the project focused on combining a bright modern
                interface with bold gradients, soft shadows, and clean spacing
                to create a more contemporary take on auction platforms.
              </p>
              <p>
                Consistency across cards, buttons, typography, and component
                styling helped establish a recognizable visual identity while
                keeping the interface intuitive and easy to navigate.
              </p>
            </div>
          </div>

          <div className="mx-auto mt-[100px] grid w-full max-w-[1300px] gap-8 lg:grid-cols-[1fr_1fr]">
            <img src={image5} alt="" className="h-full w-full object-cover" />

            <div className="grid grid-cols-2 gap-8">
              <img src={image6} alt="" className="h-full w-full object-cover" />

              <img src={image7} alt="" className="h-full w-full object-cover" />

              <img src={image8} alt="" className="h-full w-full object-cover" />

              <img src={image9} alt="" className="h-full w-full object-cover" />
            </div>
          </div>
        </section>

        <h3 className="self-center text-center text-3xl text-[#D8D8FF] max-w-[500px] w-full">
          Designed to make auction interactions feel lightweight, social, and
          intuitive.
        </h3>

        <div className="flex max-[500px]:flex-col gap-[30px]">
          <h4 className="text-xl text-[#D8D8FF]">Reflection</h4>

          <div className="grid gap-5 max-w-[550px] w-full flex-1">
            <p>
              BidVerse helped me explore how visual design, frontend logic, and
              user interaction work together in an API-driven application.
            </p>
            <p>
              The project strengthened my understanding of responsive layouts,
              profile states, bidding flows, image upload handling, and
              designing clear UI feedback for different user actions. It also
              pushed me to think more carefully about how small details, such as
              credit visibility, placeholder images, search, and profile
              organization, can make a platform feel more polished and
              intuitive.
            </p>
            <p>
              Overall, BidVerse became an important step in developing my own
              frontend style while building a more complete and user-friendly
              web application.
            </p>
          </div>
        </div>

        <section className="flex w-full justify-center mb-20">
          <div className="flex max-[600px]:flex-col w-full max-w-[1300px] justify-between gap-[36px]">
            <ProjectNavCard
              to="/projects/holidaze"
              image={holidazeMockup}
              label="Previous Project"
              title="Holidaze"
              direction="previous"
            />

            <ProjectNavCard
              to="/projects/shop"
              image={shopMockup}
              label="Next Project"
              title="Online Shop"
              direction="next"
              titleClass={"max-[750px]:w-[110px] max-[600px]:w-full"}
            />
          </div>
        </section>
      </div>
    </div>
  );
}
