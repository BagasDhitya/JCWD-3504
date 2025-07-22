import axios from "axios";

export const api = axios.create({
    baseURL: `https://swishrail-us.backendless.app/api/data`,
    headers: {
        'Content-Type': 'application/json'
    }
})