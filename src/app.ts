import express, {Request, Response} from "express";
import bodyParser from "body-parser";
import * as glob from "glob";

export default async function createApp() {
    const app = express();
    app.use(bodyParser.json());

    app.get('/', (req: Request, res: Response) => {
        res.send('Express + TypeScript Server');
    });

    const routersPath = glob.sync("./*/*.router.ts", {cwd: __dirname});
    for (const routerPath of routersPath) {
        const routerName = routerPath.split('.').slice(0, -1).join('.'); //delete .ts
        const {router} = await import(routerName);
        app.use(router);
        console.log(`Server: added router from ${routerName}`);
    }
    return app;
}