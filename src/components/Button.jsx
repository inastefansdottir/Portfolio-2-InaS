import clsx from "clsx";
import { Link } from "react-router-dom";

export default function Button({ color, to, children, className = "" }) {
  return (
    <Link
      to={to}
      className={clsx(
        `relative z-10 inline-block overflow-hidden bg-transparent py-3 px-[30px] font-medium border border-${color} text-${color} transition-colors duration-200 ease-in-out before:absolute before:inset-0 before:-z-10 before:origin-left before:scale-x-0 before:bg-${color} before:transition-transform before:duration-200 before:ease-in-out hover:text-background hover:before:scale-x-100`,
        className
      )}
    >
      {children}
    </Link>
  );
}
