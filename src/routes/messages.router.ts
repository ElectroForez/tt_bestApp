import express from "express";
import {MessagesController} from "../controllers/messages.controller";
import {body} from "express-validator";
import {ValidateBody} from "../middlewares";

export const router = express.Router();
const messagesController = new MessagesController();


router.post("/getAll", async (req, res) => {
    await messagesController.getAll(req, res)
});

router.post("/add",
    body('chat').isNumeric(),
    body('author').isNumeric(),
    body('text').isString(),
    ValidateBody,
    async (req: any, res: any) => {
        await messagesController.add(req, res);
});

router.post("/get",
    body('chat').isNumeric(),
    ValidateBody,
    async (req: any, res: any) => {
    await messagesController.getMessagesFromChat(req, res);
});
