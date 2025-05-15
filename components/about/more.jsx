import { approaches, expreience, education } from "@/assets/data/skills";
import Accordion from "./accordion";

export default function More() {
  return (
    <div className="w-full h-max mb-20">
      <div className="flex flex-col select-none">
        <div className="w-full h-max text-xl uppercase rounded-t-4xl text-gray-300 py-4 flex justify-center custom-background-to-left font-bold tracking-widest">
          && more
        </div>
        <div className="w-full h-max flex-wrap px-4 flex justify-around custom-background py-8">
          {approaches.map((e, i) => (
            <Accordion key={i} data={e} />
          ))}
        </div>
        <div className="w-full h-max flex-wrap gap-3 flex justify-around custom-background py-8">
          {education.map((e, i) => (
            <Accordion key={i} ed data={e} dataO={e.ed} />
          ))}
        </div>
        <div className="w-full h-max flex-wrap gap-3 rounded-b-lg flex justify-around py-8 custom-background">
          {expreience.map((e, i) => (
            <Accordion key={i} data={e} work />
          ))}
        </div>
      </div>
    </div>
  );
}
