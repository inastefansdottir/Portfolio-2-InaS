import clsx from "clsx";
import { Link } from "react-router-dom";

const buttonColors = {
  primary: {
    border: "border-primary",
    text: "text-primary",
    fill: "before:bg-primary",
    hoverText: "hover:text-background",
  },
  holidaze: {
    border: "border-[#B4D8D8]",
    text: "text-[#B4D8D8]",
    fill: "before:bg-[#B4D8D8]",
    hoverText: "hover:text-black",
  },
  bidverse: {
    border: "border-[#C5C5E8]",
    text: "text-[#C5C5E8]",
    fill: "before:bg-[#C5C5E8]",
    hoverText: "hover:text-black",
  },
  shop: {
    border: "border-[#BFDBFE]",
    text: "text-[#BFDBFE]",
    fill: "before:bg-[#BFDBFE]",
    hoverText: "hover:text-black",
  },
  petify: {
    border: "border-[#D2D2E6]",
    text: "text-[#D2D2E6]",
    fill: "before:bg-[#D2D2E6]",
    hoverText: "hover:text-black",
  },
};

export default function Button({
  variant = "primary",
  to,
  href,
  children,
  className = "",
}) {
  const colors = buttonColors[variant] || buttonColors.primary;

  const classes = clsx(
    "relative z-10 inline-block overflow-hidden bg-transparent px-[30px] py-3 font-medium transition-colors duration-200 ease-in-out",
    "border",
    "before:absolute before:inset-0 before:-z-10 before:origin-left before:scale-x-0 before:transition-transform before:duration-200 before:ease-in-out",
    "hover:before:scale-x-100",
    colors.border,
    colors.text,
    colors.fill,
    colors.hoverText,
    className
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <Link to={to} className={classes}>
      {children}
    </Link>
  );
}
