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
      className="flex justify-center items-center gap-2 text-sm px-3 py-2 cursor-pointer text-white bg-lime-700 hover:bg-lime-600 dark:bg-lime-500 dark:hover:bg-lime-400 dark:text-stone-900 rounded transition-colors duration-300 ease-in-out"
      href={href}
    >
      {icon}
      {label}
    </a>
  ) : (
    <button className="flex justify-center items-center gap-2 text-sm px-3 py-2 cursor-pointer text-white bg-lime-700 hover:bg-lime-600 dark:bg-lime-500 dark:hover:bg-lime-400 rounded transition-colors duration-300 ease-in-out">
      {icon}
      {label}
    </button>
  );
}

export function SecondaryButton({
  label,
  icon,
  href,
  onClick,
  header = false,
}: ButtonProps) {
  return href ? (
    <a
      href={href}
      className="flex justify-center items-center gap-2 text-sm px-3 py-2 cursor-pointer text-lime-700 hover:text-lime-600 dark:text-lime-500 dark:hover:text-lime-300 transition-colors duration-300 ease-in-out"
    >
      {icon}
      <span className={`${header ? "hidden md:block" : ""}`}>{label}</span>
    </a>
  ) : (
    <button
      onClick={onClick}
      className="flex justify-center items-center gap-2 text-sm px-3 py-2 cursor-pointer text-lime-700 hover:text-lime-600 dark:text-lime-500 dark:hover:text-lime-300 transition-colors duration-300 ease-in-out"
    >
      {icon}
      <span className={`${header ? "hidden lg:block" : ""}`}>{label}</span>
    </button>
  );
}
