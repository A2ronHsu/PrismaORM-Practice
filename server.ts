import express, { Request, Response, urlencoded } from 'express';
import router from './routes';
import dotenv from 'dotenv';

dotenv.config();
const server = express();

server.use(urlencoded(),router);

server.listen(process.env.PORT, () =>{
   console.log(`listening on port ${process.env.PORT}`);
});