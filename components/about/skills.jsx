import dynamic from "next/dynamic";
import skills from "../../assets/lottie/skills.json";
import SkillCard from "./skillCard";
import { frontend, backend, tools } from "@/assets/data/skills";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function Skills() {
  return (
    <div className="flex w-full mt-10 mb-40 flex-col">
      <div className="flex w-full items-center">
        <div className="w-40 h-40">
          <Lottie animationData={skills} width={1} height={100} />
        </div>
        <span className="text-5xl text-white select-none">My Toolbox</span>
      </div>
      <div className=" w-full ml-8 flex flex-col justify-around">
        <div className="flex w-full flex-col lg:gap-0 gap-10">
          <SkillCard data={frontend} name={"Frontend"} />
          <SkillCard data={backend} name={"Backend"} />
          <SkillCard data={tools} name={"Tools"} />
        </div>
      </div>
    </div>
  );
}
