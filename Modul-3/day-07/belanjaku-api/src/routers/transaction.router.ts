import { TransactionController } from "../controllers/transaction.controller";
import { Router } from "express";

const router = Router()
const transactionController = new TransactionController()

router.post('/transactions', transactionController.create)
router.get('/transactions', transactionController.getAll)

export default router