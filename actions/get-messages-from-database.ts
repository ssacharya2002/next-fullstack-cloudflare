"use server"

import { db } from "@/app/db/db"
import { messages } from "@/app/db/schema"
import { revalidatePath } from "next/cache"


export async function getMessageFromDatabase() {
    revalidatePath("/");
    const response = await db.select().from(messages)
    return response;
}