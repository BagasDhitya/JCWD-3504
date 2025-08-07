import { pool } from "../helpers/database/db";
import { EmployeeDTO } from "../dto/employee.dto";

export class EmployeeService {
    public async getAll() {
        const result = await pool.query('SELECT * from employees')
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