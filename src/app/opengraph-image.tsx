import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "AC North — Top 3 on Google in one week";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const logo = await readFile(join(process.cwd(), "public/logo-mark.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

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
          background: "#FFFFFF",
          color: "#0A1A33",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20, fontSize: 36, fontWeight: 600 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} width={56} height={56} alt="" />
          AC North
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 88, fontWeight: 600, letterSpacing: -3, lineHeight: 1.05 }}>
            Top 3 on Google in one week.
          </div>
          <div style={{ marginTop: 28, fontSize: 32, color: "#4F5D73" }}>
            Local SEO, maintained every month.
          </div>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <div style={{ height: 4, width: 80, background: "#012D6E" }} />
          <div style={{ height: 4, width: 80, background: "#016BE2" }} />
          <div style={{ height: 4, width: 80, background: "#47B1FB" }} />
        </div>
      </div>
    ),
    size,
  );
}
