import { NextRequest } from "next/server";

import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl;

    const hasTitle = searchParams.has("title");

    let title = hasTitle ? searchParams.get("title") : "Open Graph";

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            position: "relative",
            color: "white",
            display: "flex",
            backgroundImage: `url(https://og-image-generation-olive.vercel.app/_static/blog-og-card.png)`,
          }}
        >
          <div
            style={{
              width: 744,
              fontSize: 40,
              position: "absolute",
              left: 240,
              top: 150,
              color: "black",
            }}
          >
            {title}
          </div>
        </div>
      )
    );
  } catch (error) {
    console.error(error);
  }
}
