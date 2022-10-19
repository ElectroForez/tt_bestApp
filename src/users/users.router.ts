import express from "express";
import * as UsersController from "./users.controller";

export const router = express.Router();
const route = "/users/";

router.post(route + "getAll", UsersController.getAll);
