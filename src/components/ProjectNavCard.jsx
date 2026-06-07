import { Link } from "react-router-dom";
import clsx from "clsx";
import ArrowLeft from "../assets/icons/arrow-left.svg?react";
import ArrowRight from "../assets/icons/arrow-right.svg?react";

export default function ProjectNavCard({
  to,
  image,
  label,
  title,
  titleClass,
  direction = "next",
}) {
  const isPrevious = direction === "previous";

  return (
    <Link
      to={to}
      className="group relative block h-[250px] max-[750px]:h-[200px] w-full max-w-[415px] max-[750px]:max-w-full overflow-hidden"
      aria-label={`${label}: ${title}`}
    >
      <img
        src={image}
        alt=""
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-black/40 transition-colors duration-300 group-hover:bg-black/70" />

      <div
        className={clsx(
          "absolute bottom-5 text-white",
          isPrevious ? "right-6 text-right" : "left-6 text-left"
        )}
      >
        <p className="mb-1 text-[18px] leading-none">{label}</p>

        <div
          className={clsx(
            "flex items-center gap-3",
            isPrevious ? "justify-end" : "justify-start"
          )}
        >
          {isPrevious && (
            <span className="inline-block transition-transform duration-300 ease-out group-hover:-translate-x-4">
              <ArrowLeft className="w-auto max-[850px]:w-[35px]" />
            </span>
          )}

          <h3
            className={clsx(
              "text-[34px] font-black uppercase leading-none tracking-wide max-[850px]:text-2xl",
              titleClass
            )}
          >
            {title}
          </h3>

          {!isPrevious && (
            <span className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-4">
              <ArrowRight className="w-auto max-[850px]:w-[35px]" />
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
