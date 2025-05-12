import { Tags } from "@/assets/data/myWork";
import { useState } from "react";

export default function WorkFilter({ clickedTag, setClickedTag }) {
  const [more, setMore] = useState(false);

  const handleClick = (tag) => {
    setClickedTag((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const displayMore = more ? Tags : Tags.slice(0, 5);

  return (
    <div className="flex gap-6 text-sm w-full text-white">
      <div className="flex items-end gap-2 flex-wrap">
        {displayMore.map((tag) => (
          <button
            key={tag}
            className={`cursor-pointer bg-white/10 backdrop-blur-md shadow-lg border border-white/20 p-2 px-4 rounded-3xl transition-all duration-200 ease-in-out hover:opacity-75 ${
              clickedTag.includes(tag) ? "bg-white/40" : "bg-white/10"
            }`}
            onClick={() => handleClick(tag)}
            aria-label={`Filter by tag: ${tag}`}
          >
            {tag}
          </button>
        ))}
        {!more && <span className="text-4xl select-none">...</span>}

        <div className="flex flex-col">
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
