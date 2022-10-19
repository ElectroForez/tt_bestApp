import express, {Request, Response} from "express";
import bodyParser from "body-parser";
import {routes} from "./routes";


export default async function createApp() {
    const app = express();
    app.use(bodyParser.json());


    app.use(routes);
    return app;
}