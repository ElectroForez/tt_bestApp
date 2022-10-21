import express from "express";
import {ChatsController} from "../controllers";
import {body} from "express-validator";
import {ValidateBody} from "../middlewares/ValidateBody";


export const router = express.Router();
const chatsController = new ChatsController();


router.post("/getAll", async (req, res) => {
    await chatsController.getAll(req, res)
});

router.post("/add",
    body('name').isString(),
    body('users').isArray().isNumeric(),
    ValidateBody,
    async (req: any, res:any) => {
        await chatsController.add(req, res);
});

router.post("/get",
    body('user').isNumeric(),
    ValidateBody,
    async (req: any, res: any) => {
        await chatsController.getUserChats(req, res);
    }
);
