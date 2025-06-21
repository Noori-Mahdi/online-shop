-- CreateTable
CREATE TABLE "category" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "categoryName" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "category_id_key" ON "category"("id");
