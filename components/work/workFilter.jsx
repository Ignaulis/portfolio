import { Tags } from "@/assets/data/myWork";
import { ScrollContext } from "@/context/scrollContext";
import { useContext, useState } from "react";

export default function WorkFilter({ clickedTag, setClickedTag }) {
  const [more, setMore] = useState(false);

  const { buttonRef } = useContext(ScrollContext);

  const handleClick = (tag) => {
    setClickedTag((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
  };

  const displayMore = more ? Tags : Tags.slice(0, 6);

  return (
    <div
      ref={buttonRef}
      className="flex w-full scroll-mt-30 gap-6 text-sm text-white"
    >
      <div className="flex w-full flex-wrap items-end justify-center gap-2 sm:justify-start">
        {displayMore.map((tag, index) => {
          let opacityClass = "";
          if (!more) {
            const dimLevel = displayMore.length - index;
            if (dimLevel <= 5) {
              const opacityMap = {
                1: "opacity-50",
                2: "opacity-60",
                3: "opacity-70",
                4: "opacity-80",
                5: "opacity-90",
              };
              opacityClass = opacityMap[dimLevel] || "";
            }
          }

          return (
            <button
              key={tag}
              className={`text-md cursor-pointer rounded-3xl border border-white/20 bg-white/10 p-2 px-4 shadow-lg backdrop-blur-md transition-all duration-200 ease-in-out hover:opacity-75 ${
                clickedTag.includes(tag) ? "bg-white/40" : "bg-white/10"
              } ${opacityClass}`}
              onClick={() => handleClick(tag)}
              aria-label={`Filter by tag: ${tag}`}
            >
              {tag}
            </button>
          );
        })}

        <div className="ml-4 flex flex-col">
          <button
            onClick={() => setClickedTag([])}
            className={`${
              clickedTag.length > 0
                ? "transform cursor-pointer text-white transition-all duration-200 ease-in-out hover:scale-105"
                : "cursor-not-allowed text-white/50"
            }`}
            aria-label="Remove all filters"
          >
            Remove filter
          </button>
          <button
            onClick={() => setMore((prev) => !prev)}
            className="transform cursor-pointer text-white transition-all duration-200 ease-in-out hover:scale-105"
            aria-label={more ? "Show less tags" : "Show more tags"}
          >
            {more ? "Show less" : "Show more"}
          </button>
        </div>
      </div>
    </div>
  );
}
