import 'dotenv/config'
import {z} from 'zod'

const schema = z.object({
    NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
    PORT: z.coerce.number().default(4000),
    POSTGRES_URL: z.string().min(3),
    MONGO_URL: z.string().min(3),
    REDIS_URL: z.string().min(3),
    JWT_ACCESS_SECRET: z.string().min(16),
    JWT_REFRESH_SECRET: z.string().min(16)
})

const parsed = schema.safeParse(process.env)

console.log(parsed)

if(!parsed.success) {
    console.error("Invalid enviroment variables", parsed.error.flatten().fieldErrors)
    process.exit(1)
}

export const env = parsed.data