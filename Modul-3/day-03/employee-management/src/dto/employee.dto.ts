// DTO -> Data Transfer Object, berisi bentuk data yang akan diolah
// DTO isinya interface atau class

export interface EmployeeDTO {
    id_employee?: number,
    name: string,
    department: string,
    role: string,
    payroll_history?: [],
    created_at?: Date,
    updated_at?: Date,
    deleted_at?: Date
}