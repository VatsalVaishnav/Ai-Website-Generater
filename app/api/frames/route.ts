import { db } from "@/config/db";
import { chatTable, frameTable } from "@/config/schem";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const frameId = searchParams.get("frameId");
  const projectId = searchParams.get("projectId");

  if (!frameId || !projectId) {
    return NextResponse.json(
      { error: "Missing frameId or projectId" },
      { status: 400 }
    );
  }

  // @ts-ignore
  const frameResult = await db
    .select()
    .from(frameTable)
    .where(eq(frameTable.frameId, frameId));
  const chartResult = await db
    .select()
    .from(chatTable)
    .where(eq(chatTable.frameId, frameId));

  if (!frameResult[0]) {
    return NextResponse.json({ error: "Frame not found" }, { status: 404 });
  }

  const finelResult = {
    ...frameResult[0],
    chartMessages: chartResult[0]?.chatMessage || [],
  };

  return NextResponse.json(finelResult);
}
