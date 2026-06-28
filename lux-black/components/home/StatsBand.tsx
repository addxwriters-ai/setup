import { Container } from "@/components/layout/Container";
import { STATS } from "@/lib/content";

/**
 * Credibility stat band. Static grid; no counters or animation in Round 1.
 */
export function StatsBand() {
  return (
    <section className="border-b border-hairline bg-true-black">
      <Container className="grid grid-cols-2 gap-px lg:grid-cols-4">
        {STATS.map((stat) => (
          <div key={stat.label} className="px-2 py-16 text-center">
            <p className="font-serif text-5xl tracking-[-0.02em] text-metallic lg:text-6xl">
              {stat.value}
            </p>
            <p className="mt-4 font-sans text-xs uppercase tracking-[0.18em] text-ash">
              {stat.label}
            </p>
          </div>
        ))}
      </Container>
    </section>
  );
}
