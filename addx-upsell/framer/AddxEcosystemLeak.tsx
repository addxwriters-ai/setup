import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { addPropertyControls, ControlType } from "framer"

/**
 * ADDX — The Ecosystem Leak (Framer code component)
 * Scroll-scrubbed continuity diagram. Uses position:sticky instead of a JS pin,
 * so it composes cleanly with Framer's own scroll. Give the component free
 * height on the canvas — it sizes itself (scrollLength × 100vh).
 *
 * Beats: signal travels → hits flat template, line dies red → destination
 * rebuilt as an ADDX page, signal flows through.
 *
 * @framerSupportedLayoutWidth any
 * @framerSupportedLayoutHeight any
 */
export default function AddxEcosystemLeak(props: any) {
    const {
        background,
        panel,
        accent,
        danger,
        text,
        muted,
        edge,
        displayFont,
        bodyFont,
        copyA,
        copyB,
        scrollLength,
        style,
    } = props

    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress: p } = useScroll({
        target: ref,
        offset: ["start start", "end end"],
    })

    const headY = useTransform(p, [0, 0.08], ["110%", "0%"])
    const dash = useTransform(p, [0.08, 0.28, 0.55, 0.78], [600, 300, 300, 0])
    const lineColor = useTransform(p, [0.28, 0.34, 0.55, 0.62], [accent, danger, danger, accent])
    const cardVideoX = useTransform(p, [0.05, 0.18], [-80, 0])
    const cardVideoOpacity = useTransform(p, [0.05, 0.18], [0, 1])
    const cardSiteX = useTransform(p, [0.18, 0.3], [80, 0])
    const cardSiteOpacity = useTransform(p, [0.18, 0.3], [0, 1])
    const warnOpacity = useTransform(p, [0.32, 0.36, 0.55, 0.6], [0, 1, 1, 0])
    const flatOpacity = useTransform(p, [0.58, 0.7], [1, 0])
    const addxOpacity = useTransform(p, [0.58, 0.7], [0, 1])
    const siteBorder = useTransform(p, [0.58, 0.7], [edge, accent])
    const copyAOpacity = useTransform(p, [0.34, 0.44, 0.6, 0.68], [0, 1, 1, 0.25])
    const copyAY = useTransform(p, [0.34, 0.44], [24, 0])
    const copyBOpacity = useTransform(p, [0.66, 0.76], [0, 1])
    const copyBY = useTransform(p, [0.66, 0.76], [24, 0])

    const cardBase: React.CSSProperties = {
        position: "relative",
        aspectRatio: "4 / 3",
        overflow: "hidden",
        background: panel,
        border: `1px solid ${edge}`,
        padding: 20,
    }
    const monoLabel: React.CSSProperties = {
        fontSize: 10,
        letterSpacing: "0.25em",
        textTransform: "uppercase",
        color: muted,
    }

    return (
        <div
            ref={ref}
            style={{
                position: "relative",
                height: `${scrollLength * 100}vh`,
                background,
                fontFamily: bodyFont,
                color: text,
                ...style,
            }}
        >
            <div
                style={{
                    position: "sticky",
                    top: 0,
                    height: "100vh",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    overflow: "hidden",
                    padding: "0 24px",
                }}
            >
                <div style={{ maxWidth: 1280, margin: "0 auto", width: "100%" }}>
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
                        The Continuity Principle
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
                        <span style={{ display: "block", overflow: "hidden" }}>
                            <motion.span style={{ display: "block", y: headY }}>
                                The Ecosystem
                            </motion.span>
                        </span>
                        <span style={{ display: "block", overflow: "hidden" }}>
                            <motion.span
                                style={{
                                    display: "block",
                                    y: headY,
                                    color: "transparent",
                                    WebkitTextStroke: `1.5px ${text}`,
                                }}
                            >
                                Leak.
                            </motion.span>
                        </span>
                    </h2>

                    {/* diagram */}
                    <div
                        style={{
                            position: "relative",
                            marginTop: 56,
                            display: "grid",
                            gridTemplateColumns: "1fr minmax(80px, 220px) 1fr",
                            alignItems: "center",
                        }}
                    >
                        <motion.div style={{ ...cardBase, x: cardVideoX, opacity: cardVideoOpacity }}>
                            <div
                                style={{
                                    position: "absolute",
                                    inset: 0,
                                    background: `radial-gradient(70% 60% at 30% 20%, ${accent}24, transparent 70%), radial-gradient(60% 70% at 80% 85%, #785AFF2E, transparent 70%)`,
                                }}
                            />
                            <span style={{ ...monoLabel, position: "relative" }}>ADDX Launch Film</span>
                            <span
                                style={{
                                    position: "absolute",
                                    bottom: 20,
                                    left: 20,
                                    fontFamily: displayFont,
                                    fontWeight: 700,
                                    fontSize: 20,
                                }}
                            >
                                Premium motion.
                                <br />
                                Click-through earned.
                            </span>
                        </motion.div>

                        <svg viewBox="0 0 220 60" style={{ width: "100%" }} aria-hidden>
                            <motion.path
                                d="M0 30 H220"
                                fill="none"
                                strokeWidth={2}
                                strokeDasharray={600}
                                style={{ strokeDashoffset: dash, stroke: lineColor }}
                            />
                        </svg>

                        <motion.div
                            style={{
                                ...cardBase,
                                x: cardSiteX,
                                opacity: cardSiteOpacity,
                                borderColor: siteBorder,
                            }}
                        >
                            <motion.div
                                style={{
                                    position: "absolute",
                                    inset: 0,
                                    background: "#161616",
                                    padding: 20,
                                    opacity: flatOpacity,
                                }}
                            >
                                <div style={{ height: 12, width: "40%", background: "rgba(255,255,255,0.15)" }} />
                                <div style={{ marginTop: 12, height: 8, width: "80%", background: "rgba(255,255,255,0.08)" }} />
                                <div style={{ marginTop: 8, height: 8, width: "60%", background: "rgba(255,255,255,0.08)" }} />
                                <div style={{ marginTop: 24, height: 32, width: 112, background: "rgba(255,255,255,0.12)" }} />
                                <span style={{ ...monoLabel, position: "absolute", bottom: 20, left: 20 }}>
                                    Generic template. Static. Cold.
                                </span>
                            </motion.div>
                            <motion.div style={{ position: "absolute", inset: 0, padding: 20, opacity: addxOpacity }}>
                                <div
                                    style={{
                                        position: "absolute",
                                        inset: 0,
                                        background: `radial-gradient(70% 60% at 70% 30%, ${accent}24, transparent 70%)`,
                                    }}
                                />
                                <span style={{ ...monoLabel, position: "relative", color: accent }}>ADDX Build</span>
                                <span
                                    style={{
                                        position: "absolute",
                                        bottom: 20,
                                        left: 20,
                                        fontFamily: displayFont,
                                        fontWeight: 700,
                                        fontSize: 20,
                                    }}
                                >
                                    The motion never stops.
                                    <br />
                                    Neither does the funnel.
                                </span>
                            </motion.div>
                        </motion.div>

                        <motion.span
                            style={{
                                position: "absolute",
                                left: "50%",
                                top: "50%",
                                transform: "translate(-50%, -260%)",
                                fontSize: 12,
                                letterSpacing: "0.3em",
                                textTransform: "uppercase",
                                color: danger,
                                whiteSpace: "nowrap",
                                opacity: warnOpacity,
                            }}
                        >
                            ⚠ Conversion signal lost
                        </motion.span>
                    </div>

                    <div
                        style={{
                            marginTop: 48,
                            display: "grid",
                            gap: 32,
                            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                        }}
                    >
                        <motion.p
                            style={{
                                margin: 0,
                                fontSize: 17,
                                lineHeight: 1.65,
                                color: muted,
                                opacity: copyAOpacity,
                                y: copyAY,
                            }}
                        >
                            {copyA}
                        </motion.p>
                        <motion.p
                            style={{
                                margin: 0,
                                fontSize: 17,
                                lineHeight: 1.65,
                                opacity: copyBOpacity,
                                y: copyBY,
                            }}
                        >
                            {copyB}
                        </motion.p>
                    </div>
                </div>
            </div>
        </div>
    )
}

