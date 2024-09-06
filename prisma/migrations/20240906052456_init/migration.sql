-- CreateEnum
CREATE TYPE "UserStatus" AS ENUM ('ACTIVE', 'DELETED');

-- CreateEnum
CREATE TYPE "UserContactVerificationStatus" AS ENUM ('PENDING', 'VERIFIED');

-- CreateEnum
CREATE TYPE "PropertyStatus" AS ENUM ('UNSOLD', 'SOLD');

-- CreateEnum
CREATE TYPE "PropertyVerificationStatus" AS ENUM ('PENDING', 'INPROGRESS', 'VERIFIED');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "fullName" VARCHAR(255) NOT NULL,
    "phone" VARCHAR(15) NOT NULL,
    "email" VARCHAR(320) NOT NULL,
    "passHash" TEXT NOT NULL,
    "status" "UserStatus" NOT NULL DEFAULT 'ACTIVE',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserPhoneVerificationStatus" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "status" "UserContactVerificationStatus" NOT NULL DEFAULT 'PENDING',

    CONSTRAINT "UserPhoneVerificationStatus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserEmailVerificationStatus" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "status" "UserContactVerificationStatus" NOT NULL DEFAULT 'PENDING',

    CONSTRAINT "UserEmailVerificationStatus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Property" (
    "id" SERIAL NOT NULL,
    "summary" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "status" "PropertyStatus" NOT NULL DEFAULT 'UNSOLD',
    "verification" "PropertyVerificationStatus" NOT NULL DEFAULT 'PENDING',

    CONSTRAINT "Property_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PropertyVisitors" (
    "id" BIGSERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "propertyId" INTEGER NOT NULL,
    "firstVisitedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastVisitedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PropertyVisitors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ContactRequest" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "propertyId" INTEGER NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ContactRequest_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_phone_key" ON "User"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "UserPhoneVerificationStatus_userId_key" ON "UserPhoneVerificationStatus"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "UserEmailVerificationStatus_userId_key" ON "UserEmailVerificationStatus"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Property_description_key" ON "Property"("description");

-- CreateIndex
CREATE INDEX "Property_userId_idx" ON "Property"("userId");

-- CreateIndex
CREATE INDEX "PropertyVisitors_userId_propertyId_idx" ON "PropertyVisitors"("userId", "propertyId");

-- CreateIndex
CREATE UNIQUE INDEX "PropertyVisitors_userId_propertyId_key" ON "PropertyVisitors"("userId", "propertyId");

-- CreateIndex
CREATE INDEX "ContactRequest_userId_propertyId_idx" ON "ContactRequest"("userId", "propertyId");

-- CreateIndex
CREATE UNIQUE INDEX "ContactRequest_userId_propertyId_key" ON "ContactRequest"("userId", "propertyId");

-- AddForeignKey
ALTER TABLE "UserPhoneVerificationStatus" ADD CONSTRAINT "UserPhoneVerificationStatus_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserEmailVerificationStatus" ADD CONSTRAINT "UserEmailVerificationStatus_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Property" ADD CONSTRAINT "Property_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PropertyVisitors" ADD CONSTRAINT "PropertyVisitors_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PropertyVisitors" ADD CONSTRAINT "PropertyVisitors_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContactRequest" ADD CONSTRAINT "ContactRequest_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContactRequest" ADD CONSTRAINT "ContactRequest_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
