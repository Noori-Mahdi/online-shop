-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "userName" TEXT NOT NULL,
    "passord" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "userImg" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "user_id_key" ON "user"("id");

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");
