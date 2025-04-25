import express, { Request, Response } from 'express';
import router from './routes';
import dotenv from 'dotenv';

dotenv.config();
const server = express();

server.use(router);

server.listen(process.env.PORT, () =>{
   console.log(`listening on port ${process.env.PORT}`);
});