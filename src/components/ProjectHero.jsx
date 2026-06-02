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
        "flex h-[650px] justify-center bg-linear-to-t from-background px-4 sm:px-10",
        className
      )}
      style={{ "--tw-gradient-to": gradientTo }}
    >
      <div className="flex w-full max-w-[1300px] items-center justify-between gap-12">
        <div className="flex w-[570px] flex-col gap-2">
          {logo && !hideLogo && (
            <img src={logo} alt="" className="h-6 self-start" />
          )}

          <h1 className="text-[40px]">{title}</h1>

          {meta && <p>{meta}</p>}

          {description.length > 0 && (
            <div className="mt-3 grid gap-5">
              {description.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </div>
          )}

          {links.length > 0 && (
            <div className="mt-6 flex gap-5">
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

        <div className="max-w-[620px] w-full">
          {image && (
            <img src={image} alt={imageAlt} className="object-cover w-full" />
          )}
        </div>
      </div>
    </section>
  );
}
