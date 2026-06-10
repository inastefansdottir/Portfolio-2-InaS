import { Link } from "react-router-dom";
import clsx from "clsx";

export default function ProjectCard({
  to,
  title,
  meta,
  image,
  imageAlt,
  logo,
  logoAlt,
  projectColor = "#6666FF",
  metaColor = "#C5C5E8",
  imageWrapperClassName = "",
  imageClassName = "",
  className = "",
}) {
  return (
    <Link
      to={to}
      className={clsx(
        "group relative block aspect-[7/10] overflow-hidden border bg-black transition-all duration-300",
        "hover:-translate-y-2 hover:shadow-[0_25px_70px_rgba(0,0,0,0.45)]",
        className
      )}
      style={{
        borderColor: `${projectColor}90`,
      }}
    >
      {/* shared gradient style, project color changes */}
      <div
        className="absolute inset-0 opacity-45 transition-opacity duration-300 group-hover:opacity-65"
        style={{
          background: `linear-gradient(to top, ${projectColor} 0%, rgba(0,0,0,0.88) 62%, #000 100%)`,
        }}
      />

      {/* extra dark overlay so text/image stays readable */}
      <div className="absolute inset-0 bg-black/35" />

      <div className="relative z-10 flex h-full flex-col p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <h2 className="max-w-[165px] font-body! font-medium leading-snug text-body">
              {title}
            </h2>

            {meta && (
              <p
                className="mt-2 max-w-[160px] text-xs leading-snug"
                style={{ color: metaColor }}
              >
                {meta}
              </p>
            )}
          </div>

          {logo && (
            <div className="flex-[0.7] max-h-[52px] max-w-[135px] w-full mt-1">
              <img src={logo} alt={logoAlt} className="object-contain" />
            </div>
          )}
        </div>

        <div
          className={clsx(
            "absolute bottom-0 left-1/2 z-10 -translate-x-1/2 overflow-visible",
            imageWrapperClassName
          )}
        >
          <img
            src={image}
            alt={imageAlt}
            className={clsx(
              "block max-w-none origin-bottom object-contain transition-transform duration-500 group-hover:scale-105",
              imageClassName
            )}
          />
        </div>
      </div>
    </Link>
  );
}
