import { approaches } from "@/assets/data/skills";

export default function Approaches() {
  return (
    <div className="w-full h-max mb-20">
      <div className="flex flex-col select-none">
        <div className="w-full h-max text-xl uppercase tracking-wider rounded-t-4xl text-gray-300 py-4 flex justify-center bg-gradient-to-l from-blue-200/10 via-sky-300/10 to-violet-500/10 border-white/20 border bg-white/10 backdrop-blur-2xl">
          Approaches
        </div>
        <div className="w-full h-max flex-wrap gap-3 text-white/80 rounded-b-lg text-xl flex justify-around bg-gradient-to-r py-8 from-blue-200/10 via-sky-500/10 to-violet-500/20 border-white/20 border backdrop-blur-2xl">
          {approaches.map((e) => (
            <div className="bg-violet-600/20 py-1 px-4 rounded-full" key={e}>
              {e}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
