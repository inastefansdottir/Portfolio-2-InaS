import Sparkle from "../assets/icons/sparkle.svg?react";
import ResumeItem from "./ResumeItem";

function ResumeRow({
  left,
  right,
  isLast = false,
  lineHeight = "120px",
  mobileLineHeight = "170px",
}) {
  return (
    <>
      {/* Left content */}
      <div className="pt-6 max-[760px]:col-start-2 max-[760px]:py-4">
        {left && <ResumeItem {...left} align="left" />}
      </div>

      {/* Middle sparkle + line */}
      <div className="flex flex-col items-center pt-8 max-[760px]:col-start-1 max-[760px]:row-span-2 max-[760px]:py-4">
        <Sparkle className="block size-[60px] shrink-0 text-primary max-[760px]:size-[38px]" />

        {!isLast && (
          <>
            {/* desktop line */}
            <div
              className="mt-5 w-px bg-primary max-[760px]:hidden"
              style={{ height: lineHeight }}
            />

            {/* mobile line */}
            <div
              className="mt-4 hidden w-px bg-primary max-[760px]:block"
              style={{ height: mobileLineHeight }}
            />
          </>
        )}
      </div>

      {/* Right content */}
      <div className="pt-6 max-[760px]:col-start-2 max-[760px]:py-4">
        {right && <ResumeItem {...right} align="right" />}
      </div>
    </>
  );
}

export default ResumeRow;
