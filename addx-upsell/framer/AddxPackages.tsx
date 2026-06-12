import { useRef } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { addPropertyControls, ControlType } from "framer"

/**
 * ADDX — Interactive Pricing Matrix (Framer code component)
 * Two-tier comparison with pointer-tracked 3D tilt and staggered reveal.
 * Tier copy, prices, features and CTA links are all property controls.
 *
 * @framerSupportedLayoutWidth any
 * @framerSupportedLayoutHeight auto
 */

function TiltCard({ children, flagship, accent, panel, edge }: any) {
    const ref = useRef<HTMLDivElement>(null)
    const rx = useSpring(useMotionValue(0), { stiffness: 220, damping: 22 })
    const ry = useSpring(useMotionValue(0), { stiffness: 220, damping: 22 })

    return (
        <motion.div
            ref={ref}
            onPointerMove={(e) => {
                const r = ref.current!.getBoundingClientRect()
                rx.set(((e.clientY - r.top) / r.height - 0.5) * -4)
                ry.set(((e.clientX - r.left) / r.width - 0.5) * 4)
            }}
            onPointerLeave={() => {
                rx.set(0)
                ry.set(0)
            }}
            initial={{ y: 90, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                background: panel,
                padding: 36,
                border: flagship ? `1px solid ${accent}99` : `1px solid ${edge}`,
                boxShadow: flagship ? `0 0 80px -20px ${accent}40` : "none",
                rotateX: rx,
                rotateY: ry,
                transformPerspective: 900,
                willChange: "transform",
            }}
        >
            {children}
        </motion.div>
    )
}

export default function AddxPackages(props: any) {
    const {
        background,
        panel,
        accent,
        text,
        muted,
        edge,
        displayFont,
        bodyFont,
        headingA,
        headingB,
        tier1Name,
        tier1Label,
        tier1Price,
        tier1PriceNote,
        tier1Hook,
        tier1Features,
        tier1Cta,
        tier1Link,
        tier2Name,
        tier2Label,
        tier2Price,
        tier2PriceNote,
        tier2Hook,
        tier2Features,
        tier2Cta,
        tier2Link,
        flagshipBadge,
        style,
    } = props

    const tiers = [
        {
            name: tier1Name, label: tier1Label, price: tier1Price, priceNote: tier1PriceNote,
            hook: tier1Hook, features: tier1Features, cta: tier1Cta, link: tier1Link, flagship: false,
        },
        {
            name: tier2Name, label: tier2Label, price: tier2Price, priceNote: tier2PriceNote,
            hook: tier2Hook, features: tier2Features, cta: tier2Cta, link: tier2Link, flagship: true,
        },
    ]

    return (
        <div
            style={{
                position: "relative",
                background,
                color: text,
                fontFamily: bodyFont,
                padding: "128px 24px",
                ...style,
            }}
        >
            <div style={{ maxWidth: 1280, margin: "0 auto" }}>
                <p
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 16,
                        margin: "0 0 24px",
                        fontSize: 11,
                        letterSpacing: "0.3em",
                        textTransform: "uppercase",
                        color: accent,
                    }}
                >
                    <span style={{ width: 48, height: 1, background: accent }} />
                    The Packages
                </p>

                <h2
                    style={{
                        margin: 0,
                        fontFamily: displayFont,
                        fontWeight: 700,
                        textTransform: "uppercase",
                        fontSize: "clamp(2.2rem, 5.5vw, 4.8rem)",
                        lineHeight: 1,
                        letterSpacing: "-0.045em",
                    }}
                >
                    {[headingA, headingB].map((line, i) => (
                        <span key={i} style={{ display: "block", overflow: "hidden" }}>
                            <motion.span
                                initial={{ y: "110%" }}
                                whileInView={{ y: "0%" }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.9, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                                style={{ display: "block", color: i === 1 ? accent : text }}
                            >
                                {line}
                            </motion.span>
                        </span>
                    ))}
                </h2>

                <div
                    style={{
                        marginTop: 64,
                        display: "grid",
                        gap: 24,
                        gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
                    }}
                >
                    {tiers.map((tier) => (
                        <TiltCard key={tier.name} flagship={tier.flagship} accent={accent} panel={panel} edge={edge}>
                            {tier.flagship && (
                                <span
                                    style={{
                                        position: "absolute",
                                        top: -12,
                                        right: 32,
                                        background: accent,
                                        color: "#000",
                                        padding: "4px 12px",
                                        fontSize: 10,
                                        fontWeight: 700,
                                        letterSpacing: "0.2em",
                                        textTransform: "uppercase",
                                    }}
                                >
                                    {flagshipBadge}
                                </span>
                            )}

                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 16 }}>
                                <h3 style={{ margin: 0, fontFamily: displayFont, fontSize: 30, fontWeight: 700, letterSpacing: "-0.045em" }}>
                                    {tier.name}
                                </h3>
                                <span style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: muted }}>
                                    {tier.label}
                                </span>
                            </div>

                            <div style={{ marginTop: 32, display: "flex", alignItems: "baseline", gap: 12 }}>
                                <span
                                    style={{
                                        fontFamily: displayFont,
                                        fontSize: 60,
                                        fontWeight: 700,
                                        letterSpacing: "-0.045em",
                                        color: tier.flagship ? accent : text,
                                    }}
                                >
                                    {tier.price}
                                </span>
                                <span style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: muted }}>
                                    {tier.priceNote}
                                </span>
                            </div>

                            <p style={{ marginTop: 12, fontSize: 18 }}>{tier.hook}</p>

                            <ul
                                style={{
                                    margin: "32px 0 0",
                                    padding: "32px 0 0",
                                    borderTop: `1px solid ${edge}`,
                                    listStyle: "none",
                                    flex: 1,
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 16,
                                }}
                            >
                                {tier.features.map((f: string) => (
                                    <li key={f} style={{ display: "flex", gap: 12, fontSize: 14, lineHeight: 1.6, color: muted }}>
                                        <span style={{ color: accent }}>▸</span>
                                        {f}
                                    </li>
                                ))}
                            </ul>

                            <a
                                href={tier.link}
                                style={{
                                    marginTop: 40,
                                    display: "block",
                                    padding: "16px 0",
                                    textAlign: "center",
                                    fontFamily: displayFont,
                                    fontSize: 14,
                                    fontWeight: 700,
                                    textTransform: "uppercase",
                                    letterSpacing: "0.05em",
                                    textDecoration: "none",
                                    background: tier.flagship ? accent : "transparent",
                                    color: tier.flagship ? "#000" : text,
                                    border: tier.flagship ? "none" : `1px solid ${edge}`,
                                }}
                            >
                                {tier.cta}
                            </a>
                        </TiltCard>
                    ))}
                </div>
            </div>
        </div>
    )
}

