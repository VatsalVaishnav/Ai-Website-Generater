import { usersTable } from "@/config/schem";
import { db } from "@/config/db";
import { eq } from "drizzle-orm";
import { currentUser } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest) {
    const user= await currentUser();

    // if user already exist 
    // @ts-ignore
    const userResult =await db.select().from(usersTable).where(eq(usersTable.email,user?.primaryEmailAddress?.emailAddress))


    if(userResult?.length==0){
        const data ={
            name    :user?.fullName||'',
            email   :user?.primaryEmailAddress?.emailAddress||'',
            credits:2
        }
        const result =await db.insert(usersTable).values({
          ...data

        })
        return NextResponse.json({user:data})
    }

    return NextResponse.json({user: userResult[0]})

}