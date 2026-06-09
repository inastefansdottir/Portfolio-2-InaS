export default function Icons({ Icon, name, description }) {
  return (
    <div className="group relative w-fit">
      <div className="p-2 border border-primary w-fit rounded-lg bg-transparent transition-all duration-300 hover:bg-primary/30">
        <Icon className="h-[35px] w-[35px] object-fit" />
      </div>

      <div className="pointer-events-none absolute left-1/2 top-[calc(100%+18px)] z-20 w-[220px] -translate-x-1/2 rounded-xl border border-primary/50 bg-black p-6 text-center text-body opacity-0 shadow-2xl transition-all duration-300 group-hover:opacity-100">
        <div className="absolute left-1/2 top-[-7px] h-3 w-3 -translate-x-1/2 rotate-45 border-l border-t border-primary/50 bg-black" />

        <h3 className="mb-3 text-lg font-bold">{name}</h3>
        <p className="text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
