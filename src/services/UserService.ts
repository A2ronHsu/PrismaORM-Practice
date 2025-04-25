import UserPrismaRepository from "../repositories/prisma/UsuarioPrismaRepository";
import UserInMemoryRepository from "../repositories/in-memory/UserInMemoryRepository";


export default class UserService {

   constructor( private userRepository: UserInMemoryRepository|UserPrismaRepository){
      
   }

   async getAll(){
      //regra de negócio
      const allUsers = await this.userRepository.getAll();
      return allUsers;
   }

      
   async getById(){};
   async create(){};
   async update(){};
   async delete(){};
   
}