AddxPackages.defaultProps = {
    background: "#050505",
    panel: "#0B0B0C",
    accent: "#CCFF00",
    text: "#F4F4F2",
    muted: "#8B8B88",
    edge: "rgba(255,255,255,0.08)",
    displayFont: "Space Grotesk, sans-serif",
    bodyFont: "Inter, sans-serif",
    headingA: "Two ways",
    headingB: "to go kinetic.",
    tier1Name: "STARTER",
    tier1Label: "AI + Human Polished",
    tier1Price: "$1,500",
    tier1PriceNote: "USD · fixed",
    tier1Hook: "Speed meets elite refinement.",
    tier1Features: [
        "Rapid structural AI scaffolding",
        "Custom Figma styling curation",
        "Standard interactive scroll-animations",
        "Lightweight Lottie / Rive micro-interactions",
        "Fully optimized for lightning-fast deployment",
    ],
    tier1Cta: "Deploy Starter Build",
    tier1Link: "https://addxstudio.com",
    tier2Name: "ADVANCED",
    tier2Label: "Custom Detail",
    tier2Price: "Custom",
    tier2PriceNote: "Contact for custom pricing",
    tier2Hook: "Completely bespoke cinematic digital architecture.",
    tier2Features: [
        "100% custom-tailored Figma wireframing from scratch",
        "Intricate multi-layered GSAP scroll timelines",
        "Custom Higgsfield 3D background rendering",
        "WebGL particle interactions",
        "Advanced interactive product state-machines",
        "Premium custom performance optimization",
    ],
    tier2Cta: "Lock In Advanced Build",
    tier2Link: "https://addxstudio.com",
    flagshipBadge: "High-Ticket · Flagship",
}

addPropertyControls(AddxPackages, {
    background: { type: ControlType.Color, title: "Background" },
    panel: { type: ControlType.Color, title: "Panel" },
    accent: { type: ControlType.Color, title: "Accent" },
    text: { type: ControlType.Color, title: "Text" },
    muted: { type: ControlType.Color, title: "Muted" },
    edge: { type: ControlType.Color, title: "Border" },
    displayFont: { type: ControlType.String, title: "Display font" },
    bodyFont: { type: ControlType.String, title: "Body font" },
    headingA: { type: ControlType.String, title: "Heading line 1" },
    headingB: { type: ControlType.String, title: "Heading line 2" },
    tier1Name: { type: ControlType.String, title: "T1 name" },
    tier1Label: { type: ControlType.String, title: "T1 label" },
    tier1Price: { type: ControlType.String, title: "T1 price" },
    tier1PriceNote: { type: ControlType.String, title: "T1 price note" },
    tier1Hook: { type: ControlType.String, title: "T1 hook" },
    tier1Features: {
        type: ControlType.Array,
        title: "T1 features",
        control: { type: ControlType.String },
    },
    tier1Cta: { type: ControlType.String, title: "T1 CTA" },
    tier1Link: { type: ControlType.Link, title: "T1 link" },
    tier2Name: { type: ControlType.String, title: "T2 name" },
    tier2Label: { type: ControlType.String, title: "T2 label" },
    tier2Price: { type: ControlType.String, title: "T2 price" },
    tier2PriceNote: { type: ControlType.String, title: "T2 price note" },
    tier2Hook: { type: ControlType.String, title: "T2 hook" },
    tier2Features: {
        type: ControlType.Array,
        title: "T2 features",
        control: { type: ControlType.String },
    },
    tier2Cta: { type: ControlType.String, title: "T2 CTA" },
    tier2Link: { type: ControlType.Link, title: "T2 link" },
    flagshipBadge: { type: ControlType.String, title: "Flagship badge" },
})
