import express from "express";
import {UsersController} from "../controllers";

export const router = express.Router();
const usersController = new UsersController();


router.post("/getAll", async (req, res) => {
    await usersController.getAll(req, res)
});

router.post("/add", async (req, res) => {
    await usersController.add(req, res);
});

router.post("/delete", async (req, res) => {
    await usersController.delete(req, res);
});

router.post("/update", async (req, res) => {
    await usersController.update(req, res);
});

router.post("/get", async (req, res) => {
    await usersController.get(req, res);
});