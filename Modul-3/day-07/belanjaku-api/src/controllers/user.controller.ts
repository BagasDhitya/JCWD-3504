import { Request, Response } from "express";
import { handleSuccess } from "../helpers/success.handler";
import { handleError } from "../helpers/error.handler";

import { UserDTO } from "../dto/user.dto";
import { UserService } from "../services/user.service";

export class UserController {
    userService: UserService

    constructor() {
        this.userService = new UserService()
        this.create = this.create.bind(this)
        this.getAll = this.getAll.bind(this)
    }

    public async create(req: Request, res: Response) {
        try {
            const { email, password }: UserDTO = req.body
            const result = await this.userService.create({
                email, password
            })
            handleSuccess(res, 'Success create user', result)
        } catch (error) {
            handleError(res, 'Failed create user', 500, (error as Error).message)
        }
    }

    public async getAll(req: Request, res: Response) {
        try {
            const result = await this.userService.getAll()
            handleSuccess(res, 'Success get all users', result)
        } catch (error) {
            handleError(res, 'Failed get all user', 500, (error as Error).message)
        }
    }
}