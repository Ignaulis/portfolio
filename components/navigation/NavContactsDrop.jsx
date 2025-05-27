import { contacts } from "@/assets/data/contacts";
import { useState } from "react";

export default function NavContactsDrop() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="flex w-full flex-wrap justify-center gap-x-5">
      {contacts.map((e, i) => (
        <a
          className={`group text-md mt-4 flex cursor-pointer items-center gap-1.5 px-2 py-2 text-white transition-opacity duration-300 lg:text-xl ${
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
