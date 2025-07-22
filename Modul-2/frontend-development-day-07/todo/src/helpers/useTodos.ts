'use client'
import { useState, useEffect } from "react"
import { api } from "@/utils/api/api"
import { Todo } from "@/utils/interface"

export function useTodos(query?: string) {
    const [todos, setTodos] = useState<Todo[]>([])
    const [loading, setLoading] = useState<boolean>(false)

    async function fetchTodos() {
        try {
            setLoading(true)

            let url = '/todo?sortBy=created%20desc'
            if (query) {
                url += `&where=${encodeURIComponent(`title LIKE '%${query}%' `)}`
            }

            const response = await api.get<Todo[]>(url)
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