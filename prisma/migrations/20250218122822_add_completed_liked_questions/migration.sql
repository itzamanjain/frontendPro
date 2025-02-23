-- CreateTable
CREATE TABLE "Question" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "difficulty" TEXT NOT NULL,
    "sampleUrl" TEXT,
    "successRate" INTEGER NOT NULL,
    "expectedTime" TEXT NOT NULL,
    "submissions" INTEGER NOT NULL,
    "content" TEXT NOT NULL,
    "tags" TEXT[],

    CONSTRAINT "Question_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CompletedQuestions" (
    "userId" TEXT NOT NULL,
    "questionId" TEXT NOT NULL,

    CONSTRAINT "CompletedQuestions_pkey" PRIMARY KEY ("userId","questionId")
);

-- CreateTable
CREATE TABLE "LikedQuestions" (
    "userId" TEXT NOT NULL,
    "questionId" TEXT NOT NULL,

    CONSTRAINT "LikedQuestions_pkey" PRIMARY KEY ("userId","questionId")
);

-- AddForeignKey
ALTER TABLE "CompletedQuestions" ADD CONSTRAINT "CompletedQuestions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompletedQuestions" ADD CONSTRAINT "CompletedQuestions_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LikedQuestions" ADD CONSTRAINT "LikedQuestions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LikedQuestions" ADD CONSTRAINT "LikedQuestions_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question"("id") ON DELETE CASCADE ON UPDATE CASCADE;
