import { Router } from "express";
import { UserController } from "../controllers/user.controller";
import { AuthMiddleware } from "../middlewares/auth.middleware";

const router = Router()
const userController = new UserController()
const authMiddleware = new AuthMiddleware()

router.post('/auth/register', userController.create)
router.post('/auth/login', userController.login)

router.get('/users', authMiddleware.authenticate, userController.getAll)

export default router