import { RiMailSendLine } from "react-icons/ri";

const HeroButton = ({ onClick, href, children, Icon }) => {
  const baseClasses =
    "uppercase text-white text-xl bg-white/10 backdrop-blur-md shadow-lg border border-white/20 p-3 px-5 rounded-3xl cursor-pointer flex gap-2 items-center transition-colors duration-300";
  const hoverClasses = "hover:bg-white/40";
  const activeClasses = "active:bg-white/20";

  const combinedClasses = `${baseClasses} ${hoverClasses} ${activeClasses}`;

  const buttonProps = {
    className: combinedClasses,
    onClick: onClick,
  };

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={combinedClasses}
      >
        {children} {Icon && <Icon />}
      </a>
    );
  }

  return (
    <button {...buttonProps}>
      {children} <RiMailSendLine />
    </button>
  );
};

export default HeroButton;
