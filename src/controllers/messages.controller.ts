import {Request, Response} from "express";
import 'express-async-errors';
import {CreateMessageDto} from "../dto";
import {MessagesService} from "../services/messages.service";

export class MessagesController {
    private messagesService = new MessagesService();

    async getAll(req: Request, res: Response) {
        const result = await this.messagesService.getAll();
        res.send(result);
    }

    async add(req: Request<{}, {}, CreateMessageDto>, res: Response) {
        const dto = req.body;

        const result = await this.messagesService.add(dto);

        res.send({
            id: result.id
        });
    }

    async getMessagesFromChat(req: Request<{}, {}, {chat: number}>, res: Response) {
        const chat = req.body.chat;

        const result = await this.messagesService.getFromChat(chat);

        res.send({
            result
        });
    }
}
