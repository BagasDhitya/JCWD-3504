import { pool } from "../helpers/database/db";
import { EmployeeDTO } from "../dto/employee.dto";

interface EmployeeQueryParams {
    page: number,
    limit: number,
    role?: string,
    department?: string,
    sort?: string,
    search?: string
}

export class EmployeeService {
    public async getAll(params: EmployeeQueryParams) {
        const { page, limit, role, department, sort, search } = params
        let query = 'SELECT * FROM employees WHERE deleted_at IS NULL '
        const values: any[] = []
        let counter: number = 1
        // filter berdasarkan role
        if (role) {
            query += `AND role = $${counter++}`
            values.push(role)
        }
        // filter berdasarkan division
        if (department) {
            query += `AND department = $${counter++}`
            values.push(department)
        }
        // searching berdasarkan nama employee
        if (search) {
            query += `AND (name ILIKE $${counter++} OR role ILIKE $${counter++} OR department ILIKE $${counter++})`
            values.push(`%${search}%`, `%${search}%`, `%${search}%`)
        }

        // fitur pagination
        const offset = (page - 1) * limit
        query += `ORDER BY name ${sort?.toUpperCase() === 'DESC' ? 'DESC' : 'ASC'} LIMIT $${counter++} OFFSET $${counter++}`
        values.push(limit, offset)

        const result = await pool.query(query, values)
        return result.rows
    }

    public async getById(id: number) {
        const result = await pool.query('SELECT * from employees WHERE id_employee = $1', [id])
        return result.rows[0]
    }

    public async create(data: EmployeeDTO) {
        const result = await pool.query(`INSERT INTO employees (name, department, role)
            values ($1, $2, $3) RETURNING *`, [data.name, data.department, data.role])
        return result.rows[0]
    }

    public async softDelete(id: number) {
        const result = await pool.query(`UPDATE employees SET deleted_at = CURRENT_TIMESTAMP
            WHERE id_employee = $1 RETURNING *`, [id])
        return result.rows[0]
    }

    public async hardDelete(id: number) {
        await pool.query('DELETE FROM employees WHERE id_employee = $1', [id])
        return "Successfully deleted employee account"
    }
}