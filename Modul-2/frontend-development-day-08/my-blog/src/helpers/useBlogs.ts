'use client'

import { useState, useEffect } from "react"
import axios from "axios"
import { Blog } from "@/utils/interface/blog"

export function useBlogs() {
    const [blogs, setBlogs] = useState<Blog | null>(null)
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

    async function fetchBlogs() {
        try {
            setLoading(true)
            const response = await axios.get('/api/blogs')
            setBlogs(response.data)
        } catch (error: any) {
            setError(error.message || 'Failed to fetch blogs')
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchBlogs()
    }, [])

    return { blogs, loading, error }
}