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
        headlineWhite,
        headlineAccent,
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

    const lines = (white: boolean) =>
        (white ? headlineWhite : headlineAccent).split("\n").map((line: string, i: number) => (
            <span key={i} style={{ display: "block", overflow: "hidden" }}>
                <motion.span
                    initial={{ y: "115%", rotate: 3 }}
                    animate={{ y: "0%", rotate: 0 }}
                    transition={{
                        duration: 1.1,
                        delay: 0.2 + (white ? i : i + 2) * 0.1,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    style={{ display: "inline-block", color: white ? text : accent }}
                >
                    {line}
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
                    background: `radial-gradient(60% 50% at 70% 20%, ${accent}12, transparent 70%), linear-gradient(to bottom, ${background}99, transparent 40%, ${background})`,
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
                        fontWeight: 700,
                        textTransform: "uppercase",
                        fontSize: "clamp(2.6rem, 7.2vw, 6.5rem)",
                        lineHeight: 0.95,
                        letterSpacing: "-0.045em",
                    }}
                >
                    {lines(true)}
                    {lines(false)}
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
    background: "#050505",
    accent: "#CCFF00",
    text: "#F4F4F2",
    muted: "#8B8B88",
    eyebrow: "Highly Animated UX/UI Web Design",
    headlineWhite: "Your Product Videos\nAre Premium.",
    headlineAccent: "Why Is Your\nWebsite Static?",
    sub: "ADDX Studio brings your interface to life. We build highly animated, immersive web experiences with the exact same motion choreography, cinematic pacing, and fluid transitions as our launch videos.",
    scrollHint: "Scroll — the demo has already started",
    displayFont: "Space Grotesk, sans-serif",
    bodyFont: "Inter, sans-serif",
}

addPropertyControls(AddxHero, {
    background: { type: ControlType.Color, title: "Background" },
    accent: { type: ControlType.Color, title: "Accent" },
    text: { type: ControlType.Color, title: "Text" },
    muted: { type: ControlType.Color, title: "Muted" },
    eyebrow: { type: ControlType.String, title: "Eyebrow" },
    headlineWhite: { type: ControlType.String, title: "Headline A", displayTextArea: true },
    headlineAccent: { type: ControlType.String, title: "Headline B", displayTextArea: true },
    sub: { type: ControlType.String, title: "Subheadline", displayTextArea: true },
    scrollHint: { type: ControlType.String, title: "Scroll hint" },
    displayFont: { type: ControlType.String, title: "Display font" },
    bodyFont: { type: ControlType.String, title: "Body font" },
})
