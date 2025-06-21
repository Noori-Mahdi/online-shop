-- CreateTable
CREATE TABLE "product" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "Name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "Price" REAL NOT NULL,
    "discounts" INTEGER NOT NULL,
    "Like" INTEGER NOT NULL,
    "count" INTEGER NOT NULL,
    "sellCount" INTEGER NOT NULL,
    "categoryId" TEXT NOT NULL,
    "createTime" DATETIME NOT NULL,
    CONSTRAINT "product_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "category" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "product_id_key" ON "product"("id");
