export default function SkillCard({ data, name, motion }) {
  return (
    <div className="w-max flex flex-col mt-10 mb-8 lg:flex-nowrap flex-wrap">
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
        <span className="uppercase text-white/80 text-2xl pl-8">{name}</span>
        <div className="absolute top-1/2 left-2/5 -translate-x-1/2 -translate-y-2/5 bg-white/10 backdrop-blur-2xl h-full py-10 rounded-xl w-full -z-10 bg-gradient-to-r from-blue-200/10 via-sky-300/10 to-violet-500/10 border-white/20 border"></div>
      </motion.div>
      <div className="flex max-w-[400px] select-none mt-8 flex-wrap p-4 rounded backdrop-blur-2xl justify-center gap-4 items-center w-10/12 bg-gradient-to-b from-blue-200/10 via-sky-500/10 to-violet-500/20 border-white/20 border">
        {data.map(({ icon: Icon, label, color }) => (
          <div
            className="flex items-center bg-white/10 p-2 rounded-xl"
            key={label}
          >
            <Icon size={40} style={{ color }} />
            <span className="ml-2 text-white text-lg">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
