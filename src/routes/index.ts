import {router as usersRouter} from "./users.router";
import express from "express";

export const routes = express.Router();

routes.use("/users", usersRouter);
