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

        const result = await this.chatsService.add(dto);
        if (result) {
            res.send(result);
        } else {
            throw ApiError.Conflict("User with this username already exists");
        }
    }
}
