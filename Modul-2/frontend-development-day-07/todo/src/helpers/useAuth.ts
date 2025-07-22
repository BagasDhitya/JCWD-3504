'use client'

import { api } from "@/utils/api/api"
import { User } from "@/utils/interface"

export function useAuth() {

    async function register({ email, password }: User) {
        try {
            const response = await api.post('/users', { email, password })
            return response.data
        } catch (error) {
            console.log(error)
        }
    }

    async function login(email: string) {
        try {
            const response = await api.get('/users')
            const found = response.data.find((item: any) => item.email === email)
            if (found) {
                console.log('response : ', response.data)
                return response.data
            }
        } catch (error) {
            console.log(error)
        }
    }

    return { register, login }
}