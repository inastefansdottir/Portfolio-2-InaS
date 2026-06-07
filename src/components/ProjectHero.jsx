import clsx from "clsx";
import Button from "./Button";

export default function ProjectHero({
  logo,
  hideLogo = false,
  title,
  meta,
  description = [],
  image,
  imageAlt = "",
  gradientTo = "#558C91",
  buttonVariant = "primary",
  links = [],
  className = "",
}) {
  return (
    <section
      className={clsx(
        "flex h-[650px] max-[1100px]:h-[550px] max-[900px]:h-full max-[900px]:pt-25 justify-center bg-linear-to-t from-background px-4 sm:px-10",
        className
      )}
      style={{ "--tw-gradient-to": gradientTo }}
    >
      <div className="flex max-[900px]:flex-col w-full max-w-[1300px] max-[1100px]:text-sm items-center justify-between gap-12">
        <div className="flex max-w-[570px] w-full flex-col gap-2">
          {logo && !hideLogo && (
            <img src={logo} alt="" className="h-6 self-start" />
          )}

          <h1 className="max-[1100px]:text-3xl text-[40px]">{title}</h1>

          {meta && <p>{meta}</p>}

          {description.length > 0 && (
            <div className="mt-3 grid gap-5">
              {description.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </div>
          )}

          {links.length > 0 && (
            <div className="w-[350px] mt-6 flex gap-5">
              {links.map((link) => (
                <Button
                  key={link.label}
                  variant={buttonVariant}
                  to={link.to}
                  href={link.href}
                >
                  {link.label}
                </Button>
              ))}
            </div>
          )}
        </div>

        <div className="max-[1100px]:max-w-[500px] max-w-[620px] w-full">
          {image && (
            <img src={image} alt={imageAlt} className="object-cover w-full" />
          )}
        </div>
      </div>
    </section>
  );
}
