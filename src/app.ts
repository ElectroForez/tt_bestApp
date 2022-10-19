import express from "express";
import bodyParser from "body-parser";
import {routes} from "./routes";
import {ErrorHandling} from './middlewares';

export default async function createApp() {
    const app = express();
    app.use(bodyParser.json());

    app.use(routes);

    app.use(ErrorHandling);
    return app;
}