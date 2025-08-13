import express, { Application } from 'express'
import productRouter from './routers/product.router'
import userRouter from './routers/user.router'
import transactionRouter from './routers/transaction.router'
import cors from 'cors'

const app: Application = express()
const PORT: number = 8000

app.use(cors({
    origin: 'http://localhost:3000'
}))

app.use(express.json())
app.use('/api', productRouter)
app.use('/api', userRouter)
app.use('/api', transactionRouter)

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})