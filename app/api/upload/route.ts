import { type NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const file = formData.get("file") as File;
  const duration = formData.get("duration") as string;

  if (!file) {
    return NextResponse.json({ error: "No file provided" }, { status: 400 });
  }

  if (!file.type.startsWith("image/")) {
    return NextResponse.json(
      { error: "File must be an image" },
      { status: 400 }
    );
  }

  // Calculate expiration date based on duration
  const durationSeconds = Number.parseInt(duration) || 3600;
  const expiresAt = new Date(Date.now() + durationSeconds * 1000);

  try {
    const imageBuffer = await file.arrayBuffer();
    const toUpload = Buffer.from(imageBuffer);
    const base64Image = toUpload.toString('base64');

    const result = await fetch(process.env.NEXT_INTERNAL_API || "", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.NEXT_PUBLIC_API_KEY || "",
      },
      body: JSON.stringify({
        body: {
          fileName: file.name,
          imageBuffer: base64Image,
          expiresIn: durationSeconds,
          type: file.type,
        },
      }),
    });

    const responseData = await result.json();
    const body = JSON.parse(responseData?.body || "{}");

    if (body.message == "Limit Exceeded") {
      return NextResponse.json({ error: "API limit exceeded try again tomorrow" }, { status: 429 });
    } else if (body.errorMessage) {
      return NextResponse.json({ error: body.errorMessage }, { status: 400 });
    }

    return NextResponse.json({
      url: body.url,
      filename: file.name,
      size: file.size,
      type: file.type,
      message: body.message,
      expiresAt: expiresAt.toISOString(),
    });
  } catch (error) {
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
