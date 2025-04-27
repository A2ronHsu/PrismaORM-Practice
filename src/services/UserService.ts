import UserPrismaRepository from "../repositories/prisma/UsuarioPrismaRepository";
import UserInMemoryRepository from "../repositories/in-memory/UserInMemoryRepository";
import { UserInterface } from "../models/User";
import { User } from "../generated/prisma";

export default class UserService {

   constructor( private userRepository: UserInMemoryRepository|UserPrismaRepository){
      
   }

   async getAll(){
      //regra de negócio
      const allUsers = await this.userRepository.getAll();
      return allUsers;
   }

      
   async getById(id:string){
      const user = await this.userRepository.getById(id);
      return user;
   };
   async create(user: UserInterface):Promise<User>{
      if (await this.getByEmail(user.email)) throw new Error("user already exist");

      const createdUser = await this.userRepository.create(user);

      return createdUser;
   };

   async getByEmail(email:string): Promise<User|null>{
      const user : User|null = await this.userRepository.getByEmail(email);
      
      return user;
   }
   async update(id:string, updateUser: UserInterface){
      const oldUser = await this.userRepository.update(id,updateUser);
      return oldUser;
   };
   async delete(){};
   
}