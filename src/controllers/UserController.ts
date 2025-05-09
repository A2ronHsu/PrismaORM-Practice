import { Request, Response } from "express";
import UserService from "../services/UserService";

import UserInMemoryRepository from "../repositories/in-memory/UserInMemoryRepository";
import UserPrismaRepository from "../repositories/prisma/UsuarioPrismaRepository";

import { UserInterface } from "../models/User";
import { User } from "../generated/prisma";


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
         const id : string= req.params.id;
         const user = await userService.getById(id);
         res.json({user});
      }catch(error:any){
         res.status(400)
         res.json({error:error.message})
      }
   };

   async create(req: Request, res: Response){
      try {
         const {name,email,password,phone} = req.body;

         if(!name || !email || !password) throw new Error("preencha todos os bancos");

         const user : UserInterface = {
            name: name,
            email: email,
            password: password,
            phone: phone,
         }

         const createdUser: User = await userService.create(user);
         
         res.json({createdUser});




      }catch(error:any){
         res.status(400)
         res.json({error:error.message})
      }
   };

   async update( req: Request, res: Response){
      try{
         const {id,name,email,password,phone} = req.body;
         if(!name || !email || !password ) throw new Error("complete os campos obrigatorios");

         const updateUser: UserInterface = {
            name:name,
            email:email,
            password:password,
            phone:phone
         }

         const oldUser : User = await userService.update(id,updateUser);
         res.json({updated:id,updateUser,oldUser});

      }catch(error:any){
         res.status(400)
         res.json({error:error.message})
      }
   };

   async delete(req: Request, res: Response){
      try{
         const {id} = req.body;
         if (!id) throw new Error("missing id");

         const deletedUser = await userService.delete(id);
         
         res.json({deleted:deletedUser});

      }catch(error:any){
         res.status(400)
         res.json({error:error.message})
      }
   };

}