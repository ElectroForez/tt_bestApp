import {Request, Response} from "express";
import ApiError from "../errors/ApiError";
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

        if (dto.text == undefined) {
            throw ApiError.BadRequest("Text must not be undefined");
        }

        const result = await this.messagesService.add(dto);

        res.send({
            id: result.id,
            msg: result
        });
    }
}
