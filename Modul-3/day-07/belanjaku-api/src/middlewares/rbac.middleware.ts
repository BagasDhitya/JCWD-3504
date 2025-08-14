import { Request, Response, NextFunction } from "express";
import { UserDTO, UserRole } from "../dto/user.dto";

export class RBACMiddleware {
    static checkRole(requiredRoles: UserRole[]) {
        return (req: Request, res: Response, next: NextFunction): void => {
            const user = (req as any).user as UserDTO

            if (!user) {
                res.status(401).json({
                    message: 'Unauthorized user'
                })
                return
            }

            if (!requiredRoles.includes(user.role as UserRole)) {
                res.status(403).json({
                    message: 'Forbidden access: insufficient permissions'
                })
                return
            }

            next()
        }
    }
}