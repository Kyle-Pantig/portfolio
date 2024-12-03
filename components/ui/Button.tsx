"use client";
const Button = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title?: string;
  icon?: React.ReactNode;
  position?: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <button
      onClick={handleClick}
      className={`inline-flex h-12 animate-shimmer items-center justify-center md:cursor-pointer 
      rounded-full border border-white-100 bg-[linear-gradient(110deg,#191919,45%,#C1C2D3,55%,#191919)] 
      bg-[length:200%_100%] px-7 font-medium text-slate-400 transition-colors focus:outline-none md:w-60 md:mt-10
      ${otherClasses}`}
    >
      {position === "left" && icon}
      {title}
      {position === "right" && icon}
    </button>
  );
};

export default Button;
