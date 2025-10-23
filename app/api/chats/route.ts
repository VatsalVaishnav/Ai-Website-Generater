import { db } from "@/config/db";
import { chatTable } from "@/config/schem";
import { NextRequest, NextResponse } from "next/server";
import { eq } from "drizzle-orm";

export async function PUT(req: NextRequest) {
  const { messages, frameId } = await req.json(); // <-- changed 'message' to 'messages'
  const result = await db
    .update(chatTable)
    .set({ chatMessage: messages }) // <-- changed 'message' to 'messages'
    .where(eq(chatTable.frameId, frameId));

  return NextResponse.json({ result: "updated" });
}
