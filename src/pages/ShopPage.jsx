import shopMockup from "../assets/shop/shop-no-background.png";
import ProjectHero from "../components/ProjectHero";
import image1 from "../assets/shop/image-1.webp";
import image2 from "../assets/shop/image-2.webp";
import video1 from "../assets/shop/video-1.webm";
import video2 from "../assets/shop/video-2.webm";
import ProjectNavCard from "../components/ProjectNavCard";
import petifyMockup from "../assets/petify/petify-css-mockup.png";
import bidverseMockup from "../assets/bidverse/bidverse-mockup.png";
import Reveal from "../components/Reveal";

export default function ShopPage() {
  return (
    <div>
      <ProjectHero
        hideLogo
        title="Online Shop Website"
        meta={
          <>
            <span className="font-bold">JavaScript Frameworks</span> • React •
            Tailwind CSS • TypeScript • Vite • REST API
          </>
        }
        description={[
          "Shop is a functional ecommerce website built for my JavaScript Frameworks course assignment using React, TypeScript, Tailwind CSS, TanStack Router, and Vite.",
          "The project focuses on fetching product data from the Noroff API and creating a complete shopping flow, including product browsing, search, sorting, product details, cart management, contact form, and checkout confirmation.",
        ]}
        image={shopMockup}
        imageAlt="Online Shop mockup"
        gradientTo="#3B82F6"
        buttonVariant="shop"
        links={[
          {
            label: "GITHUB REPO",
            href: "https://github.com/NoroffFEU/jsfw-2025-v1-ina-js-frameworks",
          },
          {
            label: "LIVE DEMO",
            href: "https://js-frameworks-ca-ina.netlify.app/",
          },
        ]}
      />

      <div className="flex flex-col items-center mt-[250px] max-[900px]:mt-25 px-4 sm:px-10 gap-[250px] max-[900px]:gap-25">
        {/* Section 1 */}
        <section className="flex max-[900px]:flex-col justify-between items-start max-w-[1078px] w-full max-[900px]:gap-10">
          <Reveal className="flex items-center gap-3">
            <span className="inline-block font-display text-[55px] leading-none text-[#3B82F6]">
              1.
            </span>

            <h2 className="w-[87px] text-xl leading-tight">Project Context</h2>
          </Reveal>

          <Reveal className="grid gap-5 max-w-[525px] max-[900px]:max-w-full w-full">
            <p>
              This project was created as part of the JavaScript Frameworks
              course, where the main goal was to build a frontend application
              using a modern React-based workflow.
            </p>
            <p>
              For this assignment, I created a simple online shop that uses the
              Noroff API to display products and support a functional shopping
              experience. While the visual design was kept minimal, the project
              gave me practice working with React components, TypeScript,
              routing, API data, and shared cart state across multiple pages.
            </p>
          </Reveal>
        </section>

        <section className="grid gap-[100px] max-w-[1078px] w-full">
          <div className="flex max-[1000px]:flex-col justify-between items-start gap-[34px] max-[1000px]:gap-25">
            {/* Section 2 */}
            <Reveal className="flex-1">
              <div className="flex items-center gap-3">
                <span className="inline-block font-display text-[55px] leading-none text-[#3B82F6]">
                  2.
                </span>

                <h2 className="w-[125px] text-xl leading-tight">
                  Product Browsing
                </h2>
              </div>

              <p className="mt-8">
                The home page was designed around product discovery.
              </p>

              <p className="mt-5">
                Products are fetched from the Noroff API and displayed in a
                responsive grid, with each card showing key information such as
                product image, title, description, price, and discount labels
                where relevant.
              </p>

              <p className="mt-5">
                To make browsing easier, I added a search field and sorting
                options so users can quickly narrow down the product list.
                Products can be sorted by price from high to low, low to high,
                or filtered to only show sale items.
              </p>

              <div className="mt-[100px] max-[1000px]:mt-15">
                <video
                  src={video1}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="object-cover w-full"
                />
              </div>
            </Reveal>

            {/* Section 3 */}
            <Reveal className="flex flex-col flex-1 h-full justify-between">
              <div>
                <div className="flex items-center gap-3">
                  <span className="inline-block font-display text-[55px] leading-none text-[#3B82F6]">
                    3.
                  </span>

                  <h2 className="w-[125px] text-xl leading-tight">
                    Product Details
                  </h2>
                </div>

                <p className="mt-8">
                  Each product has its own detail page where users can view a
                  larger product image, category tags, rating, description,
                  original price, discounted price, quantity controls, and API
                  reviews where available.
                </p>

                <p className="mt-5">
                  The review section is read-only, but it helps make the product
                  page feel more complete by displaying the review data returned
                  from the API.
                </p>
              </div>

              <div className="max-[1000px]:mt-15">
                <img src={image1} className="object-cover w-full" />
              </div>
            </Reveal>
          </div>
        </section>

        {/* Section 4 */}
        <Reveal className="flex max-[900px]:flex-col justify-between items-start max-w-[1078px] w-full mx-auto max-[900px]:gap-10">
          <div className="flex items-center gap-3">
            <span className="inline-block font-display text-[55px] leading-none text-[#3B82F6]">
              4.
            </span>

            <h2 className="w-[166px] text-xl leading-tight">
              Cart & Checkout Flow
            </h2>
          </div>

          <div className="grid gap-5 max-w-[525px] max-[900px]:max-w-full w-full">
            <p>
              The shopping cart was the main functional part of the project.
            </p>
            <p>
              Users can add products to the cart, adjust quantities, remove
              items, and view an order summary with the total cost. The cart
              icon also updates based on the number of items added, helping
              users keep track of their order while browsing.
            </p>
            <p>
              The checkout flow ends with a simple payment success page,
              creating a complete ecommerce journey from browsing products to
              confirming an order.
            </p>
          </div>
        </Reveal>
      </div>

      <div className="flex justify-center bg-[#1D49C5]/50 py-[80px] w-full px-4 sm:px-10 mt-[100px]">
        <Reveal className="max-w-[1078px] w-full">
          <video
            src={video2}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="object-cover w-full"
          />
        </Reveal>
      </div>

      <div className="flex flex-col items-center mt-[250px] max-[900px]:mt-25 px-4 sm:px-10 gap-[250px] max-[900px]:gap-25">
        {/* Section 5 */}
        <Reveal className="flex max-[1100px]:flex-col justify-between max-w-[1078px] w-full max-[1100px]:gap-10">
          <div className="max-[1100px]:flex max-[900px]:flex-col max-[1100px]:justify-between max-[900px]:gap-5">
            <div className="flex items-center gap-3">
              <span className="inline-block font-display text-[55px] leading-none text-[#3B82F6]">
                5.
              </span>

              <h2 className="w-[87px] text-xl leading-tight">Contact Form</h2>
            </div>

            <p className="mt-10 max-[1100px]:mt-0 w-[400px] max-[1100px]:w-[525px] max-[900px]:w-full">
              A contact page was also included as a simple form-based page,
              giving the project a more complete shop structure beyond only
              product and cart views.
            </p>
          </div>

          <div className="max-[1100px]:max-w-full max-w-[520px] w-full">
            <img src={image2} alt="" className="w-full object-cover" />
          </div>
        </Reveal>

        {/* Reflection */}
        <Reveal className="flex gap-[30px] max-[900px]:flex-col">
          <h3 className="text-xl text-[#BFDBFE]">Reflection</h3>

          <div className="grid gap-5 max-w-[550px] w-full flex-1">
            <p>
              This project helped me become more comfortable building a React
              application with TypeScript, reusable components, API data, and
              route-based pages.
            </p>
            <p>
              Even though the design was kept simple, the assignment gave me
              valuable practice creating a functional ecommerce flow and
              managing shared cart behavior across the application.
            </p>
          </div>
        </Reveal>

        <section className="flex w-full justify-center mb-20">
          <Reveal className="flex w-full max-[600px]:flex-col max-w-[1300px] justify-between gap-[36px]">
            <ProjectNavCard
              to="/projects/bidverse"
              image={bidverseMockup}
              label="Previous Project"
              title="Bidverse"
              direction="previous"
            />

            <ProjectNavCard
              to="/projects/petify"
              image={petifyMockup}
              label="Next Project"
              title="Petify"
              direction="next"
            />
          </Reveal>
        </section>
      </div>
    </div>
  );
}
