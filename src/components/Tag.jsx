import clsx from "clsx";

export default function Tag({ variant = "default", children }) {
  const schoolProject = variant === "light";

  return (
    <span
      className={clsx(
        "px-4 py-0.5 border font-medium rounded-full text-[10px]",
        schoolProject
          ? "text-secondary bg-secondary/30 border-secondary"
          : "text-primary bg-primary/30 border-primary"
      )}
    >
      {children}
    </span>
  );
}
