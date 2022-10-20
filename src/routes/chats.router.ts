import express from "express";
import {ChatsController} from "../controllers";


export const router = express.Router();
const chatsController = new ChatsController();


router.post("/getAll", async (req, res) => {
    await chatsController.getAll(req, res)
});

router.post("/add", async (req, res) => {
    await chatsController.add(req, res);
});