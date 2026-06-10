import MobileResumeItem from "./MobileResumeItem";

function MobileResumeSection({ title, items }) {
  return (
    <section className="mt-16">
      <h3 className="mb-8 text-2xl font-black tracking-[0.18em] text-primary">
        {title}
      </h3>

      <div>
        {items.map((item, index) => (
          <MobileResumeItem
            key={`${title}-${index}`}
            item={item}
            isLast={index === items.length - 1}
          />
        ))}
      </div>
    </section>
  );
}

export default MobileResumeSection;
