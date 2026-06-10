import Sparkle from "../assets/icons/sparkle.svg?react";
import ResumeItem from "./ResumeItem";

function ResumeRow({ left, right, isLast = false, lineHeight = "120px" }) {
  return (
    <>
      {/* Left content */}
      <div className="pt-6">
        {left && <ResumeItem {...left} align="left" />}
      </div>

      {/* Middle sparkle + line */}
      <div className="flex flex-col items-center pt-4">
        <Sparkle className="block h-[60px] w-[60px] min-w-[60px] shrink-0 text-primary" />

        {!isLast && (
          <div
            className="mt-5 w-px bg-primary"
            style={{ height: lineHeight }}
          />
        )}
      </div>

      {/* Right content */}
      <div className="pt-6">
        {right && <ResumeItem {...right} align="right" />}
      </div>
    </>
  );
}

export default ResumeRow;
