import {Request, Response} from "express";
import ApiError from "../errors/ApiError";
import 'express-async-errors';
import {CreateChatDto} from "../dto";
import {ChatsService} from "../services/chats.service";

export class ChatsController {
    private chatsService = new ChatsService();

    async getAll(req: Request, res: Response) {
        const result = await this.chatsService.getAll();
        res.send(result);
    }

    async add(req: Request<{}, {}, CreateChatDto>, res: Response) {
        const dto = req.body;

        dto.users.forEach((item, pos) => {
            if (dto.users.indexOf(item) != pos) throw ApiError.BadRequest("Users id must be unique");
        })

        const result = await this.chatsService.add(dto);
        res.send({
            id: result.id
        });
    }

    async getUserChats(req: Request<{}, {}, {user: number}>, res: Response) {
        const user = req.body.user;

        const result = await this.chatsService.getUserChats(user);
        if (!result) throw ApiError.Conflict(`User with id ${user} not exists`)

        res.send({
            result
        });
    }
}
