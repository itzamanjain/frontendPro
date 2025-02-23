import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req:NextRequest, res:NextResponse) {
  try {
    const { email } = await req.json(); // Get email from request body

    if (!email) {
      return ;
    }

    // Query the database for the user by email
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!user) {
      return ;
    }

    // Return the user ID
    return NextResponse.json({userId:user.id})
  } catch (error) {
    console.error(error);
    return ;
  }
}
