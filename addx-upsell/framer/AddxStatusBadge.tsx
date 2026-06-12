import { addPropertyControls, ControlType } from "framer"

/**
 * ADDX — System Status indicator (Framer code component)
 * Drop into your existing Framer navbar next to the logo.
 *
 * @framerSupportedLayoutWidth auto
 * @framerSupportedLayoutHeight auto
 */
export default function AddxStatusBadge(props: any) {
    const { accent, muted, label, style } = props

    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                fontSize: 11,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: muted,
                fontFamily: "Inter, sans-serif",
                ...style,
            }}
        >
            <span style={{ position: "relative", width: 8, height: 8 }}>
                <span
                    style={{
                        position: "absolute",
                        inset: 0,
                        borderRadius: 9999,
                        background: accent,
                    }}
                />
                <span
                    style={{
                        position: "absolute",
                        inset: 0,
                        borderRadius: 9999,
                        background: accent,
                        animation: "addx-ping 2s cubic-bezier(0,0,0.2,1) infinite",
                    }}
                />
                <style>{`@keyframes addx-ping { 0% { transform: scale(1); opacity: .8 } 80%, 100% { transform: scale(3); opacity: 0 } }`}</style>
            </span>
            {label}
        </div>
    )
}

AddxStatusBadge.defaultProps = {
    accent: "#CCFF00",
    muted: "#8B8B88",
    label: "System Status: Active",
}

addPropertyControls(AddxStatusBadge, {
    accent: { type: ControlType.Color, title: "Accent" },
    muted: { type: ControlType.Color, title: "Text" },
    label: { type: ControlType.String, title: "Label" },
})
