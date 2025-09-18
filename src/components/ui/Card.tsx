import type { ReactNode } from "react";

export default function Card({ children, className = "" }: { children: ReactNode, className?: string }) {
  return (
    <div className={`border border-lime-700 hover:border-lime-600 dark:border-lime-500 dark:hover:border-lime-300 card p-4 hover:shadow-xl shadow-lime-800/20 dark:shadow-lime-200/5 rounded ${className}`}>
      {children}
    </div>
  );
}
