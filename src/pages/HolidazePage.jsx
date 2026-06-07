import holidazeMockup from "../assets/holidaze/holidaze-no-background.png";
import holidazeLogo from "../assets/logos/holidaze-logo.svg";
import ProjectHero from "../components/ProjectHero";
import image1 from "../assets/holidaze/image-1.webp";
import image2 from "../assets/holidaze/image-2.webp";
import image3 from "../assets/holidaze/image-3.webp";
import image4 from "../assets/holidaze/image-4.webp";
import image5 from "../assets/holidaze/image-5.webp";
import image6 from "../assets/holidaze/image-6.webp";
import image7 from "../assets/holidaze/image-7.webp";
import image8 from "../assets/holidaze/image-8.webp";
import image9 from "../assets/holidaze/image-9.webp";
import video1 from "../assets/holidaze/video-1.webm";
import video2 from "../assets/holidaze/video-2.webm";
import video3 from "../assets/holidaze/video-3.webm";
import video4 from "../assets/holidaze/video-4.webm";
import styleGuide from "../assets/holidaze/style-guide.png";
import ProjectNavCard from "../components/ProjectNavCard";
import petifyMockup from "../assets/petify/petify-css-mockup.png";
import bidverseMockup from "../assets/bidverse/bidverse-mockup.png";

