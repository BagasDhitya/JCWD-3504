import { Request, Response, NextFunction } from "express";
import { UserService } from "../services/user.service";

export class AuthMiddleware {
    userService: UserService

    constructor() {
        this.userService = new UserService()
        this.authenticate = this.authenticate.bind(this)
    }

    public async authenticate(req: Request, res: Response, next: NextFunction) {
        try {
            const authHeader = req.headers.authorization
            if (!authHeader) {
                throw new Error('Authorization header missing')
            }

            const token = authHeader.split(' ')[1]
            if (!token) {
                throw new Error('Token missing')
            }

            const user = await this.userService.validateToken(token as string) as any
            (req as any).user = user

            next()
        } catch (error) {
            res.status(401).json({
                message: (error as Error).message
            })
        }
    }
}