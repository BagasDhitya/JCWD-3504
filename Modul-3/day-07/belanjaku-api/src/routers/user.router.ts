import { Router } from "express";
import { UserController } from "../controllers/user.controller";

const router = Router()
const userController = new UserController()

router.post('/auth/register', userController.create)
router.get('/users', userController.getAll)

export default router