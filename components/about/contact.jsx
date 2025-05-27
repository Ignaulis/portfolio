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
    <div className="flex flex-col items-center gap-6">
      <div className="flex items-center gap-4">
        <div className="flex flex-wrap-reverse items-center justify-center">
          <div className="custom-background-to-left flex flex-col gap-2 rounded-xl px-4 pt-2 text-sm text-white select-none sm:text-xl">
            <span>Interested in working together?</span>
            Let’s connect and build something great.
            <span></span>
          </div>
          <div className="h-40 w-40">
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
            className="custom-background flex transform cursor-pointer items-center gap-2 rounded-2xl p-3 text-xl tracking-wide text-white transition-all duration-400 hover:scale-120 active:scale-110 sm:text-2xl"
          >
            <Icon />
          </a>
        ))}
      </div>
    </div>
  );
}
