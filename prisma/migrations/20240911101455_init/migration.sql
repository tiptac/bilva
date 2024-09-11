/*
  Warnings:

  - You are about to drop the `CallBack` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "CallBack";

-- CreateTable
CREATE TABLE "CallBackRequests" (
    "id" SERIAL NOT NULL,
    "fullName" VARCHAR(255) NOT NULL,
    "phone" VARCHAR(15) NOT NULL,
    "email" VARCHAR(320) NOT NULL,
    "message" TEXT NOT NULL,

    CONSTRAINT "CallBackRequests_pkey" PRIMARY KEY ("id")
);
