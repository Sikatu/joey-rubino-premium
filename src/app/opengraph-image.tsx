import { ImageResponse } from "next/og";

export const alt =
  "Joey Rubino — Find Healing. Find Hope. Find Meaning.";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background:
            "linear-gradient(135deg, #171715 0%, #252823 52%, #353A33 100%)",
          color: "#FAF8F4",
          padding: "62px 72px",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 560,
            height: 560,
            borderRadius: "50%",
            border: "1px solid rgba(250,248,244,0.08)",
            right: -120,
            top: -180,
          }}
        />

        <div
          style={{
            position: "absolute",
            width: 390,
            height: 390,
            borderRadius: "50%",
            border: "1px solid rgba(250,248,244,0.06)",
            right: -25,
            top: -90,
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            }}
        >
          <div
            style={{
              display: "flex",
              fontFamily: "sans-serif",
              fontSize: 16,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              opacity: 0.65,
            }}
          >
            Joey Rubino
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 86,
              lineHeight: 0.92,
              letterSpacing: "-0.045em",
            }}
          >
            <div>Find Healing.</div>
            <div style={{ opacity: 0.68 }}>Find Hope.</div>
            <div>Find Meaning.</div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              borderTop: "1px solid rgba(250,248,244,0.13)",
              paddingTop: 22,
              fontFamily: "sans-serif",
              fontSize: 13,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              opacity: 0.5,
            }}
          >
            <span>Recovery · Fitness · Guidance</span>
            <span>Los Angeles</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}