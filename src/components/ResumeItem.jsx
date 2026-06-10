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
    <Reveal
      className={
        align === "left" ? "text-right max-[760px]:text-left" : "text-left"
      }
    >
      <h4 className="font-body! text-xl leading-snug max-[980px]:text-base max-[500px]:text-sm">
        <span className="font-bold">{title}</span>
        {place && <span className="font-normal">, {place}</span>}
        {subtitle && (
          <>
            {" "}
            - <span className="italic">{subtitle}</span>
          </>
        )}
      </h4>

      {date && (
        <p className="mt-2 text-sm font-bold text-secondary max-[980px]:text-sm max-[500px]:text-xs">
          {date}
        </p>
      )}

      {role && (
        <p className="mt-2 font-bold max-[980px]:text-sm max-[500px]:text-xs">
          {role}
        </p>
      )}

      {description && (
        <p className="mt-2 max-w-[520px] leading-relaxed max-[980px]:text-sm max-[500px]:text-xs">
          {description}
        </p>
      )}
    </Reveal>
  );
}

export default ResumeItem;
