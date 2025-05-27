import dynamic from "next/dynamic";
import skills from "../../assets/lottie/skills.json";
import SkillCard from "./skillCard";
import { frontend, backend, tools } from "@/assets/data/skills";
import { motion } from "framer-motion";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function Skills() {
  return (
    <div className="mt-10 mb-20 flex w-full flex-col">
      <div className="flex w-full flex-col items-center sm:flex-row">
        <div className="h-40 w-40">
          <Lottie animationData={skills} width={1} height={100} />
        </div>
        <span className="mb-6 text-4xl text-white select-none">My Toolbox</span>
      </div>
      <div className="flex w-full flex-wrap justify-center pl-8 lg:justify-around">
        <SkillCard motion={motion} data={frontend} name={"Frontend"} />
        <div className="flex flex-col">
          <SkillCard motion={motion} data={backend} name={"Backend"} />
          <SkillCard motion={motion} data={tools} name={"Tools"} />
        </div>
      </div>
    </div>
  );
}
