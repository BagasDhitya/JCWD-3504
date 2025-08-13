import { Request, Response } from "express";
import { handleSuccess } from "../helpers/success.handler";
import { handleError } from "../helpers/error.handler";
import { ProductService } from "../services/product.service";
import { ProductDTO } from "../dto/product.dto";

export class ProductController {
    productService: ProductService

    constructor() {
        this.productService = new ProductService()
        this.create = this.create.bind(this)
        this.getAll = this.getAll.bind(this)
        this.getById = this.getById.bind(this)
    }

    public async create(req: Request, res: Response) {
        try {
            const { title, description, stock, image, price }: ProductDTO = req.body
            const result = await this.productService.create({
                title, description, stock, image, price
            })
            handleSuccess(res, 'Success create product', result)
        } catch (error) {
            handleError(res, 'Failed create product', 500, (error as Error).message)
        }
    }

    public async getAll(req: Request, res: Response) {
        try {
            const result = await this.productService.getAll()
            handleSuccess(res, 'Success get all products', result)
        } catch (error) {
            handleError(res, 'Failed get all products', 500, (error as Error).message)
        }
    }

    public async getById(req: Request, res: Response) {
        try {
            const { id } = req.params
            const result = await this.productService.getById(Number(id))
            handleSuccess(res, `Success get product with id ${id}`, result)
        } catch (error) {
            handleError(res, 'Failed get product', 500, (error as Error).message)
        }
    }
}