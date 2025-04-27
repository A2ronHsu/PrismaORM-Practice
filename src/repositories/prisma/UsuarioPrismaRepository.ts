import { PrismaClient, User } from "../../generated/prisma"
import { UserInterface } from "../../models/User";
const prisma = new PrismaClient();

export default class UserPrismaRepository{
   async getAll(){
         const allUsers = await prisma.user.findMany();
         if (allUsers.length) return allUsers;
         
         throw new Error("Error on repo");
   }

      
   async getById(id:string){
         const user = await prisma.user.findFirstOrThrow({
            where:{
               id: id
            }
         });         
         return user;
   };


   async create(user: UserInterface){
      const createdUser = await prisma.user.create({
         data:{
            name: user.name,
            email: user.email,
            password: user.password,
            phone: user.phone
         }
      });

      if (!createdUser) throw new Error("error");
      return createdUser;
   };

   async getByEmail(email:string):Promise<User|null>{
      const user = await prisma.user.findFirst({
         where:{
            email:email
         }
      })
      return user;
   }
   async update(id:string, updateUser:UserInterface){
      
      const oldUser : User|null = await this.getById(id);
      if(!oldUser) throw new Error("user data error")

      await prisma.user.update({
         where:{
            id:id
         },
         data:{
            name:updateUser.name,
            password:updateUser.password,
            phone:updateUser.phone,
            email:updateUser.email
            
            
         }
      });

      return oldUser;
   };
   async delete(id:string):Promise<User>{
      const deletedUser = await prisma.user.delete({
         where:{
            id:id
         }
      })

      return deletedUser;
   };
   
}