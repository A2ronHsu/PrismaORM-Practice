import { Request, Response, Router } from "express";
import UserController from "./src/controllers/UserController";

const userController = new UserController();

const router = Router();

router.get("/users", userController.getall);
router.get("/users/:id", userController.getall);
router.post("/users", userController.getall);
router.put("/users", userController.getall);
router.delete("/users", userController.getall);

export default router;