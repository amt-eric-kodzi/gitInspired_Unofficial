import dotenv from 'dotenv'

dotenv.config()

export default{
    SERVER_URL: import.meta.env.VITE_SERVER_URL,
}