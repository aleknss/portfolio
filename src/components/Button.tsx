import type { ReactNode } from "react";

interface ButtonProps {
  label: string;
  href?: string;
  onClick?: () => void;
  icon?: ReactNode;
}

export function PrimaryButton({ label, icon, href }: ButtonProps) {
  return href ? (
    <a
      className=
        "flex justify-center items-center gap-2 text-sm px-3 py-2 cursor-pointer text-zinc-950 hover:text-zinc-700 bg-olive-300 rounded"
      href={href}
    >
      {icon}
      {label}
    </a>
  ) : (
    <button
      className=
        "flex justify-center items-center gap-2 text-sm px-3 py-2 cursor-pointer text-zinc-950 hover:text-zinc-700 bg-olive-300 rounded"
    >
      {icon}
      {label}
    </button>
  );
}

export function SecondaryButton({ label, icon, href, onClick }: ButtonProps) {
  return href ? (
    <a
      href={href}
      className="flex justify-center items-center gap-2 text-sm px-3 py-2 cursor-pointer text-forest-600 hover:text-forest-500"
    >
      {icon}
      {label}
    </a>
  ) : (
    <button
      onClick={onClick}
      className="flex justify-center items-center gap-2 text-sm px-3 py-2 cursor-pointer text-forest-600 hover:text-forest-500"
    >
      {icon}
      {label}
    </button>
  );
}
