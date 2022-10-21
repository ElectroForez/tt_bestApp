import express from "express";
import {MessagesController} from "../controllers/messages.controller";

export const router = express.Router();
const messagesController = new MessagesController();


router.post("/getAll", async (req, res) => {
    await messagesController.getAll(req, res)
});

router.post("/add", async (req, res) => {
    await messagesController.add(req, res);
});
