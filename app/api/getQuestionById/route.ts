import { NextRequest,NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(){
    try {
        console.log("came here");
        
        const question = await prisma.question.findUnique({
            where:{id:1}
        })
        console.log(question);
        
        if(!question)return NextResponse.json({message:"question not found"},{status:400})

        return NextResponse.json({message:"question found",question},{status:200})

    } catch (error) {
        console.log(error);
        
    }
}