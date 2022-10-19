import express from "express";
import UsersController  from "../controllers/users.controller";

export const router = express.Router();
const usersController = new UsersController();


router.post("/getAll", async (req, res) => {
    await usersController.getAll(req, res)
});
