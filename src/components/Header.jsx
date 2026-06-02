import { NavLink } from "react-router-dom";
import clsx from "clsx";

import logoBlue from "../assets/logo-blue.png";
import logoBlack from "../assets/logo-black.png";

export default function Header({
  variant = "dark",
  logoHidden = false,
  className = "",
}) {
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

  return (
    <header
      className={clsx(
        "flex justify-center w-full px-4 sm:px-10 py-3 font-bold",
        isProject ? "text-black" : "bg-black text-primary",
        className
      )}
    >
      <nav className="flex items-center justify-between max-w-[1300px] w-full">
        <NavLink to="/projects" className={navLinkClass}>
          PROJECTS
        </NavLink>

        <NavLink
          to="/"
          className={clsx("block", logoHidden && "invisible")}
          aria-label="Go to homepage"
        >
          <img src={logo} alt="Ína logo" />
        </NavLink>

        <NavLink to="/about" className={navLinkClass}>
          ABOUT ME
        </NavLink>
      </nav>
    </header>
  );
}
