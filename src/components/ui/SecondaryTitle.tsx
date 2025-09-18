import type { ReactNode } from "react"

export default function Title({ children }: { children: ReactNode }) {
    return (
        <h3 className="font-serif text-center text-lime-700 dark:text-lime-400 text-xl font-medium">{children}</h3>
    )
}