import type { ButtonHTMLAttributes } from "react";

const tealButtonShadow = "0px 14px 30px -10px rgba(27, 161, 170, 0.55)";
const tealButtonDropShadow = "drop-shadow(0px 8px 16px rgba(27, 161, 170, 0.25))";

type TealButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function TealButton({
  children,
  className = "",
  style,
  type = "button",
  ...props
}: TealButtonProps) {
  return (
    <button
      type={type}
      className={`relative z-10 inline-flex items-center justify-center rounded-full bg-[#1BA1AA] text-white transition-colors duration-150 hover:bg-[#168D95] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FDBF3A]/80 focus-visible:ring-offset-2 focus-visible:ring-offset-white ${className}`}
      style={{
        boxShadow: tealButtonShadow,
        filter: tealButtonDropShadow,
        ...style,
      }}
      {...props}>
      {children}
    </button>
  );
}
