import { ImageResponse } from "next/og"

export const runtime = "edge"

export async function GET() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 128,
        background: "black",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "#4a54d1",
        padding: "40px",
      }}
    >
      <div style={{ fontSize: "64px", fontWeight: "bold", marginBottom: "20px" }}>Ronak Gupta</div>
      <div style={{ fontSize: "32px", color: "white" }}>Full-Stack Developer & ML Enthusiast</div>
    </div>,
    {
      width: 1200,
      height: 630,
    },
  )
}
