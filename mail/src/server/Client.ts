import express, {Application} from "express";
import {readdirSync} from "fs";
import * as path from "path";
import * as http from "http"
import {Route} from "../interfaces/route";
import * as parser from "body-parser"

export class Client {

    public app: Application = express();
    public routes: Map<String, Route> = new Map<String, Route>();

    public async init() : Promise<http.Server> {
        let routeDir = path.join(__dirname + "../../routes/");
        let routeFile = readdirSync(routeDir).filter(file => file.endsWith("ts"))

        this.app.use(parser.json());
        this.app.use(parser.urlencoded({
            extended: true
        }))

        this.app.get("*", (req, res, next) => {
            for(let file of routeFile) {
                let {route} = require(`../routes/${file}`);
                this.routes.set(route.name, route)
            }

            if (this.routes.has(req.path)) {
                const activeRoute = this.routes.get(req.path);
                if (activeRoute) {
                    activeRoute.run(req, res, next);
                }
            }

            if (!this.routes.has(req.path)) {
                return res.json({
                    "message": "path not found"
                })
            }
        })
        return this.app.listen(5000)
    }
}

