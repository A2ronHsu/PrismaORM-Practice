-- DropForeignKey
ALTER TABLE "post" DROP CONSTRAINT "post_id_user_fkey";

-- AddForeignKey
ALTER TABLE "post" ADD CONSTRAINT "post_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
