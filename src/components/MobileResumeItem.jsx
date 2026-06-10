import Sparkle from "../assets/icons/sparkle.svg?react";
import ResumeItem from "./ResumeItem";

function MobileResumeItem({ item, isLast }) {
  return (
    <div className="grid grid-cols-[34px_1fr] gap-x-4">
      <div className="flex flex-col items-center pb-5">
        <Sparkle className="size-[34px] shrink-0 text-primary" />

        {!isLast && (
          <div className="mt-3 min-h-[90px] w-px flex-1 bg-primary" />
        )}
      </div>

      <div className="pb-12">
        <ResumeItem {...item} align="right" />
      </div>
    </div>
  );
}

export default MobileResumeItem;
