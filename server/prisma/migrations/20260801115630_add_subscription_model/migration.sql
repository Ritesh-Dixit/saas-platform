/*
  Warnings:

  - You are about to alter the column `price` on the `Plan` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,2)` to `DoublePrecision`.

*/
-- CreateEnum
CREATE TYPE "SubscriptionStatus" AS ENUM ('ACTIVE', 'CANCELLED', 'EXPIRED');

-- AlterTable
ALTER TABLE "Plan" ALTER COLUMN "price" SET DATA TYPE DOUBLE PRECISION;

-- CreateTable
CREATE TABLE "Subscription" (
    "id" SERIAL NOT NULL,
    "status" "SubscriptionStatus" NOT NULL DEFAULT 'ACTIVE',
    "startDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "endDate" TIMESTAMP(3),
    "userId" INTEGER NOT NULL,
    "planId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Subscription_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Subscription" ADD CONSTRAINT "Subscription_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Subscription" ADD CONSTRAINT "Subscription_planId_fkey" FOREIGN KEY ("planId") REFERENCES "Plan"("id") ON DELETE CASCADE ON UPDATE CASCADE;
