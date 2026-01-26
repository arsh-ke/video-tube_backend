import express from "express"
import cors from "cors";

const app = express()

app.use(cors({
    origin: process.env.cors_origin,
    Credential: true     
}));
//basic middleware
app.use (express.json({limit: '50mb'}));
app.use (express.urlencoded({limit: '50mb', extended: true}));
app.use(express.static('public'));

//import routes
import Healthcheck from "./controllers/Healthcheck.js";


//routes
app.use("/api/v1/healthcheck", Healthcheck)
export default app
