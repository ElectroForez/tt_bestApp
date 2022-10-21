import express from "express";
import {router as usersRouter} from "./users.router";
import {router as chatsRouter} from "./chats.router";
import {router as messagesRouter} from "./messages.router";

export const routes = express.Router();

routes.use("/users", usersRouter);
routes.use("/chats", chatsRouter);
routes.use("/messages", messagesRouter);
