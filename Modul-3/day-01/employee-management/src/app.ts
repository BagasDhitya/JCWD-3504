import express, { Request, Response, Application } from 'express'
import { data } from "../database/employee.json"

type Employee = {
    id: number,
    name: string,
    division: string,
    role: string
}

class EmployeeApi {
    private employees: Employee[] = data
    public app: Application = express()

    constructor() {
        this.app.use(express.json()) // middleware agar bisa parsing JSON body
        this.employeeRoutes()
    }

    public createEmployee(req: Request, res: Response): void {
        const { name, division, role } = req.body

        // validasi kalau name division dan role wajib diikutsertakan
        if (!name || !division || !role) {
            res.json({
                message: 'Missing required fields'
            })
        }

        // jika lolos validasi, maka buatkan data employee baru (body request)
        let newEmployee: Employee = {
            id: Math.ceil(Math.random() * 100), // untuk create id secara dinamis
            name: name,
            division: division,
            role: role
        }

        // simpan body request ke this.employees
        this.employees.push(newEmployee)
        res.json({
            message: 'Success created new employee'
        })
    }

    public getAllEmployees(req: Request, res: Response): void {
        res.json(this.employees)
    }

    public getEmployeeById(req: Request, res: Response): void {
        const { id } = req.params
        const employee = this.employees.find((employee) => employee.id === Number(id))
        if (employee) {
            res.json(employee)
        } else {
            res.json({ message: 'ID not found' })
        }
    }

    public employeeRoutes(): void {
        this.app.get('/api/employees', this.getAllEmployees.bind(this))
        this.app.get('/api/employees/:id', this.getEmployeeById.bind(this))
        this.app.post('/api/employees', this.createEmployee.bind(this))
    }
}

const PORT = 8000
const server = new EmployeeApi()

server.employeeRoutes()
server.app.listen(PORT, () => {
    console.log('Server running at http://localhost:', PORT)
})