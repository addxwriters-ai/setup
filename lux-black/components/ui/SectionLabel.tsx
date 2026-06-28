/**
 * Small uppercase eyebrow used above section headings.
 * Establishes typographic hierarchy; static only.
 */
export function SectionLabel({
  index,
  children,
}: {
  index?: string;
  children: React.ReactNode;
}) {
  return (
    <p className="flex items-center gap-3 font-sans text-xs uppercase tracking-[0.32em] text-steel">
      {index ? <span className="text-chrome">{index}</span> : null}
      <span className="h-px w-8 bg-hairline-strong" aria-hidden />
      <span>{children}</span>
    </p>
  );
}
