import { PrismaClient } from "@prisma/client";
import fs from "fs";

const prisma = new PrismaClient();

async function main() {
  // Read JSON file
  const questionsData = JSON.parse(fs.readFileSync("lib/question.json", "utf-8"));

  // Insert questions into the database
  await prisma.question.createMany({
    data: questionsData,
    skipDuplicates: true, // Prevents duplicate entries
  });

  console.log("✅ Questions inserted successfully!");
}

main()
  .catch((error) => {
    console.error("Error inserting questions:", error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
