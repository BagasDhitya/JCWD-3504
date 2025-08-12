import { PrismaClient } from "../src/generated/prisma";
import product from './products.json'

const prisma = new PrismaClient()

async function main() {

    // clear old data
    await prisma.product.deleteMany()

    // seeds table product
    await prisma.product.createMany({
        data: product
    })
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })