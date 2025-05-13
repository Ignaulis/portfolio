import { Tags } from "@/assets/data/myWork";
import { useState } from "react";

export default function WorkFilter({ clickedTag, setClickedTag }) {
  const [more, setMore] = useState(false);

  const handleClick = (tag) => {
    setClickedTag((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const displayMore = more ? Tags : Tags.slice(0, 6);

  return (
    <div className="flex gap-6 text-sm w-full text-white">
      <div className="flex items-end gap-2 flex-wrap">
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
              className={`cursor-pointer sm:text-lg text-md bg-white/10 backdrop-blur-md shadow-lg border border-white/20 p-2 px-4 rounded-3xl transition-all duration-200 ease-in-out hover:opacity-75 ${
                clickedTag.includes(tag) ? "bg-white/40" : "bg-white/10"
              } ${opacityClass}`}
              onClick={() => handleClick(tag)}
              aria-label={`Filter by tag: ${tag}`}
            >
              {tag}
            </button>
          );
        })}

        <div className="flex ml-4 flex-col">
          <button
            onClick={() => setClickedTag([])}
            className={`${
              clickedTag.length > 0
                ? "text-white cursor-pointer transition-all duration-200 ease-in-out transform hover:scale-105"
                : "text-white/50 cursor-not-allowed"
            }`}
            aria-label="Remove all filters"
          >
            Remove filter
          </button>
          <button
            onClick={() => setMore((prev) => !prev)}
            className="text-white cursor-pointer transition-all duration-200 ease-in-out transform hover:scale-105"
            aria-label={more ? "Show less tags" : "Show more tags"}
          >
            {more ? "Show less" : "Show more"}
          </button>
        </div>
      </div>
    </div>
  );
}
