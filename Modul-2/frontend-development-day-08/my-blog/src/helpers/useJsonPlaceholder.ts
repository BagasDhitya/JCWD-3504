import axios from "axios";
import { useState, useEffect } from "react";

interface JsonPlacheholderBody {
    userId: number,
    id: number,
    title: string,
    body: string
}
export function useJsonPlaceholder() {
    const [data, setData] = useState<JsonPlacheholderBody[]>()

    async function fetchJsonPlaceholder() {
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
            setData(response.data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchJsonPlaceholder()
    }, [])

    return {
        data
    }
}