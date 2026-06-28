import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { addPropertyControls, ControlType } from "framer"

/**
 * ADDX — Animated Hero (Framer code component)
 * Paste into Framer: Assets → Code → Create Code File.
 * All brand tokens are property controls — match them to the site theme
 * in the properties panel, no code edits needed.
 *
 * @framerSupportedLayoutWidth any
 * @framerSupportedLayoutHeight any
 */
export default function AddxHero(props: any) {
    const {
        background,
        accent,
        text,
        muted,
        eyebrow,
        headline,
        serifFont,
        sub,
        scrollHint,
        displayFont,
        bodyFont,
        style,
    } = props

    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    })
    const copyY = useTransform(scrollYProgress, [0, 1], ["0%", "-22%"])
    const copyOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
    const gridY = useTransform(scrollYProgress, [0, 1], [0, 320])

    // Words wrapped in *asterisks* render in the italic serif accent style.
    const renderRich = (line: string) =>
        line.split(/(\*[^*]+\*)/g).map((seg: string, j: number) =>
            seg.startsWith("*") && seg.endsWith("*") ? (
                <em
                    key={j}
                    style={{
                        fontFamily: serifFont,
                        fontStyle: "italic",
                        fontWeight: 400,
                        color: accent,
                        letterSpacing: "-0.01em",
                    }}
                >
                    {seg.slice(1, -1)}
                </em>
            ) : (
                <span key={j}>{seg}</span>
            )
        )

    const lines = headline.split("\n").map((line: string, i: number) => (
        <span key={i} style={{ display: "block", overflow: "hidden" }}>
            <motion.span
                initial={{ y: "115%", rotate: 3 }}
                animate={{ y: "0%", rotate: 0 }}
                transition={{
                    duration: 1.1,
                    delay: 0.2 + i * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                }}
                style={{ display: "inline-block", color: text }}
            >
                {renderRich(line)}
            </motion.span>
        </span>
    ))

    return (
        <div
            ref={ref}
            style={{
                position: "relative",
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                overflow: "hidden",
                background,
                fontFamily: bodyFont,
                ...style,
            }}
        >
            {/* scroll-reactive grid floor — swap for the Higgsfield loop when delivered */}
            <motion.div
                aria-hidden
                style={{
                    position: "absolute",
                    inset: "-60%",
                    backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)`,
                    backgroundSize: "64px 64px",
                    transform: "perspective(900px) rotateX(58deg)",
                    transformOrigin: "50% 30%",
                    backgroundPositionY: gridY,
                }}
            />
            <div
                aria-hidden
                style={{
                    position: "absolute",
                    inset: 0,
                    background: `radial-gradient(70% 60% at 50% 35%, rgba(20,80,200,0.35), transparent 70%), radial-gradient(40% 40% at 75% 15%, ${accent}1F, transparent 70%), linear-gradient(to bottom, ${background}99, transparent 40%, ${background})`,
                }}
            />

            <motion.div
                style={{
                    position: "relative",
                    zIndex: 1,
                    maxWidth: 1280,
                    margin: "0 auto",
                    padding: "96px 24px 0",
                    width: "100%",
                    y: copyY,
                    opacity: copyOpacity,
                }}
            >
                <motion.p
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 16,
                        margin: "0 0 32px",
                        fontSize: 11,
                        letterSpacing: "0.3em",
                        textTransform: "uppercase",
                        color: accent,
                    }}
                >
                    <span style={{ width: 48, height: 1, background: accent }} />
                    {eyebrow}
                </motion.p>

                <h1
                    style={{
                        margin: 0,
                        fontFamily: displayFont,
                        fontWeight: 600,
                        fontSize: "clamp(2.6rem, 7vw, 6.2rem)",
                        lineHeight: 1.02,
                        letterSpacing: "-0.03em",
                    }}
                >
                    {lines}
                </h1>

                <motion.p
                    initial={{ opacity: 0, y: 36 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                    style={{
                        marginTop: 40,
                        maxWidth: 560,
                        fontSize: 17,
                        lineHeight: 1.65,
                        color: muted,
                    }}
                >
                    {sub}
                </motion.p>
            </motion.div>

            <div
                style={{
                    position: "absolute",
                    bottom: 32,
                    left: "50%",
                    transform: "translateX(-50%)",
                    fontSize: 10,
                    letterSpacing: "0.3em",
                    textTransform: "uppercase",
                    color: muted,
                }}
            >
                {scrollHint}
            </div>
        </div>
    )
}

AddxHero.defaultProps = {
    background: "#02060C",
    accent: "#4FC4F8",
    text: "#FFFFFF",
    muted: "#98A2B3",
    eyebrow: "Highly Animated UX/UI Web Design",
    headline: "Your product videos\nare *premium*.\nWhy is your\nwebsite *static*?",
    sub: "ADDX Studio brings your interface to life. We build highly animated, immersive web experiences with the exact same motion choreography, cinematic pacing, and fluid transitions as our launch videos.",
    scrollHint: "Scroll — the demo has already started",
    displayFont: "Inter, sans-serif",
    bodyFont: "Inter, sans-serif",
    serifFont: "Instrument Serif, Georgia, serif",
}

addPropertyControls(AddxHero, {
    background: { type: ControlType.Color, title: "Background" },
    accent: { type: ControlType.Color, title: "Accent" },
    text: { type: ControlType.Color, title: "Text" },
    muted: { type: ControlType.Color, title: "Muted" },
    eyebrow: { type: ControlType.String, title: "Eyebrow" },
    headline: {
        type: ControlType.String,
        title: "Headline",
        displayTextArea: true,
        description: "Wrap words in *asterisks* for the italic serif accent",
    },
    sub: { type: ControlType.String, title: "Subheadline", displayTextArea: true },
    scrollHint: { type: ControlType.String, title: "Scroll hint" },
    displayFont: { type: ControlType.String, title: "Display font" },
    bodyFont: { type: ControlType.String, title: "Body font" },
    serifFont: { type: ControlType.String, title: "Serif accent font" },
})
