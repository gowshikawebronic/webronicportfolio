"use client";

type NavButtonProps = {
  label: string;
  id: string;
  isActive?: boolean;
  onClick?: (id: string) => void;
  className?: string;
};

export default function NavButton({
  label,
  id,
  isActive = false,
  onClick,
  className = "",
}: NavButtonProps) {
  return (
    <button
      onClick={() => onClick?.(id)}
      className={`
        text-[18px] font-semibold cursor-pointer transition-colors duration-300
        ${isActive ? "text-[#37c659]" : "text-gray-300 hover:text-white"}
        ${className}
      `}
    >
      {label}
    </button>
  );
}
