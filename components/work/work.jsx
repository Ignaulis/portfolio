import { useContext, useMemo, useState, useCallback } from "react";
import dynamic from "next/dynamic";
import { MobileContext } from "@/context/mobileContext";
import { motion } from "framer-motion"; // gali būti lazy-load’inamas, jei dar nori labiau optimizuot

// ⚠️ Dynamic (lazy) importai
const WorkFilter = dynamic(() => import("./workFilter"));
const WorkCard = dynamic(() => import("./workCard"));
const WorkImages = dynamic(() => import("./workImages"));

// Duomenys
import { MyWork } from "@/assets/data/myWork";

export default function Work() {
  const { isMobile } = useContext(MobileContext);
  const [clickedTag, setClickedTag] = useState([]);
  const [openImages, setOpenImages] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [direction, setDirection] = useState(0);
  const itemsPerPage = 3;

  const filteredWork = useMemo(() => {
    if (clickedTag.length === 0) return MyWork;
    return MyWork.filter((work) =>
      work.tags.some((tag) => clickedTag.includes(tag))
    );
  }, [clickedTag]);

  const totalPages = Math.ceil(filteredWork.length / itemsPerPage);

  const paginatedContent = useMemo(() => {
    return filteredWork.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
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
  };

  return (
    <div
      className={`flex flex-col gap-10 ${
        isMobile ? "mx-2 items-center" : "mx-20"
      } h-max overflow-hidden`}
    >
      <div className="text-7xl w-max italic mb-6 text-white font-medium select-none">
        <span>My Work</span>
      </div>

      <div className="flex items-start flex-wrap lg:flex-nowrap w-full h-max gap-5">
        <span className="text-white text-2xl">Filter:</span>
        <WorkFilter clickedTag={clickedTag} setClickedTag={setClickedTag} />
      </div>

      <div className="relative w-full min-h-[400px]">
        <motion.div
          key={currentPage}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-8 w-full"
        >
          {paginatedContent.map((data, i) => {
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
          })}
        </motion.div>
      </div>

      <motion.div
        layout
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="self-center flex gap-4 mt-5"
      >
        {Array.from({ length: totalPages }, (_, i) => {
          const page = i + 1;
          const isActive = currentPage === page;

          return (
            <motion.button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`text-xl text-white px-4 py-2 rounded-lg border cursor-pointer ${
                isActive
                  ? "bg-white/40 border-white/70"
                  : "border-white/70 hover:bg-white/90 hover:text-black"
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
