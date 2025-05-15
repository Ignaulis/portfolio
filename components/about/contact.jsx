import dynamic from "next/dynamic";
import astronout from "../../assets/lottie/astronaut-with-space-shuttle.json";
import { contacts, contactSend } from "@/assets/data/contacts";
import { useContext } from "react";
import { MobileContext } from "@/context/mobileContext";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const fullContacts = [...contacts, ...contactSend];

export default function Contact() {
  const { setShowForm } = useContext(MobileContext);

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="flex items-center gap-4">
        <div className="flex flex-wrap-reverse justify-center items-center">
          <div className=" text-white text-sm sm:text-xl gap-2 rounded-xl flex select-none flex-col custom-background-to-left px-4 pt-2">
            <span>Interested in working together?</span>
            Let’s connect and build something great.
            <span></span>
          </div>
          <div className="w-40 h-40">
            <Lottie animationData={astronout} loop={true} />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {fullContacts.map(({ icon: Icon, href, text, onclick }) => (
          <a
            key={text}
            href={href && href}
            target="_blank"
            onClick={onclick ? () => onclick(setShowForm) : undefined}
            rel="noopener noreferrer"
            className="flex text-white cursor-pointer items-center gap-2 text-2xl sm:text-4xl tracking-wide custom-background p-3 rounded-2xl transition-all transform duration-400 hover:scale-110 active:scale-105"
          >
            <Icon />
          </a>
        ))}
      </div>
    </div>
  );
}
