import {UsersService} from "./users.service";
import {Request, Response} from "express";

const usersService = new UsersService();

export async function getAll(req: Request, res: Response) {
    const result = await usersService.getAll();
    res.send(result);
}
