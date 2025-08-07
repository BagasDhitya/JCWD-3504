import { Response } from "express";

type SuccessResponse<T> = {
    status: 'success',
    message: string,
    data: T
}

export function handleSuccess<T>(res: Response, data: T, message = 'Success', statusCode = 200) {
    const response: SuccessResponse<T> = {
        status: 'success',
        message,
        data
    }

    return res.status(statusCode).json(response)
}