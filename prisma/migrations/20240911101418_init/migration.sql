-- CreateTable
CREATE TABLE "CallBack" (
    "id" SERIAL NOT NULL,
    "fullName" VARCHAR(255) NOT NULL,
    "phone" VARCHAR(15) NOT NULL,
    "email" VARCHAR(320) NOT NULL,
    "message" TEXT NOT NULL,

    CONSTRAINT "CallBack_pkey" PRIMARY KEY ("id")
);
