import { Router } from "express";
import { UserService } from "../services/user.service";
import { ProductController } from "../controllers/product.controller";
import { AuthMiddleware } from "../middlewares/auth.middleware";
import { RBACMiddleware } from "../middlewares/rbac.middleware";

import { UserRole } from "../dto/user.dto";

const router = Router()
const productController = new ProductController()
const authMiddleware = new AuthMiddleware()
const userService = new UserService()

// public routes
router.get('/products', productController.getAll)
router.get('/products/:id', productController.getById)

// admin routes
router.post('/products', authMiddleware.authenticate, userService.validateToken, RBACMiddleware.checkRole([UserRole.ADMIN]), productController.create)

export default router