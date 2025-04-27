import { UserInterface } from "../../models/User";
import { User } from "../../generated/prisma";
import UserPrismaRepository from "../prisma/UsuarioPrismaRepository";

import { v4 as uuid } from "uuid";

export default class UserInMemoryRepository implements UserPrismaRepository {
   private user: User[] = []

   constructor(){
      this.user = [
         {
            "id": "4f82cb46-6c4d-4aa7-bf16-8b1fabdb14c7",
            "name": "test-user",
            "email": "testmail@mail.com",
            "password": "123456789",
            "phone": null,
            "createdAt": new Date(),
            "updatedAt": new Date(),

         }
      ]
   }

   async getAll():Promise<User[]>{
      return this.user;
   }

   async getById(id:string): Promise<User> {
      const dataUser = this.user.find(item => {item.id === id});
      if (!dataUser) {
         throw new Error("user missing")
      }

      return dataUser
   }

   async create(data: UserInterface):Promise<User>{
      const createdUser : User= {
         id: uuid(),
         name:data.name,
         password:data.password,
         email: data.email,
         phone:data.phone,
         createdAt: new Date(),
         updatedAt: new Date()
      }
      this.user.push(createdUser);
      return createdUser;
   }

   async getByEmail(email: string): Promise<User|null> {
      const user : User|undefined = this.user.find(elem => elem.email == email)
      if (!user) return null;
      return user;
   }
   async update(id: string, data: UserInterface){
      const user = this.user.find(item => item.id === id);
      if(!user) throw new Error("bad user data")
      return user;
   }

   async delete(id:string): Promise<User>{
      const index = this.user.findIndex(item => item.id === id);
      if (index === -1) throw new Error("missing user");
      this.user = this.user.slice(0,index).concat(this.user.slice(index+1));
      return this.user[index];
   }
}