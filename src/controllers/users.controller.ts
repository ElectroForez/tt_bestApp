import {UsersService} from "../services/users.service";
import {Request, Response} from "express";
import ApiError from "../errors/ApiError";
import 'express-async-errors';

export default class UsersController {
    private usersService = new UsersService();

    async getAll(req: Request, res: Response) {
        const result = await this.usersService.getAll();
        res.send(result);
    }

    async add(req: Request<{}, {}, {username: string}>, res: Response) {
        const username = req.body.username;

        if (!username) {
            throw ApiError.BadRequest("Username must not be empty");
        }

        const result = await this.usersService.add(username);
        if (result) {
            res.send(result);
        } else {
            throw ApiError.Conflict("User with this username already exists");
        }
    }
}
