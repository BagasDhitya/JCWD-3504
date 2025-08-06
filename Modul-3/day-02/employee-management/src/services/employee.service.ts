// services -> proses bisnis, atau logika dari fitur aplikasi
// services dipasang di controller

import { EmployeeDTO } from "../dto/employee.dto";
import employees from '../dummy/employees.json'

interface FilterData {
    role?: string,
    division?: string,
    search?: string,
}

export class EmployeeService {
    private employeeList: EmployeeDTO[] = employees // employees.json ibarat mengambil data dari database

    public getAll(data: FilterData, page: number = 1, limit: number = 10): EmployeeDTO[] {
        let result = [...this.employeeList]

        if (data.role) {
            result = result.filter((emp: EmployeeDTO) => emp.role.toLowerCase() === data.role?.toLocaleLowerCase())
        }

        if (data.division) {
            result = result.filter((emp: EmployeeDTO) => emp.division.toLowerCase() === data.division?.toLocaleLowerCase())
        }

        if (data.search) {
            result = result.filter((emp: EmployeeDTO) => emp.name.toLowerCase().includes(data.search?.toLowerCase() as string))
        }

        const start = (page - 1) * limit
        const end = start + limit

        return result.slice(start, end)
    }

    public getById(id_employee: string): EmployeeDTO | undefined {
        return this.employeeList.find((emp: EmployeeDTO) => emp.id_employee === id_employee)
    }

    public create(data: Omit<EmployeeDTO, 'id_employee'>): EmployeeDTO {
        const newEmployee: EmployeeDTO = {
            id_employee: 'EMP-' + String(Math.floor(Math.random() * 100)),
            name: data.name,
            division: data.division,
            role: data.role
        }

        this.employeeList.push(newEmployee)
        return newEmployee
    }
}