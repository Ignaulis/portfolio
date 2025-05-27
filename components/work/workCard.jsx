import { BsGithub } from "react-icons/bs";
import { RiLiveLine } from "react-icons/ri";
import { useState, useCallback, useEffect } from "react";
import InView from "../common/InView";

export default function WorkCard({ data, setOpenImages, clickedTag }) {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [hover, setHover] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const handleToggleDescription = useCallback(() => {
    setShowFullDescription((prev) => !prev);
  }, []);

  const renderDescription = showFullDescription
    ? data.description
    : `${data.description.slice(0, 280)}...`;

  // Image changer with pause on hover
  useEffect(() => {
    if (!data.images || data.images.length <= 1 || isHovered) return;

    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setImageIndex((prev) => (prev + 1) % data.images.length);
        setFade(true);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, [data.images, isHovered]);

  return (
    <InView>
      <div className="flex flex-wrap items-stretch justify-center gap-4 text-white lg:flex-nowrap">
        {/* Image */}
        <div className="w-[300px]">
          <div
            className={`relative h-[200px] w-[300px] transform cursor-pointer transition-all duration-300 ease-in-out select-none sm:h-full ${
              hover ? "scale-105 opacity-65" : ""
            } rounded-3xl active:scale-95`}
            onClick={setOpenImages}
            aria-label={`View ${data.name} images`}
            onMouseEnter={() => {
              setHover(true);
              setIsHovered(true);
            }}
            onMouseLeave={() => {
              setHover(false);
              setIsHovered(false);
            }}
          >
            {data.images?.[imageIndex] && (
              <img
                className={`h-full w-full rounded-3xl object-cover transition-opacity duration-1000 ${
                  fade ? "opacity-100" : "opacity-0"
                }`}
                src={data.images[imageIndex]}
                alt={data.name}
              />
            )}
          </div>
        </div>

        {/* Text Content */}
        <div className="work-card-custom relative flex w-full flex-col justify-between gap-6 overflow-hidden p-3">
          {/* Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 text-2xl">
            <span className="custom-gradient-half-whiter p-2 text-white/90">
              {data.name}
            </span>
            <div className="flex gap-10">
              <a
                href={data.git}
                target="_blank"
                rel="noopener noreferrer"
                className="flex transform items-center gap-2 text-xl transition-all duration-200 ease-in-out hover:scale-105 hover:text-orange-400"
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
                  className="flex transform items-center gap-2 text-xl transition-all duration-200 ease-in-out hover:scale-105 hover:text-orange-400"
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
            <p className="text-md leading-7 tracking-wider text-white/80">
              {renderDescription}
              <button
                onClick={handleToggleDescription}
                className="ml-4 cursor-pointer text-white/70 transition-colors duration-200 hover:text-white"
              >
                {showFullDescription ? "Show Less" : "Show More"}
              </button>
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {data.tags.map((tag) => (
              <div
                key={tag}
                className={`text-md rounded-2xl border border-white/20 bg-white/10 px-2 py-1 shadow-lg backdrop-blur-md transition-transform duration-200 select-none ${
                  clickedTag.includes(tag)
                    ? "scale-110 border-white/40 bg-white/40"
                    : ""
                }`}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    </InView>
  );
}
