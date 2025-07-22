'use client'
import { useState, useEffect } from "react"
import { api } from "@/utils/api/api"
import { Todo } from "@/utils/interface"

export function useTodos() {
    const [todos, setTodos] = useState<Todo[]>([])
    const [loading, setLoading] = useState<boolean>(false)

    async function fetchTodos() {
        try {
            setLoading(true)
            const response = await api.get<Todo[]>('/todo')
            setTodos(response.data)
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchTodos()
    }, [])


    return {
        todos,
        loading
    }
}