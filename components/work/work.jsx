import { useContext, useMemo, useState, useCallback } from "react";
import dynamic from "next/dynamic";
import { MobileContext } from "@/context/mobileContext";
import { motion } from "framer-motion"; // gali būti lazy-load’inamas, jei dar nori labiau optimizuot
import Astronout from "../../assets/lottie/footer.json";

// ⚠️ Dynamic (lazy) importai
const WorkFilter = dynamic(() => import("./workFilter"));
const WorkCard = dynamic(() => import("./workCard"));
const WorkImages = dynamic(() => import("./workImages"));
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

// Duomenys
import { MyWork } from "@/assets/data/myWork";
import { ScrollContext } from "@/context/scrollContext";
import InView from "../common/InView";

export default function Work() {
  const { isMobile } = useContext(MobileContext);
  const { workRef, buttonRef } = useContext(ScrollContext);
  const [clickedTag, setClickedTag] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [direction, setDirection] = useState(0);
  const [openImages, setOpenImages] = useState(null);
  const itemsPerPage = 3;

  const filteredWork = useMemo(() => {
    if (clickedTag.length === 0) return MyWork;
    return MyWork.filter((work) =>
      clickedTag.every((tag) => work.tags.includes(tag)),
    );
  }, [clickedTag]);

  const totalPages = Math.ceil(filteredWork.length / itemsPerPage);

  const paginatedContent = useMemo(() => {
    return filteredWork.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage,
    );
  }, [filteredWork, currentPage]);

  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
      position: "absolute",
    }),
    center: {
      x: 0,
      opacity: 1,
      position: "relative",
    },
    exit: (dir) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
      position: "absolute",
    }),
  };

  const handleImagesToggle = useCallback((index) => {
    setOpenImages((prev) => (prev === index ? null : index));
  }, []);

  const handlePageChange = (page) => {
    setDirection(page > currentPage ? 1 : -1);
    setCurrentPage(page);
    buttonRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className={`mb-10 flex scroll-mt-40 flex-col gap-10 ${
        isMobile ? "items-center px-2" : "px-20"
      } h-max overflow-hidden`}
      ref={workRef}
    >
      <InView>
        <div className="flex w-full flex-col items-center justify-center select-none lg:w-max lg:flex-row">
          <div className="h-40 w-40">
            <Lottie animationData={Astronout} loop={true} />
          </div>
          <div className="gradient-text text-4xl font-medium tracking-widest text-transparent italic">
            {`{...`}
            <span className="text-5xl">My Work</span>
            {` }`}
          </div>
        </div>
      </InView>

      <InView>
        <div className="flex h-max w-full flex-wrap items-start gap-5 lg:flex-nowrap">
          <WorkFilter clickedTag={clickedTag} setClickedTag={setClickedTag} />
        </div>
      </InView>

      <div className="relative min-h-[400px] w-full">
        <motion.div
          key={currentPage}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.5 }}
          className="flex w-full flex-col gap-8"
        >
          {paginatedContent.length === 0 ? (
            <div className="mt-20 text-center text-3xl text-white italic opacity-70 select-none">
              No work found with selected tags.
            </div>
          ) : (
            paginatedContent.map((data, i) => {
              const realIndex = (currentPage - 1) * itemsPerPage + i;
              return (
                <div key={realIndex}>
                  <WorkCard
                    setOpenImages={() => handleImagesToggle(realIndex)}
                    data={data}
                    clickedTag={clickedTag}
                  />
                  <WorkImages
                    openImages={openImages === realIndex}
                    setOpenImages={() => setOpenImages(null)}
                    images={data.images}
                  />
                </div>
              );
            })
          )}
        </motion.div>
      </div>

      <motion.div
        layout
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="mt-5 flex gap-4 self-center pb-3"
      >
        {Array.from({ length: totalPages }, (_, i) => {
          const page = i + 1;
          const isActive = currentPage === page;

          return (
            <motion.button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`cursor-pointer rounded-lg border px-3 py-1 text-xl text-white ${
                isActive
                  ? "border-white/70 bg-white/25"
                  : "border-white/70 hover:bg-white/70 hover:text-black"
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {page}
            </motion.button>
          );
        })}
      </motion.div>
    </div>
  );
}
