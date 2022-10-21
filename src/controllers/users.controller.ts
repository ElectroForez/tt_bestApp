import {Request, Response} from "express";
import ApiError from "../errors/ApiError";
import 'express-async-errors';
import {CreateUserDto} from "../dto";
import {UsersService} from "../services/users.service";
import {UpdateUserDto} from "../dto/update-user.dto";
import {validationResult} from "express-validator";

export class UsersController {
    private usersService = new UsersService();

    async getAll(req: Request, res: Response) {
        const result = await this.usersService.getAll();
        res.send(result);
    }

    async add(req: Request<{}, {}, CreateUserDto>, res: Response) {
        const dto = req.body;

        const result = await this.usersService.add(dto);

        res.send({
            id: result.id
        });
    }

    async delete(req: Request<{}, {}, {id: number}>, res: Response) {
        const id = req.body.id;

        const result = await this.usersService.deleteById(id);
        res.send({
            id: result
        });
    }

    async update(req: Request<{}, {}, UpdateUserDto>, res: Response) {
        const dto = req.body;

        const result = await this.usersService.update(dto);

        res.send({
            id: result
        });
    }

    async get(req: Request<{}, {}, {id: number}>, res: Response) {
        const id = req.body.id;

        const result = await this.usersService.getById(id);

        if (!result) throw ApiError.NotFound(`User with id ${id} not found`)
        res.send({
            result
        });
    }
}
