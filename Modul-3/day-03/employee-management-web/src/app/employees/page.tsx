'use client'
import { useEmployee } from "@/helpers/useEmployee"

export default function Employees() {

    const { loading, employee } = useEmployee()

    if (loading) {
        return (
            <div className="flex flex-col justify-center items-center w-screen h-screen py-6">
                <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
                <p className="text-blue-700 font-bold mt-5">Loading ...</p>
            </div>
        )
    }

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-6">Employees</h1>
            <div className="overflow-x-auto rounded-lg shadow">
                <table className="min-w-full bg-white border border-gray-100">
                    <thead className="bg-gray-100 border-b border-gray-200">
                        <tr>
                            <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">ID</th>
                            <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Name</th>
                            <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Role</th>
                            <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Department</th>
                            <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Created At</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employee?.data?.length! > 0 ? (
                                employee?.data?.map((emp) => (
                                    <tr key={emp.id_employee}>
                                        <td className="py-3 px-4 text-sm text-gray-600">{emp.id_employee}</td>
                                        <td className="py-3 px-4 text-sm text-gray-600">{emp.name}</td>
                                        <td className="py-3 px-4 text-sm text-gray-600">{emp.role}</td>
                                        <td className="py-3 px-4 text-sm text-gray-600">{emp.department}</td>
                                        <td className="py-3 px-4 text-sm text-gray-600">{emp.created_at}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={5} className="py-4 text-center text-gray-500s">
                                        No employees found
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
