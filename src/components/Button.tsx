import type { ReactNode } from "react";

interface ButtonProps {
  label: string;
  href?: string;
  onClick?: () => void;
  icon?: ReactNode;
  header?: boolean;
}

export function PrimaryButton({ label, icon, href }: ButtonProps) {
  return href ? (
    <a
      className=
        "flex justify-center items-center gap-2 text-sm px-3 py-2 cursor-pointer text-white bg-lime-700 hover:bg-lime-600 rounded transition-colors duration-300 ease-in-out"
      href={href}
    >
      {icon}
      {label}
    </a>
  ) : (
    <button
      className=
        "flex justify-center items-center gap-2 text-sm px-3 py-2 cursor-pointer text-white bg-lime-700 hover:bg-lime-600 rounded transition-colors duration-300 ease-in-out"
    >
      {icon}
      {label}
    </button>
  );
}

export function SecondaryButton({ label, icon, href, onClick, header = false }: ButtonProps) {
  return href ? (
    <a
      href={href} 
      className="flex justify-center items-center gap-2 text-sm px-3 py-2 cursor-pointer text-lime-700 hover:text-lime-600 transition-colors duration-300 ease-in-out"
    >
      {icon}
      <span className={`${header ? "hidden md:block" : ""}`}>{label}</span>
    </a>
  ) : (
    <button
      onClick={onClick}
      className="flex justify-center items-center gap-2 text-sm px-3 py-2 cursor-pointer text-lime-700 hover:text-lime-600 transition-colors duration-300 ease-in-out"
    >
      {icon}
      <span className={`${header ? "hidden lg:block" : ""}`}>{label}</span>
    </button>
  );
}
