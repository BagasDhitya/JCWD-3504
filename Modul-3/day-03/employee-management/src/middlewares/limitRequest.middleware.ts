import { Request, Response, NextFunction } from "express";

const requestMap: Record<string, number[]> = {} // array of timestamps
const MAX_REQUESTS = 2
const BLOCK_DURATION = 5000 // 5 detik 

export function limitRequest(req: Request, res: Response, next: NextFunction) {
    const forwarded = req.headers['x-forwarded-for'] as string
    const ip = forwarded?.split(',')[0]?.trim() || req.socket.remoteAddress || "unknown"
    const now = Date.now()

    if (!requestMap[ip]) {
        requestMap[ip] = []
    }

    // ambil semua timestamp user
    const timestamps = requestMap[ip]

    // bersihkan request lama (lebih dari 5 detik dari request terakhir)
    const validTimestamps = timestamps.filter(ts => now - ts < BLOCK_DURATION)

    if (validTimestamps.length >= MAX_REQUESTS) {
        const waitTime = BLOCK_DURATION
        return res.status(429).json({
            message: `Too many requests. Please wait ${Math.ceil(waitTime / 1000)} seconds.`
        })
    }

    // simpan request terbaru
    validTimestamps.push(now)
    requestMap[ip] = validTimestamps
    next()
}
