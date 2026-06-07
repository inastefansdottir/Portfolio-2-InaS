import { useState } from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

import logoBlue from "../assets/logo-blue.png";
import logoBlack from "../assets/logo-black.png";

export default function Header({
  variant = "dark",
  logoHidden = false,
  className = "",
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const isProject = variant === "project";
  const logo = isProject ? logoBlack : logoBlue;

  const navLinkClass = ({ isActive }) =>
    clsx(
      "transition-colors",
      isProject
        ? "text-black hover:text-black/60"
        : isActive
        ? "text-body"
        : "text-primary hover:text-body"
    );

  const mobileLinkClass = ({ isActive }) =>
    clsx(
      "text-xl font-black uppercase tracking-wide transition-colors",
      isProject
        ? isActive
          ? "text-black"
          : "text-black/60 hover:text-black"
        : isActive
        ? "text-body"
        : "text-primary hover:text-body"
    );

  return (
    <header
      className={clsx(
        "relative z-50 flex w-full justify-center px-4 py-3 font-bold sm:px-10",
        isProject ? "text-black" : "bg-black text-primary",
        className
      )}
    >
      <nav className="grid w-full max-w-[1300px] grid-cols-3 items-center">
        {/* Left desktop link */}
        <div className="justify-self-start">
          <NavLink
            to="/projects"
            className={clsx(navLinkClass, "max-[500px]:hidden")}
          >
            PROJECTS
          </NavLink>
        </div>

        {/* Center logo */}
        <NavLink
          to="/"
          className={clsx("justify-self-center", logoHidden && "invisible")}
          aria-label="Go to homepage"
          onClick={() => setMenuOpen(false)}
        >
          <img src={logo} alt="Ína logo" className="h-auto" />
        </NavLink>

        {/* Right desktop link + mobile hamburger */}
        <div className="justify-self-end">
          <NavLink
            to="/about"
            className={clsx(navLinkClass, "max-[500px]:hidden")}
          >
            ABOUT ME
          </NavLink>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className={clsx(
              "hidden h-10 w-10 flex-col items-center justify-center gap-1.5 max-[500px]:flex",
              isProject ? "text-black" : "text-primary"
            )}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span
              className={clsx(
                "block h-[2px] w-6 rounded-full bg-current transition-transform duration-300",
                menuOpen && "translate-y-2 rotate-45"
              )}
            />
            <span
              className={clsx(
                "block h-[2px] w-6 rounded-full bg-current transition-opacity duration-300",
                menuOpen && "opacity-0"
              )}
            />
            <span
              className={clsx(
                "block h-[2px] w-6 rounded-full bg-current transition-transform duration-300",
                menuOpen && "-translate-y-2 -rotate-45"
              )}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={clsx(
          "absolute left-0 top-full w-full overflow-hidden transition-[max-height,opacity,transform] duration-300 max-[500px]:block min-[501px]:hidden",
          menuOpen
            ? "max-h-[280px] translate-y-0 opacity-100"
            : "max-h-0 -translate-y-2 opacity-0",
          isProject
            ? "border-y border-white/25 bg-white/15 text-black shadow-lg backdrop-blur-xl"
            : "bg-black text-primary"
        )}
      >
        <div className="flex flex-col items-center gap-6 px-4 py-8 text-right sm:px-10">
          <NavLink
            to="/projects"
            className={mobileLinkClass}
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </NavLink>

          <NavLink
            to="/about"
            className={mobileLinkClass}
            onClick={() => setMenuOpen(false)}
          >
            About Me
          </NavLink>
        </div>
      </div>
    </header>
  );
}
