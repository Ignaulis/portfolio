export default function Experience() {
  return (
    <div className="w-full h-max mt-20">
      <div className="flex flex-row bg-white/10 backdrop-blur-2xl rounded border-white/20 border-1">
        <div className="w-max flex justify-center text-white/80 text-2xl -rotate-90">
          Experience
        </div>
        <div className="w-max h-max flex gap-20">
          <div className="flex flex-col text-white/80">
            <span className="text-xl">Web Developer</span>
            <span className="text-lg">Freelancer</span>
          </div>
          <span className="text-white/80 text-xl">2025 - present</span>
        </div>
      </div>
    </div>
  );
}
