import type { ReactNode } from "react";

/**
 * Shell container — enforces the global max-width and gutter rhythm.
 * Layout primitive only; no motion or interaction.
 */
export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`mx-auto w-full max-w-[88rem] px-6 sm:px-8 lg:px-12 ${className}`}
    >
      {children}
    </div>
  );
}
