import {Request, Response} from "express";
import ApiError from "../errors/ApiError";
import 'express-async-errors';
import {CreateMessageDto} from "../dto";
import {MessagesService} from "../services/messages.service";
import {UpdateUserDto} from "../dto/update-user.dto";

export class MessagesController {
    private messagesService = new MessagesService();

    async getAll(req: Request, res: Response) {
        const result = await this.messagesService.getAll();
        res.send(result);
    }

    async add(req: Request<{}, {}, CreateMessageDto>, res: Response) {
        const dto = req.body;

        if (typeof dto.text !== "string") {
            throw ApiError.BadRequest("text must be a string");
        }

        if (typeof dto.author !== "number") {
            throw ApiError.BadRequest("author must be a number");
        }

        if (typeof dto.chat !== "number") {
            throw ApiError.BadRequest("text must be a number");
        }

        const result = await this.messagesService.add(dto);

        res.send({
            id: result.id
        });
    }

    async getMessagesFromChat(req: Request<{}, {}, {chat: number}>, res: Response) {
        const chat = req.body.chat;

        if (typeof chat !== "number") {
            throw ApiError.BadRequest("chat must be a number");
        }

        const result = await this.messagesService.getFromChat(chat);

        res.send({
            result
        });
    }
}
