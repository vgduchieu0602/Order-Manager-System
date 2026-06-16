import mongoose from 'mongoose'
import { env } from './env.js'

export async function connectMongo(): Promise<void> {
    await mongoose.connect(env.MONGO_URL)
    console.log("Connect MongoDB successfully")
}