import { PrismaClient } from "../../generated/prisma"

const prisma = new PrismaClient();

export default class UserPrismaRepository{
   async getAll(){
      try {
         const allUsers = await prisma.user.findMany();
         console.log(allUsers.length);
         if (allUsers.length) return allUsers;
         
         throw new Error("Error on repo");
         
      } catch (error:any) {
         return error.message
      }
   }

      
   // async getById(){};
   // async create(){};
   // async update(){};
   // async delete(){};
   
}