import SEO from "../components/SEO";
import petifyLogo from "../assets/petify/petify-logo.svg";
import ProjectHero from "../components/ProjectHero";
import petifyMockup from "../assets/petify/petify-no-background.png";
import Button from "../components/Button";
import image1 from "../assets/petify/image-1.webp";
import image2 from "../assets/petify/image-2.webp";
import image3 from "../assets/petify/image-3.webp";
import image4 from "../assets/petify/image-4.webp";
import image5 from "../assets/petify/image-5.webp";
import image6 from "../assets/petify/image-6.webp";
import video1 from "../assets/petify/video-1.webm";
import styleGuide from "../assets/petify/style-guide.png";
import ProjectNavCard from "../components/ProjectNavCard";
import holidazeMockup from "../assets/holidaze/holidaze-mockup.png";
import shopMockup from "../assets/shop/shop-mockup.png";
import Reveal from "../components/Reveal";

export default function PetifyPage() {
  return (
    <>
      <SEO
        title="Petify Case Study"
        description="A playful Bootstrap and SASS adaptation of a pet social media concept, focused on responsive static layouts and custom visual styling."
        url="https://portfolio-ina-s.netlify.app/projects/petify"
      />

      <div>
        <ProjectHero
          logo={petifyLogo}
          title="Social Media Website"
          meta={
            <>
              <span className="font-bold">CSS Frameworks</span> • HTML •
              Bootstrap Sass
            </>
          }
          description={[
            "Petify is a playful social media interface for pets, recreated as a CSS Frameworks assignment using Bootstrap and SASS.",
            "The concept was originally developed as a full JavaScript 2 project, while this version focuses on adapting the same visual identity into a responsive static layout across login, feed, and profile pages.",
          ]}
          image={petifyMockup}
          imageAlt="Holidaze website mockup"
          gradientTo="#A796E3"
          buttonVariant="petify"
          links={[
            {
              label: "GITHUB REPO",
              href: "https://github.com/inastefansdottir/CSS-framework-CA/tree/css-frameworks",
            },
            {
              label: "LIVE DEMO",
              href: "https://petify-css-frameworks.netlify.app/",
            },
          ]}
        />

        <div className="flex flex-col items-center mt-[250px] max-[900px]:mt-25 px-4 sm:px-10 gap-[250px] max-[800px]:gap-25">
          {/* Section 1 */}
          <section className="flex flex-col items-center gap-[60px]">
            <Reveal className="flex max-[900px]:flex-col w-full max-w-[1078px] items-stretch justify-between">
              <div className="flex flex-col justify-between self-stretch max-[900px]:gap-10">
                <div className="flex items-center gap-3">
                  <span className="inline-block font-display text-[55px] leading-none text-[#A796E3]">
                    1.
                  </span>

                  <h2 className="w-[87px] text-xl leading-tight">
                    Project Context
                  </h2>
                </div>

                <Button
                  href="https://javascript-2-ca-inas-production.up.railway.app/"
                  variant="petify"
                  className="max-[900px]:self-start"
                >
                  VIEW ORIGINAL PROJECT
                </Button>
              </div>

              <div className="grid w-full max-w-[525px] gap-5 max-[900px]:mt-10">
                <p>
                  Petify was originally created as my JavaScript 2 course
                  assignment, a functional social media app for pets with posts,
                  profiles, comments, follows, and user interaction.
                </p>
                <p>
                  For the CSS Frameworks assignment, I reused the same concept
                  and visual identity, but rebuilt selected screens as a static
                  Bootstrap version. This helped keep the project focused on the
                  course goal: working with a CSS framework while maintaining a
                  custom design direction.
                </p>
              </div>
            </Reveal>

            <Reveal className="flex w-full max-w-[1300px] items-center justify-between gap-[60px] max-[900px]:gap-5">
              <img
                src={image1}
                alt=""
                className="h-auto max-h-[580px] min-w-0 object-contain"
              />
              <img
                src={image2}
                alt=""
                className="h-auto max-h-[580px] min-w-0 object-contain"
              />
            </Reveal>

            <Reveal className="flex w-full max-w-[1300px] items-center justify-between gap-[60px] max-[900px]:gap-5">
              <img
                src={image3}
                alt=""
                className="h-auto max-h-[580px] min-w-0 object-contain"
              />
              <img
                src={image4}
                alt=""
                className="h-auto max-h-[580px] min-w-0 object-contain"
              />
            </Reveal>

            <Reveal className="self-start">
              Original JavaScript 2 project shown for context.
            </Reveal>
          </section>

          {/* Section 2 */}
          <Reveal className="flex max-[800px]:flex-col justify-between items-start max-w-[1078px] w-full mx-auto max-[800px]:gap-10">
            <div className="flex items-center gap-3">
              <span className="inline-block font-display text-[55px] leading-none text-[#A796E3]">
                2.
              </span>

              <h2 className="w-[150px] text-xl leading-tight">
                Bootstrap Adaptation
              </h2>
            </div>

            <div className="grid gap-5 max-w-[525px] w-full">
              <p>
                This version of Petify includes three main screens: login, feed,
                and profile.
              </p>
              <p>
                Bootstrap was used for the layout structure, grid system,
                responsive behavior, forms, buttons, and cards. I also used SASS
                to customize the styling so the final design still felt like
                Petify instead of a default Bootstrap template.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="flex justify-center bg-[#5F5AA5] w-full mt-[100px] px-4 sm:px-10">
          <div className="my-20 flex max-[1000px]:flex-col w-full max-w-[1300px] items-center justify-between gap-5">
            <Reveal className="flex-1">
              <img
                src={image5}
                alt=""
                className="h-auto max-h-[500px] min-w-0 object-contain"
              />
            </Reveal>

            <Reveal delay={0.1} className="flex-1">
              <video
                src={video1}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="object-cover w-full min-w-0 object-contain"
              />
            </Reveal>

            <Reveal delay={0.2} className="flex-1">
              <img
                src={image6}
                alt=""
                className="h-auto max-h-[500px] min-w-0 object-contain"
              />
            </Reveal>
          </div>
        </div>

        <div className="flex flex-col items-center mt-[250px] max-[800px]:mt-25 px-4 sm:px-10 gap-[250px] max-[800px]:gap-25">
          {/* Section 3 */}
          <section className="flex max-[1100px]:flex-col justify-between max-w-[1078px] w-full">
            <Reveal className="max-[1100px]:flex max-[800px]:flex-col max-[1100px]:justify-between max-[1100px]:items-start max-[800px]:gap-10">
              <div className="flex items-center gap-3">
                <span className="inline-block font-display text-[55px] leading-none text-[#A796E3]">
                  3.
                </span>

                <h2 className="w-[87px] text-xl leading-tight">Visual Style</h2>
              </div>

              <div className="mt-10 max-[1100px]:mt-0 w-[400px] max-[1100px]:w-[525px] max-[800px]:w-full">
                <p>
                  The interface was designed to feel soft, playful, and
                  friendly, matching the pet-focused concept of the original
                  project.
                </p>
                <p className="mt-5">
                  Pastel purple tones, rounded cards, green accents, pet
                  imagery, and clean spacing helped create a cheerful social
                  media look while keeping the pages simple and easy to
                  navigate.
                </p>
              </div>
            </Reveal>

            <Reveal className="max-w-[520px] max-[1100px]:max-w-full max-[1100px]:mt-10 w-full">
              <img src={styleGuide} alt="" className="w-full object-cover" />
            </Reveal>
          </section>

          {/* Reflection */}
          <Reveal className="flex max-[500px]:flex-col gap-[30px]">
            <h3 className="text-xl text-[#E6E1F2]">Reflection</h3>

            <div className="grid gap-5 max-w-[550px] w-full flex-1">
              <p>
                This project was a useful exercise in adapting an existing
                design into a framework-based layout.
              </p>
              <p>
                It helped me understand how Bootstrap can speed up page
                structure and responsive design, while SASS makes it possible to
                keep a more personal and customized visual style.
              </p>
            </div>
          </Reveal>

          <section className="flex w-full justify-center mb-20">
            <Reveal className="flex max-[600px]:flex-col w-full max-w-[1300px] justify-between gap-[36px]">
              <ProjectNavCard
                to="/projects/shop"
                image={shopMockup}
                label="Previous Project"
                title="Online Shop"
                direction="previous"
                titleClass={"max-[750px]:w-[110px] max-[600px]:w-full"}
              />

              <ProjectNavCard
                to="/projects/holidaze"
                image={holidazeMockup}
                label="Next Project"
                title="Holidaze"
                direction="next"
              />
            </Reveal>
          </section>
        </div>
      </div>
    </>
  );
}
