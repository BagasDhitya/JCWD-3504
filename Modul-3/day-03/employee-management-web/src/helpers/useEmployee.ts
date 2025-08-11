import { useState, useEffect } from "react";
import axios from "axios";

interface Employee {
    data: [
        {
            id_employee?: number,
            name: string,
            department: string,
            role: string,
            created_at?: string
        }
    ]
}

export function useEmployee() {

    const [employee, setEmployee] = useState<Employee>()
    const [loading, setLoading] = useState<boolean>(true)

    async function getAll() {
        try {
            const result = await axios.get(`http://localhost:8000/api/v1/employees`)
            setEmployee(result?.data)
        } catch (error) {
            console.error('Error fetching employees : ', (error as Error).message)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getAll()
    }, [])

    return {
        loading,
        employee
    }
}