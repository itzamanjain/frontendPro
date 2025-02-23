import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
    try {
        console.log("came here✨✨✨✨✨✨✨✨✨");
        
        // Parse the request body
        const reqBody = await request.json();
        console.log(reqBody);
        
        const { id, userId } = reqBody; // Assuming you also have userId to associate with the completed question

        // Find the question by ID
        const question = await prisma.question.findUnique({
            where: {
                id: id
            }
        });

        // If the question is not found, return an error response
        if (!question) {
            return NextResponse.json({ message: "question not found" }, { status: 400 });
        }

        // Mark the question as completed by inserting it into the completedQuestions table
        await prisma.completedQuestions.create({
            data: {
                questionId: id, // Reference the question by ID
                userId: userId   // Store the user ID
            }
        });

        // Optionally, you can also update the user's completed questions relationship, 
        // if you're using that to track which questions the user has completed.
        await prisma.user.update({
            where: {
                id: userId
            },
            data: {
                completedQuestions: {
                    create: {
                        questionId: id
                    }
                }
            }
        });

        return NextResponse.json({ message: "question marked as completed" }, { status: 200 });
        
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "An error occurred" }, { status: 500 });
    }
}
