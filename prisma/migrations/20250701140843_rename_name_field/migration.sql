/*
  Warnings:

  - You are about to drop the column `Like` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `Name` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `Price` on the `product` table. All the data in the column will be lost.
  - Added the required column `name` to the `product` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_product" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "price" REAL NOT NULL DEFAULT 0,
    "discounts" INTEGER NOT NULL DEFAULT 0,
    "like" INTEGER NOT NULL DEFAULT 0,
    "count" INTEGER NOT NULL DEFAULT 0,
    "sellCount" INTEGER NOT NULL DEFAULT 0,
    "categoryId" TEXT NOT NULL,
    "createTime" DATETIME NOT NULL,
    CONSTRAINT "product_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "category" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_product" ("categoryId", "count", "createTime", "discounts", "id", "image", "sellCount", "name", "price", "like") SELECT "categoryId", "count", "createTime", "discounts", "id", "image", "sellCount", "Name", "Price", "Like" FROM "product";
DROP TABLE "product";
ALTER TABLE "new_product" RENAME TO "product";
CREATE UNIQUE INDEX "product_id_key" ON "product"("id");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
