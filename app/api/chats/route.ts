import { db } from "@/config/db";
import { chatTable } from "@/config/schem";
import { NextRequest, NextResponse } from "next/server";
import { eq } from "drizzle-orm";

export async function PUT(req:NextRequest) {
    const {message,frameId} = await req.json()
    const result = await db.update(chatTable).set({chatMessage:message}).where(eq(chatTable.frameId,frameId))

    return NextResponse.json({result:'updated'})
}