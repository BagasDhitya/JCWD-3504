import { prisma } from "../utils/prisma";
import { ProductDTO } from "../dto/product.dto";

export class ProductService {
    public create(data: ProductDTO) {
        return prisma.product.create({ data })
    }

    public getAll() {
        return prisma.product.findMany()
    }

    public getById(id: number) {
        return prisma.product.findUnique({
            where: {
                id_product: id
            }
        })
    }
}