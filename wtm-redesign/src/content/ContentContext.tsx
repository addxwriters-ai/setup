import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

export interface Product {
  index: string
  title: string
  context: string
  href: string
  video: string
}

export interface Project {
  index: string
  name: string
  scale: string
  location: string
  media: string
}

export interface SiteContent {
  nav: { links: string[]; cta: string }
  hero: {
    eyebrow: string
    headlineLine1: string
    headlineLine2: string
    subcopy: string
    ctaPrimary: string
    ctaTag: string
    videoLabel: string
  }
  products: {
    eyebrow: string
    headingLine1: string
    headingLine2: string
    intro: string
    items: Product[]
  }
  projects: {
    eyebrow: string
    heading: string
    items: Project[]
  }
  clients: {
    eyebrow: string
    heading: string
    intro: string
    partners: string[]
  }
  footer: {
    headingTop: string
    headingAccent: string
    copy: string
    email: string
    legal: string
    domain: string
  }
}

const ContentContext = createContext<SiteContent | null>(null)

// Content is fetched at runtime from the static /content.json copied verbatim
// into the build output — editable on the server without a rebuild.
export function ContentProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState<SiteContent | null>(null)

  useEffect(() => {
    const url = `${import.meta.env.BASE_URL}content.json`
    fetch(url, { cache: 'no-cache' })
      .then((res) => {
        if (!res.ok) throw new Error(`content.json ${res.status}`)
        return res.json()
      })
      .then((data: SiteContent) => setContent(data))
      .catch((err) => console.error('Failed to load content.json:', err))
  }, [])

  // Dark structural hold until hydrated — matches body bg, so no white flash.
  if (!content) return <div className="min-h-screen bg-industrial" aria-busy="true" />

  return <ContentContext.Provider value={content}>{children}</ContentContext.Provider>
}

export function useContent(): SiteContent {
  const ctx = useContext(ContentContext)
  if (!ctx) throw new Error('useContent must be used within a ContentProvider')
  return ctx
}
