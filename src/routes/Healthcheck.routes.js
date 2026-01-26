import { Router } from "express";    
import Healthcheck from "../controllers/Healthcheck";

const Router = Router()

Router.route("/").get(Healthcheck)
Router.route("/test").get(Healthcheck)

export default Router;