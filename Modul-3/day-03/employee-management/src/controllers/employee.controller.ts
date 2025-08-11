// controller -> untuk mengatur jalur komunikasi request dan response
// controller dipasang di router

import { Request, Response } from "express";
import { EmployeeService } from "../services/employee.service";

import { handleError } from "../helpers/errorHandler";
import { handleSuccess } from "../helpers/responseHandler";

export class EmployeeController {
    private employeeService: EmployeeService

    constructor() {
        this.employeeService = new EmployeeService()

        // bisa binding this di router atau controller
        this.getById = this.getById.bind(this);
        this.getAll = this.getAll.bind(this);
        this.create = this.create.bind(this)
        this.softDelete = this.softDelete.bind(this)
        this.hardDelete = this.hardDelete.bind(this)
    }

    public async getById(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params
            const result = await this.employeeService.getById(Number(id))
            handleSuccess(res, result, 'Successfully get specific data employee')
        } catch (error) {
            handleError(res, error)
        }
    }

    public async getAll(req: Request, res: Response): Promise<void> {
        try {
            const { page = 1, limit = 10, role, department, sort = 'ASC', search } = req.query
            const result = await this.employeeService.getAll({
                page: Number(page),
                limit: Number(limit),
                role: role as string,
                department: department as string,
                sort: sort as string,
                search: search as string
            })
            handleSuccess(res, result, 'Successfully get all employees')
        } catch (error) {
            handleError(res, error)
        }
    }

    public async create(req: Request, res: Response): Promise<void> {
        try {
            const { name, department, role } = req.body
            const result = await this.employeeService.create({ name: name, department: department, role: role })
            handleSuccess(res, result, 'Successfully created employee')
        } catch (error) {
            handleError(res, error)
        }
    }

    public async softDelete(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params
            const result = await this.employeeService.softDelete(Number(id))
            handleSuccess(res, result, 'Successfully perform soft delete')
        } catch (error) {
            handleError(res, error)
        }
    }

    public async hardDelete(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params
            const result = await this.employeeService.hardDelete(Number(id))
            handleSuccess(res, result, 'Successfully perform hard delete')
        } catch (error) {
            handleError(res, error)
        }
    }
}