AddxEcosystemLeak.defaultProps = {
    background: "#050505",
    panel: "#0B0B0C",
    accent: "#CCFF00",
    danger: "#FF3B3B",
    text: "#F4F4F2",
    muted: "#8B8B88",
    edge: "rgba(255,255,255,0.08)",
    displayFont: "Space Grotesk, sans-serif",
    bodyFont: "Inter, sans-serif",
    copyA: "A user clicks a high-converting ADDX video — pacing, choreography, intent all engineered — and lands on a flat, generic, uninspired web template. The conversion magic breaks on impact. That is the ecosystem leak.",
    copyB: "We seal it by extending the motion experience directly onto the landing page: the same easing curves, the same cinematic pacing, the same brand physics — from first frame of the ad to final click of the funnel.",
    scrollLength: 3,
}

addPropertyControls(AddxEcosystemLeak, {
    background: { type: ControlType.Color, title: "Background" },
    panel: { type: ControlType.Color, title: "Panel" },
    accent: { type: ControlType.Color, title: "Accent" },
    danger: { type: ControlType.Color, title: "Danger" },
    text: { type: ControlType.Color, title: "Text" },
    muted: { type: ControlType.Color, title: "Muted" },
    edge: { type: ControlType.Color, title: "Border" },
    displayFont: { type: ControlType.String, title: "Display font" },
    bodyFont: { type: ControlType.String, title: "Body font" },
    copyA: { type: ControlType.String, title: "Leak copy", displayTextArea: true },
    copyB: { type: ControlType.String, title: "Fix copy", displayTextArea: true },
    scrollLength: {
        type: ControlType.Number,
        title: "Scroll length",
        min: 2,
        max: 6,
        step: 0.5,
        description: "Pinned duration in viewport heights",
    },
})
