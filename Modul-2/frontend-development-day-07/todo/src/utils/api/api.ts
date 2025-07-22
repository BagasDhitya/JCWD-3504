import axios from "axios";

const APP_ID = process.env.NEXT_PUBLIC_APP_ID
const REST_API_KEY = process.env.NEXT_PUBLIC_REST_API_KEY

export const api = axios.create({
    baseURL: `https://api.backendless.com/${APP_ID}/${REST_API_KEY}/data/todos`,
    headers: {
        'Content-Type': 'application/json'
    }
})