import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt     = "Rajeev Kumar — Software Development Engineer";
export const size    = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width:           "100%",
          height:          "100%",
          display:         "flex",
          flexDirection:   "column",
          justifyContent:  "space-between",
          backgroundColor: "#070707",
          padding:         "64px 72px",
          fontFamily:      "sans-serif",
          position:        "relative",
          overflow:        "hidden",
        }}
      >
        {/* ── grid background ── */}
        <div
          style={{
            position:        "absolute",
            inset:           0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.022) 1px, transparent 1px)," +
              "linear-gradient(90deg, rgba(255,255,255,.022) 1px, transparent 1px)",
            backgroundSize:  "76px 76px",
            opacity:         0.4,
          }}
        />

        {/* ── purple glow ── */}
        <div
          style={{
            position:        "absolute",
            top:             "-120px",
            right:           "-120px",
            width:           "600px",
            height:          "600px",
            borderRadius:    "50%",
            background:      "radial-gradient(circle, rgba(199,167,255,0.18) 0%, transparent 70%)",
            filter:          "blur(60px)",
          }}
        />

        {/* ── top row — name + availability ── */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px", position: "relative" }}>
          {/* ping dot */}
          <div
            style={{
              width:        "10px",
              height:       "10px",
              borderRadius: "50%",
              background:   "#8fffbb",
              boxShadow:    "0 0 12px #8fffbb",
            }}
          />
          <span
            style={{
              fontSize:      "13px",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color:         "rgba(242,238,231,0.45)",
            }}
          >
            Available for selected opportunities
          </span>
        </div>

        {/* ── center — display name + title ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", position: "relative" }}>
          <div
            style={{
              fontSize:      "96px",
              fontWeight:    500,
              letterSpacing: "-0.05em",
              lineHeight:    0.85,
              color:         "#f2eee7",
            }}
          >
            RAJEEV
          </div>
          <div
            style={{
              fontSize:      "96px",
              fontWeight:    500,
              letterSpacing: "-0.05em",
              lineHeight:    0.85,
              color:         "rgba(242,238,231,0.18)",
            }}
          >
            KUMAR
          </div>
          <div
            style={{
              marginTop:     "24px",
              fontSize:      "20px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color:         "#c7a7ff",
            }}
          >
            Software Development Engineer
          </div>
        </div>

        {/* ── bottom row — stack + location ── */}
        <div
          style={{
            display:        "flex",
            alignItems:     "center",
            justifyContent: "space-between",
            position:       "relative",
            borderTop:      "1px solid rgba(255,255,255,0.07)",
            paddingTop:     "24px",
          }}
        >
          <div style={{ display: "flex", gap: "32px" }}>
            {["React", "Next.js", "Laravel", "PHP", "Technical SEO"].map((tech) => (
              <span
                key={tech}
                style={{
                  fontSize:      "12px",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color:         "rgba(255,255,255,0.25)",
                }}
              >
                {tech}
              </span>
            ))}
          </div>
          <span
            style={{
              fontSize:      "12px",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color:         "rgba(255,255,255,0.20)",
            }}
          >
            Purnia · Bihar · India
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
