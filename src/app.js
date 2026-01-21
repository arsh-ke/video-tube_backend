import express from "express"
import cors from "cors";

app.use(cors({
    origin: process.env.cors_origin,
    Credential: true     
}));

app.use (express.json())
const app = express()
export default app
