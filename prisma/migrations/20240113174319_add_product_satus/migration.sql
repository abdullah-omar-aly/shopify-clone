-- CreateEnum
CREATE TYPE "ProductStatus" AS ENUM ('active', 'draft');

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "status" "ProductStatus" NOT NULL DEFAULT 'active';
