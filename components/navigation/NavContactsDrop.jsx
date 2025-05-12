import { contacts } from "@/assets/data/contacts";
import { useState } from "react";

export default function NavContactsDrop() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="flex w-full flex-wrap justify-center gap-x-5">
      {contacts.map((e, i) => (
        <a
          className={`group text-white flex items-center mt-4 py-2 px-2 gap-1.5 text-md lg:text-xl cursor-pointer transition-opacity duration-300 ${
            hoveredIndex !== null && hoveredIndex !== i
              ? "opacity-50"
              : "opacity-100"
          }`}
          key={i}
          href={e.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={e.text}
          onMouseEnter={() => setHoveredIndex(i)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <e.icon />
          <span>{e.text}</span>
        </a>
      ))}
    </div>
  );
}
