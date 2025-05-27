import { approaches, expreience, education } from "@/assets/data/skills";
import Accordion from "./accordion";
import { useState } from "react";
import CertificateModal from "./certificatemodal";

export default function More() {
  const [certificateImage, setCertificateImage] = useState(null);

  return (
    <div className="mb-20 h-max w-full">
      <div className="flex flex-col select-none">
        <div className="custom-background-to-left flex h-max w-full justify-center rounded-t-4xl py-4 text-xl font-bold tracking-widest text-gray-300 uppercase">
          && more
        </div>
        <div className="custom-background flex h-max w-full flex-wrap justify-around px-4 py-8">
          {approaches.map((e, i) => (
            <Accordion key={i} data={e} />
          ))}
        </div>
        <div className="custom-background flex h-max w-full flex-wrap justify-around gap-3 py-8">
          {education.map((e, i) => (
            <Accordion
              key={i}
              ed
              data={e}
              dataO={e.ed}
              setCertificateImage={setCertificateImage}
            />
          ))}
        </div>
        <div className="custom-background flex h-max w-full flex-wrap justify-around gap-3 rounded-b-lg py-8">
          {expreience.map((e, i) => (
            <Accordion key={i} data={e} work />
          ))}
        </div>
      </div>
      <CertificateModal
        image={certificateImage}
        onClose={() => setCertificateImage(null)}
      />
    </div>
  );
}
