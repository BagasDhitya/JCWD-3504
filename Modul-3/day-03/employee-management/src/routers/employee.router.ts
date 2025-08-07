import { Router } from "express";
import { EmployeeController } from "../controllers/employee.controller";
import { logRequest } from "../middlewares/logRequest.middleware";
import { limitRequest } from "../middlewares/limitRequest.middleware";

const router = Router()
const controller = new EmployeeController

router.get('/employees', logRequest, controller.getAll)
router.get('/employees/:id', logRequest, controller.getById)

router.post('/employees', limitRequest, logRequest, controller.create)

router.patch('/employees/:id/soft-delete', limitRequest, logRequest, controller.softDelete)
router.delete('/employees/:id', limitRequest, logRequest, controller.hardDelete)

export default router