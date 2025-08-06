import express, { Application } from 'express'
import employeeRouter from './routers/employee.router'

const app: Application = express()
const PORT: number = 8000

app.use(express.json()) // middleware untuk membaca data json dari body request di controller
app.set('trust proxy', true) // untuk memunculkan ip address
app.use('/api/v1', employeeRouter)

// cara akses employee : 

// http://localhost:8000/api/v1/employees (GET ALL)
// http://localhost:8000/api/v1/employees/2 (diikuti dengan id yang dicari)

app.listen(PORT, () => {
    console.log('Server running at http://localhost:', PORT)
})