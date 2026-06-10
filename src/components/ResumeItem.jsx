import Reveal from "./Reveal";

function ResumeItem({
  title,
  place,
  subtitle,
  date,
  role,
  description,
  align = "left",
}) {
  return (
    <Reveal className={align === "left" ? "text-right" : "text-left"}>
      <h4 className="text-xl leading-snug font-body!">
        <span className="font-bold">{title}</span>
        {place && <span className="font-normal">, {place}</span>} -{" "}
        {subtitle && (
          <span className="text-lg leading-snug italic">{subtitle}</span>
        )}
      </h4>

      {date && <p className="mt-4 text-sm font-bold text-secondary">{date}</p>}

      {role && <p className="mt-3 font-bold">{role}</p>}

      {description && (
        <p className="mt-3 max-w-[520px] leading-relaxed">{description}</p>
      )}
    </Reveal>
  );
}

export default ResumeItem;
