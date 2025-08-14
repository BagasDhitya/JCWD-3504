import { TransactionController } from "../controllers/transaction.controller";
import { Router } from "express";
import { AuthMiddleware } from "../middlewares/auth.middleware";

const router = Router()
const transactionController = new TransactionController()
const authMiddleware = new AuthMiddleware()

router.post('/transactions', authMiddleware.authenticate, transactionController.create)
router.get('/transactions', authMiddleware.authenticate, transactionController.getAll)

export default router