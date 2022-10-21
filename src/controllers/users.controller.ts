import {Request, Response} from "express";
import ApiError from "../errors/ApiError";
import 'express-async-errors';
import {CreateUserDto} from "../dto";
import {UsersService} from "../services/users.service";

export class UsersController {
    private usersService = new UsersService();

    async getAll(req: Request, res: Response) {
        const result = await this.usersService.getAll();
        res.send(result);
    }

    async add(req: Request<{}, {}, CreateUserDto>, res: Response) {
        const dto = req.body;

        if (!dto.username) {
            throw ApiError.BadRequest("Username must not be empty");
        }

        const result = await this.usersService.add(dto);

        res.send({
            id: result.id
        });
    }
}
