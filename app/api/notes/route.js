import dbConnect from "@/lib/db";
import Note from "@/models/Note";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await dbConnect();

    const notes = await Note.find({}).sort({ createdAt: -1 });

    return NextResponse.json(
      { success: true, data: notes },
      { status: 200 }
    );

  } catch (error) {
    console.error("GET /api/notes error:", error);

    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    await dbConnect();

    const body = await request.json();
    const { title, content } = body;

    if (!title?.trim() || !content?.trim()) {
      return NextResponse.json(
        { success: false, error: "Title and content are required" },
        { status: 400 }
      );
    }

    const note = await Note.create({
      title: title.trim(),
      content: content.trim(),
    });

    return NextResponse.json(
      { success: true, data: note },
      { status: 201 }
    );

  } catch (error) {
    console.error("POST /api/notes error:", error);

    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
