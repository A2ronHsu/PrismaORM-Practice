-- CreateTable
CREATE TABLE "post" (
    "id" TEXT NOT NULL,
    "id_user" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "conteudo" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "post_pkey" PRIMARY KEY ("id")
);
