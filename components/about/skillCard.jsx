export default function SkillCard({ data, name, motion }) {
  return (
    <div className="mt-10 mb-8 flex w-max flex-col flex-wrap lg:flex-nowrap">
      <motion.div
        className="relative flex select-none"
        animate={{ rotate: [6, -4] }}
        transition={{
          duration: 4.5,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
      >
        <span className="pl-12 text-lg text-white/80 uppercase sm:text-xl">
          {name}
        </span>
        <div className="custom-background-to-right absolute top-1/2 left-2/5 -z-10 h-full w-2/3 -translate-x-1/2 -translate-y-2/5 rounded-xl py-10 sm:w-full"></div>
      </motion.div>
      <div className="custom-gradient-to-bottom mt-8 flex w-10/12 max-w-[350px] flex-wrap items-center justify-center gap-4 rounded p-4 select-none sm:max-w-[400px]">
        {data.map(({ icon: Icon, label, color }) => (
          <div
            className="flex items-center rounded-xl bg-white/10 p-2"
            key={label}
          >
            <Icon size={40} style={{ color }} />
            <span className="ml-2 text-sm text-white sm:text-lg">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
