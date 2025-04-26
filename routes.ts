import { Request, Response, Router } from "express";
import UserController from "./src/controllers/UserController";

const userController = new UserController();

const router = Router();

router.get("/users", userController.getall);
router.get("/users/:id", userController.getById);
router.post("/users", userController.create);
router.put("/users", userController.update);
router.delete("/users", userController.delete);

export default router;