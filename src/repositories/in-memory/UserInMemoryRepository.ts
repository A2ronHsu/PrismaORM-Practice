import { User } from "../../models/User";
import UserPrismaRepository from "../prisma/UsuarioPrismaRepository";


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
         }
      ]
   }

   async getAll():Promise<User[]>{
      return this.user;
   }

   // async getById(id:string): Promise<User|null> {
   //    const dataUser = this.user.find(item => {item.id === id});
   //    if (!dataUser) {
   //       return null;
   //    }

   //    return dataUser
   // }

   // async create(data: User){
   //    this.user.push(data);
   //    return data;
   // }

   // async update(id: string, data: User){
   //    const index = this.user.findIndex(item => item.id === id);
   //    return this.user[index] = data;
   // }

   // async delete(id:string){
   //    const index = this.user.findIndex(item => item.id === id);
   // }
}