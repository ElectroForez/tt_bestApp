import express from "express";
import {UsersController} from "../controllers";
import {body} from "express-validator";
import {ValidateBody} from "../middlewares";

export const router = express.Router();
const usersController = new UsersController();


router.post("/getAll", async (req, res) => {
    await usersController.getAll(req, res)
});

router.post("/add",
    body('username').isString(),
    ValidateBody,
    async (req:any, res:any) => {
        await usersController.add(req, res);
});

router.post("/delete",
    body('id').isNumeric(),
    ValidateBody,
    async (req:any, res:any) => {
        await usersController.delete(req, res);
});

router.post("/update",
    body('id').isNumeric(),
    ValidateBody,
    async (req:any, res:any) => {
        await usersController.update(req, res);
});

router.post("/get",
    body('id').isNumeric(),
    ValidateBody,
    async (req:any, res:any) => {
        await usersController.get(req, res);
});