export default function HolidazePage() {
  return (
    <div>
      <ProjectHero
        logo={holidazeLogo}
        title="Accommodation Booking Website"
        meta={
          <>
            <span className="font-bold">Final Exam 2</span> • React • Tailwind
            CSS • TypeScript • Vite • REST API
          </>
        }
        description={[
          "Holidaze is a modern accommodation booking platform designed to make venue discovery, booking, and management feel simple and intuitive.",
          "The project was built as my Noroff final exam project using React, TypeScript, Vite, and Tailwind CSS, with a strong focus on responsive design, accessibility, and real-world booking interactions.",
        ]}
        image={holidazeMockup}
        imageAlt="Holidaze website mockup"
        gradientTo="#558C91"
        buttonVariant="holidaze"
        links={[
          {
            label: "GITHUB REPO",
            href: "https://github.com/inastefansdottir/FED2-PE2-inastefansdottir",
          },
          {
            label: "LIVE DEMO",
            href: "https://holidaze-pe2-ina.netlify.app/",
          },
        ]}
      />

      {/* Main content */}
      <section className="flex flex-col items-center mt-[130px] px-4 sm:px-10">
        {/* Section 1 */}
        <div className="flex max-[900px]:flex-col max-[900px]:gap-5 justify-between items-start max-w-[1078px] w-full">
          <div className="flex items-center gap-3">
            <span className="inline-block font-display text-[55px] leading-none text-[#558C91]">
              1.
            </span>

            <h2 className="w-[87px] text-xl leading-tight">Project Vision</h2>
          </div>

          <div className="grid gap-5 max-w-[525px] w-full">
            <p>
              Unlike a basic listing website, Holidaze supports different user
              journeys for visitors, customers, and venue managers.{" "}
            </p>
            <p>
              This made the project an opportunity to design a more complete
              product experience, from searching and booking venues to managing
              hosted listings and incoming reservations.
            </p>
          </div>
        </div>

        <div className="flex max-[900px]:flex-col mt-[100px] mb-[170px] flex w-full max-w-[1300px] items-center justify-between gap-5">
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
      </section>

      {/* Section 2 */}
      <div className="flex justify-center bg-[#B4D8D8] w-full text-[#285260] px-4 sm:px-10">
        <section className="flex max-[1200px]:flex-col justify-between items-center max-w-[1300px] w-full py-20">
          <div className="max-[1200px]:flex max-[900px]:flex-col max-[900px]:gap-5 max-[1200px]:items-start max-[1200px]:justify-between max-[1200px]:w-full">
            <div className="flex max-[1200px]:justify-between items-center gap-3">
              <span className="inline-block font-display text-[55px] leading-none">
                2.
              </span>

              <h2 className="w-[140px] text-xl leading-tight">
                Search & Discovery
              </h2>
            </div>
            <div className="grid gap-5 max-w-[525px] w-full">
              <p>
                One of the most important UX decisions in Holidaze was the{" "}
                <span className="bold">search experience.</span>
              </p>
              <p>
                The API search endpoint only supported searching by venue name
                and description, which did not fully match how users typically
                search on accommodation platforms. For a booking website, users
                are more likely to search based on destination, available dates,
                and number of guests. Because of this, I built a custom frontend
                filtering system using React state and TypeScript. This allowed
                venues to be filtered by location, guest capacity, and date
                availability, creating a search flow that felt more aligned with
                real booking behavior.
              </p>
              <p>
                The goal was not just to make search functional, but to make
                discovery feel useful, fast, and natural.
              </p>
            </div>
          </div>
          <div className="max-[1200px]:max-w-full max-w-[670px] pl-10 max-[1200px]:pl-0 max-[1200px]:mt-25">
            <video
              src={video1}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="w-full h-full"
            />
          </div>
        </section>
      </div>

      <div className="flex justify-center w-full px-4 sm:px-10">
        <div className="flex flex-col items-center max-w-[1078px] w-full mt-[170px] gap-[250px] max-[900px]:gap-[100px]">
          {/* Section 3 */}
          <section className="grid gap-[100px]">
            <div className="flex max-[900px]:flex-col max-[900px]:gap-5 justify-between items-start">
              <div className="flex items-center gap-3">
                <span className="inline-block font-display text-[55px] leading-none text-[#558C91]">
                  3.
                </span>

                <h2 className="w-[170px] text-xl leading-tight">
                  Booking Experience
                </h2>
              </div>

              <div className="grid gap-5 max-w-[525px] w-full">
                <p>
                  The booking flow was designed to feel clear and guided from
                  the moment a user opens a venue.
                </p>

                <p>
                  Each venue page presents the most important decision-making
                  information first, including images, location, price, guest
                  capacity, amenities, and existing bookings. The calendar helps
                  users understand availability before submitting a booking,
                  reducing confusion and making the experience feel more
                  transparent.
                </p>

                <p>
                  A key focus was keeping the booking interaction simple.
                  Instead of overwhelming users with too many steps, the
                  interface guides them through selecting dates, reviewing venue
                  details, and confirming their stay in a focused flow.
                </p>
              </div>
            </div>

            <div className="w-full">
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
          </section>

          {/* Section 4 */}
          <section className="grid gap-[100px]">
            <div className="flex max-[900px]:flex-col max-[900px]:gap-5 justify-between items-start">
              <div className="flex items-center gap-3">
                <span className="inline-block font-display text-[55px] leading-none text-[#558C91]">
                  4.
                </span>

                <h2 className="w-[170px] text-xl leading-tight">
                  Venue Manager Dashboard
                </h2>
              </div>

              <div className="grid gap-5 max-w-[525px] w-full">
                <p>
                  The venue manager dashboard was designed to support two
                  related but different tasks: managing venues and reviewing
                  bookings.
                </p>

                <p>
                  Managers can switch between their published venues and the
                  bookings connected to those venues, keeping the workflow
                  contained within one area instead of spreading management
                  across multiple pages. This helped the dashboard feel more
                  organized and reduced the amount of navigation needed to
                  understand venue activity.
                </p>

                <p>
                  The goal was to create a simple management experience that
                  still felt powerful enough for users hosting multiple venues.
                </p>
              </div>
            </div>

            <div className="w-full">
              <video
                src={video3}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="w-full"
              />
            </div>
          </section>

          {/* Section 5 */}
          <section className="grid gap-[100px]">
            <div className="flex max-[900px]:flex-col justify-between items-start gap-[34px]">
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <span className="inline-block font-display text-[55px] leading-none text-[#558C91]">
                    5.
                  </span>

                  <h2 className="w-[200px] text-xl leading-tight">
                    Role-Based Profile Experience
                  </h2>
                </div>

                <p className="mt-8">
                  <span className="font-bold">The profile experience</span>{" "}
                  changes depending on the user’s role.
                </p>
              </div>

              <div className="grid gap-5 max-w-[525px] w-full flex-1">
                <p>
                  Customers can view and manage their upcoming bookings, while
                  venue managers get access to a more advanced dashboard for
                  managing both hosted venues and reservations. This role-based
                  structure helped make the interface feel more relevant to each
                  user instead of showing everyone the same generic account
                  page.
                </p>

                <p>
                  For customers, the profile page focuses on clarity and booking
                  overview. For managers, it becomes more of a control center
                  for keeping track of venue activity.
                </p>
              </div>
            </div>

            <div className="flex max-[900px]:flex-col w-full gap-[34px]">
              <div className="flex-1">
                <p className="text-xl font-bold mb-5">
                  Customer’s profile page
                </p>
                <img src={image4} className="object-cover w-full" />
              </div>

              <div className="flex-1">
                <p className="text-xl font-bold mb-5">Manager’s profile page</p>
                <video
                  src={video4}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="object-cover w-full"
                />
              </div>
            </div>
          </section>

          {/* Section 6 */}
          <section className="flex max-[1200px]:flex-col gap-[36px]">
            <div className="grid gap-10">
              <div className="flex items-center gap-3">
                <span className="inline-block font-display text-[55px] leading-none text-[#558C91]">
                  6.
                </span>

                <h2 className="w-[86px] text-xl leading-tight">Modal System</h2>
              </div>

              <div>
                <img src={image5} className="object-cover w-full" />
              </div>

              <div>
                <img src={image6} className="object-cover w-full" />
              </div>

              <p>
                Using modals also helped create consistency across the platform.
                Repeated actions share similar layouts, form patterns,
                validation feedback, and button styling, making the interface
                feel more cohesive and predictable.
              </p>
            </div>

            <div className="grid gap-10">
              <div className="grid gap-5 max-w-[525px] w-full flex-1">
                <p>
                  Holidaze uses modals for key actions such as logging in,
                  creating venues, editing venues, and updating profile
                  information.
                </p>
                <p>
                  These interactions were kept inside focused overlays to reduce
                  unnecessary page changes and help users stay connected to
                  their current context. For example, a manager can create or
                  edit a venue without feeling like they have been taken away
                  from the dashboard experience.
                </p>
              </div>

              <div>
                <img src={image7} className="object-cover w-full" />
              </div>

              <div>
                <img src={image8} className="object-cover w-full" />
              </div>
            </div>
          </section>

          {/* Section 7 */}
          <section className="flex max-[800px]:flex-col gap-[36px]">
            <div className="flex flex-col justify-between flex-1 max-[800px]:gap-[36px]">
              <div className="grid gap-5 max-w-[525px]">
                <div className="flex items-center gap-3">
                  <span className="inline-block font-display text-[55px] leading-none text-[#558C91]">
                    7.
                  </span>

                  <h2 className="w-[86px] text-xl leading-tight">
                    Visual Identity
                  </h2>
                </div>
                <div className="grid gap-5">
                  <p>
                    The <span className="font-bold">visual direction</span> for
                    Holidaze was inspired by Scandinavian minimalism and modern
                    accommodation platforms.
                  </p>
                  <p>
                    The interface uses soft earthy colors, spacious layouts,
                    clean typography, and warm imagery to create a calm and
                    trustworthy booking experience. I wanted the design to feel
                    polished and modern without becoming cold or overly minimal.
                  </p>
                  <p>
                    The style guide helped keep the experience consistent across
                    pages, especially as the project grew to include customer
                    views, manager views, forms, modals, cards, and responsive
                    layouts.
                  </p>
                </div>
              </div>

              <div>
                <img src={image1} className="object-cover w-full" />
              </div>

              <div>
                <img src={image9} className="object-cover w-full" />
              </div>
            </div>

            <div className="flex-1 ml-20 max-[1000px]:ml-0">
              <img src={styleGuide} className="object-cover w-full" />
            </div>
          </section>

          <h3 className="self-center text-center text-3xl text-[#B4D8D8] max-w-[500px] w-full">
            A complete booking experience, from discovery to management.
          </h3>

          <div className="flex max-[500px]:flex-col gap-[30px]">
            <h4 className="text-xl text-[#B4D8D8]">Reflection</h4>

            <div className="grid gap-5 max-w-[550px] w-full flex-1">
              <p>
                Holidaze became my most complete frontend project so far because
                it combined product thinking, visual design, role-based user
                flows, and technical structure.
              </p>
              <p>
                The project challenged me to think beyond individual pages and
                instead design a connected experience where visitors, customers,
                and venue managers each had different goals. It strengthened my
                understanding of React, TypeScript, frontend state, reusable
                components, and how small UX decisions can make complex
                functionality feel simple.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <section className="flex w-full justify-center px-4 mt-[250px] max-[900px]:mt-[100px] mb-20 sm:px-10">
          <div className="flex w-full max-w-[1300px] justify-between gap-[36px]">
            <ProjectNavCard
              to="/projects/petify"
              image={petifyMockup}
              label="Previous Project"
              title="Petify"
              direction="previous"
            />

            <ProjectNavCard
              to="/projects/bidverse"
              image={bidverseMockup}
              label="Next Project"
              title="Bidverse"
              direction="next"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
