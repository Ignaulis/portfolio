import dynamic from "next/dynamic";
import skills from "../../assets/lottie/skills.json";
import reactIcons from "@/assets/data/skills";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function Skills() {
  console.log(reactIcons);

  return (
    <div className="flex w-full mt-4 flex-col">
      <div className="flex w-full items-center">
        <div className="w-40 h-40">
          <Lottie animationData={skills} width={1} height={100} />
        </div>
        <span className="text-5xl text-white">My Toolbox</span>
      </div>
      <div className="mt-6 ml-8 flex justify-around">
        <div className="">
          <span className="uppercase text-white/80 text-3xl border-b-2 border-white/80 pb-8">
            Frontend
          </span>
          <div className="flex flex-col">
            {reactIcons.map((e) => (
              <div className="flex" key={e.skill}>
                <div className="w-20 h-20" style={{ color: e.color }}>
                  {/* {e.icon} */}
                </div>
                <div className="text-white">{e.skill}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="">
          <span className="uppercase text-white/80 text-3xl border-b-2 border-white/80 pb-8">
            Backend
          </span>
        </div>
        <div className="">
          <span className="uppercase text-white/80 text-3xl border-b-2 border-white/80 pb-8">
            Tools
          </span>
        </div>
      </div>
    </div>
  );
}
