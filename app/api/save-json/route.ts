import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";

export async function POST(req: Request) {
  try {
    const { filename, content } = await req.json();

    if (!filename || !content) {
      return NextResponse.json(
        { error: "Missing filename or content" },
        { status: 400 }
      );
    }

    const filePath = path.join(process.cwd(), "app/data", filename);

    await writeFile(filePath, JSON.stringify(content, null, 2), "utf8");

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("SAVE ERROR:", error);
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
