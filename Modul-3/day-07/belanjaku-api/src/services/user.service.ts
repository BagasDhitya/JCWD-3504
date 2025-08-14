import { prisma } from "../utils/prisma";
import { UserDTO, UserRole } from "../dto/user.dto";

import { verify, sign, SignOptions } from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import dotenv from 'dotenv'

dotenv.config()

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
                password: hashedPassword,
                role: data.role as any
            }
        })
    }

    public async login(data: UserDTO) {
        const user = await prisma.user.findUnique({
            where: {
                email: data.email
            }
        })

        // validasi apakah user ada di dalam db
        if (!user) {
            throw new Error('User not found')
        }

        const isPasswordValid = await bcrypt.compare(data.password, user.password)

        // validasi apakah passwordnya match
        if (!isPasswordValid) {
            throw new Error('Invalid credentials')
        }

        const secretKey = process.env.JWT_SECRET_KEY as string
        const expiresIn = process.env.JWT_EXPIRES_IN as string

        return {
            accessToken: this.generateToken(data, secretKey, expiresIn)
        }
    }

    public getAll() {
        return prisma.user.findMany()
    }

    private generateToken(user: UserDTO, secret: string, expiresIn: string) {
        const payload = {
            email: user.email,
            role: user.role
        };

        const options: SignOptions = {
            expiresIn: expiresIn as any
        };

        return sign(payload, secret as string, options);
    }

    public async validateToken(token: string) {
        try {
            console.log('check: ', token)
            if (!token || typeof token !== 'string') {
                throw new Error('Token must be a valid string');
            }

            const decoded = verify(token, process.env.JWT_SECRET_KEY as string) as UserDTO
            const user = await prisma.user.findUnique({
                where: {
                    email: decoded.email
                }
            })

            if (!user) {
                throw new Error('User not found')
            }

            return user
        } catch (error) {
            throw new Error('Invalid token : ' + (error as Error).message)
        }
    }
}