import { Router } from "express";
import { EmployeeController } from "../controllers/employee.controller";
import { logRequest } from "../middlewares/logRequest.middleware";
import { limitRequest } from "../middlewares/limitRequest.middleware";

const router = Router()
const controller = new EmployeeController

router.get('/employees', logRequest, controller.getAll)
router.get('/employees/:id', logRequest, controller.getById)

router.post('/employees', limitRequest, logRequest, controller.create)

export default router