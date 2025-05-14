import { BsGithub } from "react-icons/bs";
import { RiLiveLine } from "react-icons/ri";
import { useState, useCallback } from "react";

export default function WorkCard({ data, setOpenImages, clickedTag }) {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [hover, setHover] = useState(false);

  // Use useCallback to memoize the function and prevent unnecessary re-creations
  const handleToggleDescription = useCallback(() => {
    setShowFullDescription((prev) => !prev);
  }, []);

  const renderDescription = showFullDescription
    ? data.description
    : `${data.description.slice(0, 280)}...`;

  return (
    <div className=" text-white flex lg:flex-nowrap flex-wrap items-start justify-center gap-4 ">
      {/* Image */}
      <div className="w-[500px]">
        <div
          className={`h-auto cursor-pointer select-none border border-white/40 transition-all duration-300 ease-in-out transform ${
            hover && "scale-105 opacity-65"
          } active:scale-95 rounded-3xl`}
          onClick={setOpenImages}
          aria-label={`View ${data.name} images`}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <img className="rounded-3xl" src={data.img} alt={data.name} />
        </div>
      </div>

      {/* Text Content */}
      <div className="relative overflow-hidden w-full flex flex-col gap-6 justify-between p-3 bg-gradient-to-r from-blue-200/10 via-sky-300/10 to-violet-500/10 backdrop-blur-md shadow-lg h-max border border-white/20 rounded">
        {/* Header */}
        <div className="text-2xl flex justify-between gap-4 flex-wrap  items-center">
          <span>{data.name}</span>
          <div className="flex gap-10">
            <a
              href={data.git}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl flex items-center gap-2 transition-all duration-200 ease-in-out hover:text-orange-400 transform hover:scale-105"
              aria-label={`View ${data.name} on Github`}
            >
              <BsGithub />
              Github
            </a>

            {data.live && (
              <a
                href={data.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl flex items-center gap-2 transition-all duration-200 ease-in-out hover:text-orange-400 transform hover:scale-105"
                aria-label={`View live version of ${data.name}`}
              >
                <RiLiveLine />
                Live
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <div>
          <p className="tracking-wider text-white text-md leading-7">
            {renderDescription}
            <button
              onClick={handleToggleDescription}
              className="ml-4 text-white/70 hover:text-white cursor-pointer transition-colors duration-200"
            >
              {showFullDescription ? "Show Less" : "Show More"}
            </button>
          </p>
        </div>

        {/* Tags */}
        <div className="flex gap-2 flex-wrap">
          {data.tags.map((tag) => (
            <div
              key={tag}
              className={`bg-white/10 backdrop-blur-md text-md shadow-lg border border-white/20 px-2 py-1 rounded-2xl select-none transition-transform duration-200 ${
                clickedTag.includes(tag)
                  ? "bg-white/40 border-white/40 scale-110"
                  : ""
              }`}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
