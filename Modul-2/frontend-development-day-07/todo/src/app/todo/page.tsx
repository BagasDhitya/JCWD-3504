'use client'
import { useState, useEffect } from "react"
import { useTodos } from "@/helpers/useTodos"

import { Todo } from "@/utils/interface"
import TodoItem from "@/components/TodoItem"

export default function TodoList() {

    const { todos, loading } = useTodos()
    const [title, setTitle] = useState<string>("")
    const [editing, setEditing] = useState<Todo | null>(null)

    return (
        <main className="max-w-2xl mx-auto py-10 px-4">
            <h1 className="text-2xl font-bold mb-6 text-center">Tidy Task</h1>
            <table className="w-full border border-gray-200">
                <thead className="bg-gray-100 text-sm text-gray-600">
                    <tr>
                        <th className="p-2 text-left">Title</th>
                        <th className="p-2 text-center">Completed</th>
                        <th className="p-2 text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((todo: Todo) => {
                        return (
                            <TodoItem
                                key={todo.objectId}
                                todo={todo}
                                onEdit={(edit) => {
                                    setTitle(edit.title)
                                    setEditing(edit)
                                }}
                                onDelete={() => alert('Under development!')}
                            />
                        )
                    })}
                </tbody>
            </table>
        </main>
    )
}
