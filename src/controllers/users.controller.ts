import {UsersService} from "../services/users.service";
import {Request, Response} from "express";

export default class UsersController {
    private usersService = new UsersService();

    async getAll(req: Request, res: Response) {
        const result = await this.usersService.getAll();
        res.send(result);
    }
}
