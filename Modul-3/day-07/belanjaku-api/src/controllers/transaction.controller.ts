import { Response, Request } from "express";
import { handleSuccess } from "../helpers/success.handler";
import { handleError } from "../helpers/error.handler";
import { TransactionService } from "../services/transaction.service";
import { TransactionDTO } from "../dto/transaction.dto";

export class TransactionController {
    transactionService = new TransactionService()

    constructor() {
        this.transactionService = new TransactionService()
        this.create = this.create.bind(this)
        this.getAll = this.getAll.bind(this)
    }
    public async create(req: Request, res: Response) {
        try {
            const { cart, payment, id_user }: TransactionDTO = req.body
            const result = await this.transactionService.create({
                cart, payment, id_user
            })
            handleSuccess(res, 'Success transaction', result)
        } catch (error) {
            handleError(res, 'Failed transaction', 500, (error as Error).message)
        }
    }

    public async getAll(req: Request, res: Response) {
        try {
            const result = await this.transactionService.getAll()
            handleSuccess(res, 'Success get all transaction', result)
        } catch (error) {
            handleError(res, 'Failed get all transaction', 500, (error as Error).message)
        }
    }
}