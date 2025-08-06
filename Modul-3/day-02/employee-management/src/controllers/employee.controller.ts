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
    }

    public async getById(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params

            // validasi id jika id tidak terdaftar di database
            if (!id.includes('EMP')) {
                res.json({
                    status: 400,
                    message: 'ID employee not found'
                })
            }

            const result = await this.employeeService.getById(id)
            handleSuccess(res, result, 'Successfully get specific data employee')
        } catch (error) {
            handleError(res, error)
        }
    }

    public async getAll(req: Request, res: Response): Promise<void> {
        try {

            const { role, division, search, page = '1', limit = '10' } = req.query

            const pageNumber = parseInt(page as string, 10)
            const limitNumber = parseInt(limit as string, 10)

            const result = await this.employeeService.getAll(
                {
                    role: role as string,
                    division: division as string,
                    search: search?.toString() as string,
                },
                pageNumber,
                limitNumber
            )

            handleSuccess(res, result, 'Successfully get data of employees')
        } catch (error) {
            handleError(res, error)
        }
    }

    public async create(req: Request, res: Response): Promise<void> {
        try {
            const { name, division, role } = req.body
            const result = await this.employeeService.create({ name: name, division: division, role: role })
            handleSuccess(res, result, 'Successfully created employee')
        } catch (error) {
            handleError(res, error)
        }
    }
}