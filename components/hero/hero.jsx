import { useContext, useMemo } from "react";
import { MobileContext } from "@/context/mobileContext";
import { contacts } from "@/assets/data/contacts";
import HeroButton from "../ui/heroButton";
import Hr from "../ui/hr";
import { ScrollContext } from "@/context/scrollContext";

export default function Hero() {
  const { setShowForm } = useContext(MobileContext);
  const { homeRef } = useContext(ScrollContext);

  const upwork = useMemo(() => contacts.filter((e) => e.text === "UpWork"), []);

  return (
    <div
      className="flex flex-col scroll-mt-32 gap-8 mb-12 lg:mb-0 lg:ml-20 h-full lg:w-1/2 w-full justify-center lg:items-start items-center select-none"
      ref={homeRef}
    >
      <div className=" text-white uppercase font-extrabold text-6xl lg:text-7xl flex flex-col">
        <span>frontend</span>
        <span>developer</span>
      </div>

      <div className="lg:w-2/3 w-full flex justify-center">
        <Hr />
      </div>

      <div className="text-white tracking-wider lg:text-start text-center text-xl lg:text-2xl w-full lg:w-2/3">
        <span>
          I like to craft solid and scalable frontend products with great user
          experiences.
        </span>
      </div>

      <div className="flex lg:justify-start justify-center gap-5 w-full mt-6">
        {upwork.map(({ href, icon: Icon }, i) => (
          <HeroButton key={i} href={href} Icon={Icon}>
            hire me on
          </HeroButton>
        ))}

        <HeroButton onClick={() => setShowForm((pv) => !pv)}>
          send me
        </HeroButton>
      </div>
    </div>
  );
}
