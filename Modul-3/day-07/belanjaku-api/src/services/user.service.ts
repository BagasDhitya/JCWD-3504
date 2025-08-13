import { prisma } from "../utils/prisma";
import { UserDTO } from "../dto/user.dto";
import bcrypt from 'bcrypt'

export class UserService {
    public async create(data: UserDTO) {
        const findUser = await prisma.user.findUnique({
            where: {
                email: data.email
            }
        })

        if (findUser) {
            throw new Error('User already exist')
        }

        const hashedPassword = await bcrypt.hash(data.password, 10)

        return prisma.user.create({
            data: {
                email: data.email,
                password: hashedPassword
            }
        })
    }

    public getAll() {
        return prisma.user.findMany()
    }

}