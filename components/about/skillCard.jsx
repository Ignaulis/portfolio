export default function SkillCard({ data, name }) {
  return (
    <div className="w-max flex flex-col mt-10 mb-8 lg:flex-nowrap flex-wrap">
      <div className="relative flex select-none">
        <span className="uppercase text-white/80 text-2xl pl-8">{name}</span>
        <div className="absolute top-1/2 left-2/5 -translate-x-1/2 -translate-y-2/5 bg-white/10 backdrop-blur-2xl h-full py-10 rounded-xl w-full rotate-6 hover:rotate-0 -z-10 bg-gradient-to-r from-blue-200/10 via-sky-300/10 to-violet-500/10 border-white/20 border"></div>
      </div>
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
