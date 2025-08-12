import express, { Application } from 'express'
import cors from 'cors'

const app: Application = express()
const PORT: number = 8000

app.use(cors({
    origin: 'http://localhost:3000'
}))
app.use(express.json())

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})