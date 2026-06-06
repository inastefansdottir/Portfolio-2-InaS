import { useState } from "react";
import clsx from "clsx";
import Button from "./Button";

export default function ProjectThumbnail({
  titleParts = [],
  meta,
  description,
  image,
  imageAlt = "",
  to,
  projectColor = "#6666FF",
  projectLight = "#C5C5E8",
  buttonVariant = "bidverse",
  className = "",
  imageClassName = "",
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      style={{
        "--project": projectColor,
        "--project-light": projectLight,
        borderColor: isHovered
          ? `${projectColor}80`
          : "color-mix(in srgb, var(--color-primary) 50%, transparent)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={clsx(
        "group/card relative grid h-[320px] w-full grid-cols-[1fr_auto] items-center overflow-hidden border pl-[30px] transition-colors duration-300",
        "max-[1100px]:grid-cols-[1fr_400px]",
        "max-[720px]:h-auto max-[720px]:grid-cols-1 max-[720px]:gap-8 max-[720px]:p-[30px]",
        className
      )}
    >
      {/* Default gradient desktop */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-background opacity-30 transition-opacity duration-300 group-hover/card:opacity-0 max-[720px]:hidden" />

      {/* Default gradient mobile */}
      <div className="absolute inset-0 hidden bg-gradient-to-b from-primary to-background opacity-30 transition-opacity duration-300 group-hover/card:opacity-0 max-[720px]:block" />

      {/* Hover gradient desktop */}
      <div
        className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/card:opacity-30 max-[720px]:hidden"
        style={{
          background:
            "linear-gradient(to right, var(--color-background), var(--project))",
        }}
      />

      {/* Hover gradient mobile */}
      <div
        className="absolute inset-0 hidden opacity-0 transition-opacity duration-300 group-hover/card:opacity-30 max-[720px]:block"
        style={{
          background:
            "linear-gradient(to bottom, var(--color-background), var(--project))",
        }}
      />

      <div className="relative z-10 max-w-[390px] max-[720px]:max-w-full">
        <h2 className="text-[30px] font-black uppercase leading-none tracking-wide">
          {titleParts.map((part, index) => (
            <span
              key={index}
              className={clsx(
                "transition-colors duration-300",
                part.color === "body"
                  ? "text-body"
                  : "text-primary group-hover/card:text-[var(--project)]"
              )}
            >
              {part.text}
            </span>
          ))}
        </h2>

        <p className="mt-2 text-sm text-secondary transition-colors duration-300 group-hover/card:text-[var(--project-light)]">
          {meta}
        </p>

        <p className="mt-4 max-w-[220px] text-sm max-[720px]:max-w-full">
          {description}
        </p>

        <div className="mt-4">
          <Button
            to={to}
            variant="primary"
            hoverVariant={buttonVariant}
            size="small"
          >
            VIEW CASE STUDY
          </Button>
        </div>
      </div>

      <div className="relative z-10 w-[280px] overflow-hidden max-[1100px]:w-[400px] max-[720px]:w-full">
        {image && (
          <img
            src={image}
            alt={imageAlt}
            className={clsx(
              "h-full w-[380px] max-w-none object-cover object-left transition-transform duration-500 ease-out group-hover/card:scale-105",
              "max-[1100px]:w-[400px]",
              "max-[720px]:h-auto max-[720px]:w-full max-[720px]:max-w-full",
              imageClassName
            )}
          />
        )}
      </div>
    </section>
  );
}
