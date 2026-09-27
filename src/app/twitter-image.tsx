import { ImageResponse } from "next/og";

export const alt = "AC North — Top 3 on Google in one week";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#F7F6F3",
          color: "#1C1C1A",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 34, fontWeight: 600 }}>
          <div style={{ width: 40, height: 40, background: "#3E5A6B", borderRadius: 4 }} />
          AC North
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 88, fontWeight: 600, letterSpacing: -3, lineHeight: 1.05 }}>
            Top 3 on Google in one week.
          </div>
          <div style={{ marginTop: 28, fontSize: 32, color: "#5E5E59" }}>
            Search engine optimisation, maintained every month.
          </div>
        </div>
        <div style={{ height: 2, background: "#3E5A6B", width: 160 }} />
      </div>
    ),
    size,
  );
}
