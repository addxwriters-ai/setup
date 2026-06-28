"use client";

/**
 * Content decoupling (Phase 5).
 *
 * public/content.json is the single, cPanel-editable source of all copy and
 * media paths. It is imported at build time to seed the static HTML (no blank
 * flash, SEO intact) AND re-fetched on the client at runtime — so editing the
 * deployed content.json via the cPanel File Manager updates the live site
 * without a rebuild.
 */
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { SiteContent, Segment } from "@/lib/content-types";

// public/ assets are served from the deploy base path (/setup on Pages, / on cPanel).
export const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Prefix a root-relative content path (e.g. /media/x.mp4) with the base path. */
export function asset(path: string): string {
  if (!path) return path;
  if (/^https?:\/\//.test(path)) return path;
  return `${BASE}${path.startsWith("/") ? "" : "/"}${path}`;
}

const ContentContext = createContext<SiteContent | null>(null);

export function ContentProvider({
  initial,
  children,
}: {
  initial: SiteContent;
  children: ReactNode;
}) {
  const [content, setContent] = useState<SiteContent>(initial);

  useEffect(() => {
    let active = true;
    fetch(asset("/content.json"), { cache: "no-store" })
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (active && data) setContent(data as SiteContent);
      })
      .catch(() => {
        /* keep build-time seed on failure */
      });
    return () => {
      active = false;
    };
  }, []);

  return (
    <ContentContext.Provider value={content}>
      {children}
    </ContentContext.Provider>
  );
}

export function useContent(): SiteContent {
  const ctx = useContext(ContentContext);
  if (!ctx) throw new Error("useContent must be used within <ContentProvider>");
  return ctx;
}

/** Render an array of styled segments (handles the metallic accent spans). */
export function Segments({ parts }: { parts: Segment[] }) {
  return (
    <>
      {parts.map((p, i) =>
        p.metallic ? (
          <span key={i} className="text-metallic">
            {p.text}
          </span>
        ) : (
          <span key={i}>{p.text}</span>
        ),
      )}
    </>
  );
}
