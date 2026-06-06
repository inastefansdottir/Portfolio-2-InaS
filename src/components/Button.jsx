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

const groupHoverColors = {
  holidaze:
    "group-hover/card:border-[#B4D8D8] group-hover/card:text-[#B4D8D8] group-hover/card:before:bg-[#B4D8D8]",
  bidverse:
    "group-hover/card:border-[#C5C5E8] group-hover/card:text-[#C5C5E8] group-hover/card:before:bg-[#C5C5E8]",
  shop: "group-hover/card:border-[#BFDBFE] group-hover/card:text-[#BFDBFE] group-hover/card:before:bg-[#BFDBFE]",
  petify:
    "group-hover/card:border-[#D2D2E6] group-hover/card:text-[#D2D2E6] group-hover/card:before:bg-[#D2D2E6]",
};

const buttonSizes = {
  default: "px-[30px] py-3 text-base",
  small: "px-5 py-2 text-sm",
};

export default function Button({
  variant = "primary",
  hoverVariant,
  size = "default",
  to,
  href,
  children,
  className = "",
}) {
  const colors = buttonColors[variant] || buttonColors.primary;
  const groupHover = hoverVariant ? groupHoverColors[hoverVariant] : "";
  const sizeClass = buttonSizes[size] || buttonSizes.default;

  const classes = clsx(
    "relative z-10 inline-block overflow-hidden bg-transparent font-medium tracking-wider transition-colors duration-200 ease-in-out",
    "border",
    "before:absolute before:inset-0 before:-z-10 before:origin-left before:scale-x-0 before:transition-transform before:duration-200 before:ease-in-out",
    "hover:before:scale-x-100",
    colors.border,
    colors.text,
    colors.fill,
    colors.hoverText,
    groupHover,
    sizeClass,
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
