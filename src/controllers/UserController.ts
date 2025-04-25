import { Request, Response } from "express";
import UserService from "../services/UserService";
import UserInMemoryRepository from "../repositories/in-memory/UserInMemoryRepository";
import UserPrismaRepository from "../repositories/prisma/UsuarioPrismaRepository";

const userService = new UserService( new UserPrismaRepository())

export default class UserController {
   async getall(req: Request,res: Response){
      try {
         //validação de dados, autenticação e autorização
         const allUsers = await userService.getAll();
         res.json({allUsers:allUsers});
      } catch (error: any) {
         res.status(400)
         res.json({error:error.message})
      }
   }
   
   async getById(req: Request, res: Response){
      try {

      }catch(error:any){
         res.status(400)
         res.json({error:error.message})
      }
   };

   async create(req: Request, res: Response){
      try {

         
      }catch(error:any){
         res.status(400)
         res.json({error:error.message})
      }
   };

   async update( req: Request, res: Response){
      try{

      }catch(error:any){
         res.status(400)
         res.json({error:error.message})
      }
   };

   async delete(req: Request, res: Response){
      try{

      }catch(error:any){
         res.status(400)
         res.json({error:error.message})
      }
   };

}