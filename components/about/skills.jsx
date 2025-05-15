import dynamic from "next/dynamic";
import skills from "../../assets/lottie/skills.json";
import SkillCard from "./skillCard";
import { frontend, backend, tools } from "@/assets/data/skills";
import { motion } from "framer-motion";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function Skills() {
  return (
    <div className="flex w-full mt-10 mb-20 flex-col">
      <div className="flex w-full sm:flex-row flex-col items-center">
        <div className="w-40 h-40">
          <Lottie animationData={skills} width={1} height={100} />
        </div>
        <span className="text-4xl text-white mb-6 select-none">My Toolbox</span>
      </div>
      <div className="w-full pl-8 flex-wrap lg:justify-around justify-center flex">
        <SkillCard motion={motion} data={frontend} name={"Frontend"} />
        <div className="flex flex-col">
          <SkillCard motion={motion} data={backend} name={"Backend"} />
          <SkillCard motion={motion} data={tools} name={"Tools"} />
        </div>
      </div>
    </div>
  );
}
