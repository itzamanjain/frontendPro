/*
  Warnings:

  - The primary key for the `CompletedQuestions` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `LikedQuestions` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Question` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Changed the type of `questionId` on the `CompletedQuestions` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `questionId` on the `LikedQuestions` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `id` on the `Question` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "CompletedQuestions" DROP CONSTRAINT "CompletedQuestions_questionId_fkey";

-- DropForeignKey
ALTER TABLE "LikedQuestions" DROP CONSTRAINT "LikedQuestions_questionId_fkey";

-- AlterTable
ALTER TABLE "CompletedQuestions" DROP CONSTRAINT "CompletedQuestions_pkey",
DROP COLUMN "questionId",
ADD COLUMN     "questionId" INTEGER NOT NULL,
ADD CONSTRAINT "CompletedQuestions_pkey" PRIMARY KEY ("userId", "questionId");

-- AlterTable
ALTER TABLE "LikedQuestions" DROP CONSTRAINT "LikedQuestions_pkey",
DROP COLUMN "questionId",
ADD COLUMN     "questionId" INTEGER NOT NULL,
ADD CONSTRAINT "LikedQuestions_pkey" PRIMARY KEY ("userId", "questionId");

-- AlterTable
ALTER TABLE "Question" DROP CONSTRAINT "Question_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" INTEGER NOT NULL,
ADD CONSTRAINT "Question_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "CompletedQuestions" ADD CONSTRAINT "CompletedQuestions_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LikedQuestions" ADD CONSTRAINT "LikedQuestions_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question"("id") ON DELETE CASCADE ON UPDATE CASCADE;
