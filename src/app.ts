import express, {Request, Response} from "express";

export default function createApp() {
    const app = express();

    app.get('/', (req: Request, res: Response) => {
        res.send('Express + TypeScript Server');
    });

    return app;
}