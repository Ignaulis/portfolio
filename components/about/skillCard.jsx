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
        <span className="uppercase text-white/80 text-lg sm:text-xl pl-12">
          {name}
        </span>
        <div className="absolute top-1/2 left-2/5 -translate-x-1/2 -translate-y-2/5 custom-background-to-right h-full py-10 rounded-xl sm:w-full w-2/3 -z-10"></div>
      </motion.div>
      <div className="flex sm:max-w-[400px] max-w-[350px] select-none mt-8 flex-wrap p-4 rounded justify-center gap-4 items-center w-10/12 custom-gradient-to-bottom">
        {data.map(({ icon: Icon, label, color }) => (
          <div
            className="flex items-center bg-white/10 p-2 rounded-xl"
            key={label}
          >
            <Icon size={40} style={{ color }} />
            <span className="ml-2 text-white text-sm sm:text-lg">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
