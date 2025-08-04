import http, { IncomingMessage, ServerResponse } from 'http'
import { data } from './database/users.json'

type User = {
    id: string,
    name: string,
    department: string
}

class UserApi {
    private users: User[] = data

    public handleRequest(req: IncomingMessage, res: ServerResponse): void {
        const method = req.method || 'GET'
        const url = req.url || '/'

        if (method === 'GET' && url === '/api/users') {
            this.getAllUsers(res)
        } else {
            this.sendJSON(res, { message: 'Not Found' })
        }
    }
    private getAllUsers(res: ServerResponse): void {
        this.sendJSON(res, this.users)
    }
    private sendJSON(res: ServerResponse, data: any): void {
        res.end(JSON.stringify(data))
    }
}

const PORT = 8000
const userApi = new UserApi()

const server = http.createServer((req, res) => userApi.handleRequest(req, res))
server.listen(PORT, () => {
    console.log('Server running at http://localhost:', PORT)
})